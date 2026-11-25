# Fonts

**In use**

- `newsreader-var.woff2`: headlines (Newsreader, regular weight). Closest free match we found to the serif Citadel uses.
- `figtree-var.woff2`: body text and buttons (Figtree).

Both are under the SIL Open Font License 1.1, which allows self-hosting and redistribution,
so they can sit in this public repo. The license texts are `OFL-Newsreader.txt` and
`OFL-Figtree.txt`. Keep them next to the font files. Files are the latin subset, straight
from Google Fonts, not modified.

**Not in use**

The six `cabinet-grotesk-*.woff2` and `satoshi-*.woff2` files are left over from the first
design. Nothing loads them. They come from Fontshare (ITF Free Font License v2.0), whose
section 02 is unclear about public repositories, so they should be removed from the repo.

**Why not Citadel's exact fonts**

Citadel uses Signifier (Klim Type Foundry) for headlines and TT Commons (TypeType) for body.
Both are paid. To use them, license them and drop the woff2 files in here.
