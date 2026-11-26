"""Make the delivery hero/banner images: crop each to one woman + logo, erase leftover parts of
a second person by diffusing the surrounding background into them, then extend the background
sideways to a centred 16:10 landscape frame (no AI service used).

Run from the repo root after scripts/prepare-assets.py:
    python3 -I scripts/extend-heroes.py
Reads originals from design-source/assets/heroes (unchanged), writes public/images/heroes/*,
public/og/* and updates the sizes in src/content/hero-images.json."""
import sys, os, numpy as np
from PIL import Image, ImageFilter
import json
ROOT = os.getcwd()
SRC = os.path.join(ROOT, "design-source", "assets", "heroes")
OUT = os.path.join(ROOT, "public", "images", "heroes")
HERO_JSON = os.path.join(ROOT, "src", "content", "hero-images.json")
heroes = json.load(open(HERO_JSON))
by_orig = {v[0]: k for k, v in heroes.items()}
RATIO = 1.6
# file: (crop x0,y0,x1,y1 as fractions of the original, [erase rects as fractions of the ORIGINAL])
JOBS = {
 "01-home-hero.webp":        ((0.40, 0.00, 0.99, 0.57), [(0.705, 0.465, 0.99, 0.57), (0.40, 0.47, 0.565, 0.57)]),
 "02-agency-hero.webp":      ((0.40, 0.00, 0.99, 0.57), [(0.785, 0.47, 0.99, 0.57), (0.40, 0.47, 0.565, 0.57), (0.705, 0.525, 0.785, 0.57)]),
 "03-host-hero.webp":        ((0.34, 0.06, 1.00, 0.96), []),
 "04-dashboard-hero.webp":   ((0.33, 0.06, 0.795, 0.96), []),
 "05-withdrawals-hero.webp": ((0.39, 0.00, 1.00, 0.575), [(0.585, 0.47, 1.0, 0.575)]),
 "06-host-withdrawal-hero.webp": ((0.31, 0.04, 1.00, 0.94), []),
 "07-agency-withdrawal-hero.webp": ((0.34, 0.06, 0.99, 0.96), []),
 "08-metwallet-hero.webp":   ((0.35, 0.04, 1.00, 0.96), []),
 "09-download-hero.webp":    ((0.36, 0.04, 1.00, 0.94), []),
 "10-help-hero.webp":        ((0.37, 0.06, 1.00, 0.92), []),
 "11-about-contact-hero.webp": ((0.31, 0.02, 0.99, 0.98), []),
 "12-recruitment-banner.webp": ((0.53, 0.02, 0.80, 0.78), [(0.726, 0.385, 0.80, 0.78)]),
 "13-support-banner.webp":   ((0.45, 0.00, 1.00, 1.00), []),
}

def diffuse_fill(arr, mask, iters=60):
    """Fill masked pixels by repeatedly blurring and re-imposing known pixels (simple inpainting)."""
    a = arr.copy()
    known = ~mask
    # initialise with mean of a ring around the mask
    a[mask] = arr[known].reshape(-1, 3).mean(axis=0)
    for i in range(iters):
        r = 24 if i < iters // 2 else 8
        b = np.asarray(Image.fromarray(a.clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(r))).astype(np.float32)
        a[mask] = b[mask]
    return a

def extend(c):
    arr = np.asarray(c).astype(np.float32); ch, cw = arr.shape[:2]
    tw = max(cw, int(round(ch * RATIO))); pad = (tw - cw) // 2
    canvas = np.zeros((ch, tw, 3), np.float32)
    band = max(8, cw // 40)
    canvas[:, :pad] = arr[:, :band].mean(axis=1, keepdims=True)
    canvas[:, pad + cw:] = arr[:, -band:].mean(axis=1, keepdims=True)
    canvas[:, pad:pad + cw] = arr
    bga = np.asarray(Image.fromarray(canvas.clip(0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(40))).astype(np.float32)
    xs = np.linspace(-1, 1, tw)[None, :, None]
    fade = np.clip((np.abs(xs) - 0.55) / 0.45, 0, 1) * 0.55
    bga = bga * (1 - fade) + np.array([8, 3, 14], np.float32) * fade
    m = np.ones((ch, cw), np.float32); f = max(12, cw // 18); ramp = np.linspace(0, 1, f)
    if pad > 0:
        m[:, :f] *= ramp[None, :]; m[:, -f:] *= ramp[::-1][None, :]
    fm = np.zeros((ch, tw), np.float32); fm[:, pad:pad + cw] = m
    return Image.fromarray((bga * (1 - fm[..., None]) + canvas * fm[..., None]).clip(0, 255).astype(np.uint8))

for name, (crop, erase) in JOBS.items():
    im = Image.open(os.path.join(SRC, name)).convert("RGB"); W, H = im.size
    arr = np.asarray(im).astype(np.float32)
    if erase:
        mask = np.zeros((H, W), bool)
        for (a, b, c, d) in erase:
            mask[int(b * H):int(d * H), int(a * W):int(c * W)] = True
        arr = diffuse_fill(arr, mask)
        im = Image.fromarray(arr.clip(0, 255).astype(np.uint8))
    c = im.crop((int(crop[0] * W), int(crop[1] * H), int(crop[2] * W), int(crop[3] * H)))
    out = extend(c)
    key = by_orig[name]
    delivery = heroes[key][1]
    out.save(os.path.join(OUT, delivery), quality=86, method=6)
    heroes[key][3], heroes[key][4] = out.size
    if not name.startswith(("12-", "13-")):
        og = out.resize((1200, round(1200 * out.size[1] / out.size[0])), Image.LANCZOS)
        og.save(os.path.join(ROOT, "public", "og", delivery.replace(".webp", ".jpg")), quality=82, optimize=True, progressive=True)
    print(delivery, out.size, round(out.size[0] / out.size[1], 2))

json.dump(heroes, open(HERO_JSON, "w"), indent=2)
