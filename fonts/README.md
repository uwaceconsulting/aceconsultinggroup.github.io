# Fonts

**In use**

- `newsreader-var.woff2`: headlines (Newsreader, regular weight). Closest free match we found to the serif Citadel uses.
- `newsreader-italic.woff2`: the one italic phrase in each headline (Newsreader Italic, pinned to its display size so the file is 63KB, not 147KB).
- `figtree-var.woff2`: captions, small labels, nav and buttons (Figtree).
- `dm-sans-var.woff2`: explanation paragraphs (DM Sans, regular). Wealthsimple uses "The Future" at 400 for paragraphs, which is paid, so this is the closest free match. To use the real one, license it and swap `--text` in `css/style.css`.

All three are under the SIL Open Font License 1.1, which allows self-hosting and redistribution,
so they can sit in this public repo. The license texts are `OFL-Newsreader.txt` and
`OFL-Figtree.txt` and `OFL-DMSans.txt`. Keep them next to the font files. Files are the latin subset, straight
from Google Fonts, not modified.

**Not in use**

`jost-var.woff2` (and `OFL-Jost.txt`) is also unused now: a Futura-style trial that got replaced. Safe to remove.

The six `cabinet-grotesk-*.woff2` and `satoshi-*.woff2` files are left over from the first
design. Nothing loads them. They come from Fontshare (ITF Free Font License v2.0), whose
section 02 is unclear about public repositories, so they should be removed from the repo.

**Why not Citadel's exact fonts**

Citadel uses Signifier (Klim Type Foundry) for headlines and TT Commons (TypeType) for body.
Both are paid. To use them, license them and drop the woff2 files in here.
