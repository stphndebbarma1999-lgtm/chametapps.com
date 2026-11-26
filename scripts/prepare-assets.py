"""Copy original package images to semantic delivery filenames and generate OG images.

Run from the repo root:  python3 -I scripts/prepare-assets.py
Originals stay untouched in design-source/assets. Delivery copies are already
compressed WebP at original dimensions; next/image serves responsive AVIF/WebP sizes.
"""
import json, os, shutil
from PIL import Image

ROOT = os.getcwd()
SRC = os.path.join(ROOT, "design-source", "assets")
PUB = os.path.join(ROOT, "public", "images")
tut = json.load(open(os.path.join(ROOT, "src/content/tutorial-images.json")))
heroes = json.load(open(os.path.join(ROOT, "src/content/hero-images.json")))
dims = {}

for guide, data in tut.items():
    out = os.path.join(PUB, "guides", guide)
    os.makedirs(out, exist_ok=True)
    for num, name, _alt in data["images"]:
        src = os.path.join(SRC, "tutorials", data["folder"], num + ".webp")
        dst = os.path.join(out, name + ".webp")
        shutil.copyfile(src, dst)
        w, h = Image.open(src).size
        dims[f"/images/guides/{guide}/{name}.webp"] = [w, h]

os.makedirs(os.path.join(PUB, "heroes"), exist_ok=True)
os.makedirs(os.path.join(ROOT, "public", "og"), exist_ok=True)
for key, (orig, name, _alt, w, h) in heroes.items():
    src = os.path.join(SRC, "heroes", orig)
    shutil.copyfile(src, os.path.join(PUB, "heroes", name))
    im = Image.open(src)
    dims[f"/images/heroes/{name}"] = [w, h]
    if w / h < 2:  # page heroes -> 1200x800 JPEG Open Graph image (no cropping)
        og = im.convert("RGB").resize((1200, 800), Image.LANCZOS)
        og.save(os.path.join(ROOT, "public", "og", name.replace(".webp", ".jpg")), quality=82, optimize=True, progressive=True)

json.dump(dims, open(os.path.join(ROOT, "src/content/image-dimensions.json"), "w"), indent=1, sort_keys=True)
print(len(dims), "images prepared — now run scripts/extend-heroes.py and scripts/redact-screenshots.py")
