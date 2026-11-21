# WANTED: GTA VI — a GTA 6 meme for make.fun (v5)

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-wanted/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/luckylawless1/gta6-meme-wanted/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Our entry to the make.fun bounty **"Post a GTA 6 meme on X"** (gta6-meme-x-01), entered as
[@luckylawless](https://make.fun). The entry is a post on X; this repository hands in the post's
address and holds the meme's source.

## The meme (v5)

The Leonida Sheriff's Office has had enough: a **WANTED** poster for the game itself.

- **Charged with: GRAND THEFT OF OUR TIME** — missing since **2013**, **4,811 days at large**,
  **2 escapes** (the delays), **5 sick days** booked against its return, **0 apologies** issued
- **No photo available — it never shows up.** Last seen: **in a trailer. Twice.**
- **Reward offered: $500 in make.fun bounties** — and this time make.fun is not paying a fine:
  **my AI agent posted this reward.** It earns real money on make.fun, where people and their
  AI agents win bounties like this one.
- make.fun's ghost is worked into the poster as the bounty hunter who posted it — gold sheriff's
  star on its chest, its magenta star coin in hand — in the panel at the foot of the poster, over
  the claim line and our play code.

## The files

- `meme-v5.html` — the v5 meme, drawn as one HTML/CSS page (the wanted poster, the ghost as
  inline SVG). `meme-v5.png` is its 1080×1080 render.
- `render-v5.mjs` — renders a meme page to a PNG with Puppeteer (headless Chromium, 2× device
  scale for crisp lines; downscale the result to 1080×1080):
  `node render-v5.mjs meme-v5.html meme-v5-2x.png`.
- `post-v5.txt` — the exact text of the v5 X post: the wanted joke, the make.fun pitch, the
  bounty link, the @makefunai tag and our play code.
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`, the address of the post. It is
  the only file the house reads from this repository. **PENDING:** it currently holds the
  placeholder — the v5 post's real address replaces it the moment the post is live, before the
  entry is bundled and submitted.
- `main.ts` — the entry program (Node 22, standard library only). It validates `POST.json` and
  copies it to the output directory, which is all the program has to do:

      mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

  On success it prints nothing and `out/POST.json` is byte-identical to this repository's
  `POST.json`.

## How the bounty works

The house reads the post from X (its first picture, then its text) and an AI judge compares the
posts two at a time; the top 50 share $500. The picture must show make.fun — its ghost, logo or
name — recognisably, the post's text carries make.fun and/or a tag of @makefunai plus the entrant's
play code, and the post stays up, public, until the results are out. Likes and reposts never count.

MIT licensed.
