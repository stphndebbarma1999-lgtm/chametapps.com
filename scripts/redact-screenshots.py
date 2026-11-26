"""Blur personal details (names, usernames, IDs, phone numbers, emails, account
numbers, locations, profile photos) in the tutorial screenshots served by the site.

Reads originals from design-source/assets/tutorials (left untouched) and writes the
redacted delivery copies to public/images/guides/<guide>/<semantic-name>.webp.
Run after scripts/prepare-assets.py:  python3 -I scripts/redact-screenshots.py
Boxes are (left, top, right, bottom) in original pixel coordinates.
"""
import json, os
from PIL import Image, ImageFilter

ROOT = os.getcwd()
SRC = os.path.join(ROOT, "design-source", "assets", "tutorials")
tut = json.load(open(os.path.join(ROOT, "src/content/tutorial-images.json")))

BOXES = {
    "01-Create-Agency/04": [(645, 100, 901, 180)],                       # username
    "01-Create-Agency/05": [(480, 95, 880, 180)],                        # avatar + username
    "01-Create-Agency/06": [(660, 100, 901, 180)],                       # username
    "02-Create-Host-Account/01": [(110, 395, 560, 480)],                 # email
    "02-Create-Host-Account/02": [(125, 415, 670, 505)],                 # email
    "02-Create-Host-Account/04": [(520, 300, 860, 365)],                 # email
    "02-Create-Host-Account/08": [(245, 255, 535, 320), (190, 322, 372, 372)],  # name, country
    "02-Create-Host-Account/09": [(410, 318, 545, 365), (375, 400, 582, 452), (560, 570, 610, 618),
                                  (445, 652, 645, 702), (348, 735, 610, 786), (342, 1395, 610, 1445)],  # ID, nickname, age, region, location, gmail
    "02-Create-Host-Account/14": [(430, 105, 560, 228), (370, 245, 630, 308), (230, 312, 750, 362)],  # photo, name, country/languages
    "03-Agency-Withdrawal-and-MetWallet/01": [(540, 185, 1024, 285)],    # avatar + username
    "03-Agency-Withdrawal-and-MetWallet/02": [(570, 225, 920, 305), (700, 335, 880, 395), (355, 447, 580, 505), (650, 885, 880, 1015)],
    "03-Agency-Withdrawal-and-MetWallet/05": [(265, 635, 520, 705)],     # phone
    "03-Agency-Withdrawal-and-MetWallet/07": [(490, 548, 760, 610)],     # account
    "03-Agency-Withdrawal-and-MetWallet/10": [(610, 205, 960, 300), (450, 385, 930, 705), (450, 712, 800, 782), (640, 1000, 930, 1145)],
    "04-Host-Withdrawal-and-MetWallet/01": [(85, 595, 290, 652), (535, 595, 700, 652), (540, 975, 735, 1032)],  # host names
    "04-Host-Withdrawal-and-MetWallet/02": [(435, 120, 590, 258), (350, 262, 670, 336), (330, 340, 470, 395)],  # photo, name, country
    "04-Host-Withdrawal-and-MetWallet/04": [(160, 810, 400, 862)],       # phone
    "04-Host-Withdrawal-and-MetWallet/07": [(240, 570, 485, 635)],       # phone
    "04-Host-Withdrawal-and-MetWallet/09": [(474, 552, 765, 610)],       # account number
    "04-Host-Withdrawal-and-MetWallet/10": [(75, 995, 305, 1050), (75, 1250, 380, 1305)],  # phone, wallet account
    "05-MetWallet-Cash-Out/01": [(555, 1285, 760, 1335)],                # salary ID
    "05-MetWallet-Cash-Out/02": [(80, 985, 500, 1040)],                  # email
    "05-MetWallet-Cash-Out/03": [(525, 1318, 810, 1372)],                # salary ID
    "05-MetWallet-Cash-Out/05": [(290, 390, 460, 440)],                  # payout account
    "05-MetWallet-Cash-Out/06": [(200, 525, 460, 580)],                  # payout account
    "05-MetWallet-Cash-Out/07": [(250, 365, 490, 415)],                  # payout account
    "06-Dashboard-Guide/02": [(690, 185, 1024, 280)],                    # avatar + username
}

def redact(im, box):
    l, t, r, b = box
    region = im.crop(box)
    w, h = region.size
    # Pixelate then blur: unreadable, but still looks like a soft blur.
    small = region.resize((max(1, w // 14), max(1, h // 14)), Image.BILINEAR)
    region = small.resize((w, h), Image.BILINEAR).filter(ImageFilter.GaussianBlur(6))
    im.paste(region, (l, t))

name_of = {}
for guide, data in tut.items():
    for num, name, _ in data["images"]:
        name_of[f"{data['folder']}/{num}"] = (guide, name)

for key, boxes in BOXES.items():
    guide, name = name_of[key]
    im = Image.open(os.path.join(SRC, key + ".webp")).convert("RGB")
    W, H = im.size
    for (l, t, r, b) in boxes:
        redact(im, (max(0, l), max(0, t), min(W, r), min(H, b)))
    im.save(os.path.join(ROOT, "public/images/guides", guide, name + ".webp"), quality=90, method=6)
print(len(BOXES), "screenshots redacted")
