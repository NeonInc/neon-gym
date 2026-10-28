# Notes for Claude: neon-gym

Neon Gym is live at https://neoninc.github.io/neon-gym/ and is one tile on the Neon Inc hub
(https://neoninc.github.io/, repo `NeonInc/neoninc.github.io`).

- Edit `src/app.html`, then run `python3 tools/build.py` to rebuild `index.html`. Commit both.
- Keep the app at the repo root (`index.html` here). Don't rename the repo or move the app
  into a subfolder: the hub tile and people's home-screen shortcuts point at `/neon-gym/`.
- The hub reads the save key `menlyn-log-v2` (read-only) to show "workouts this week".
  Don't rename that key. If its shape changes (`sessions[*].date`, `.done`, `.sets`),
  update `STATS.gym` in the hub's `index.html` too.
- Don't change the hub or other apps from here. They live in their own repos.

- Cloud saves: on neoninc.github.io the gym signs in through the shared `/neon-cloud.js` (hub repo)
  and saves to `users/{uid}/gym/profile` (see `connectNeon` in `src/app.html`). Inside claude.ai it
  uses the artifact store instead. The script tag is added by `tools/build.py`, not `src/app.html`.
- Sign-in lives in the Profile sheet (round button top right, `#profileBtn`, `profileBody()`); the dot on it shows
  the save state from `setSync()`. Backup codes are in that sheet too.
- Food values: one `fd(...)` line per food in `src/app.html`; note where new values came from in `tools/food-sources.md`.
  Restaurant-style categories (`PLACE_CATS`) get place chips from the name's trailing `(Place)`, so keep that format. Values that aren't published start their note with "Estimate:".
- Exercises: one `x(...)` line each; add search words as `{k: "..."}` and put it in a `SLOTS` group so Swap offers it.
  Search (`exSearch`) uses `EX_SYN` (muscle words, matched only against muscles) and `EX_ALIAS` (spellings, matched anywhere).
- Themes are CSS-only: `:root[data-theme="..."]` blocks set the colour variables; `THEMES` in the script lists them for the
  Profile picker. Use the variables (`--accent`, `--food`, `--water`, `--fast` and their `-ink`), never raw hex, in new CSS.
  The theme is `profile.theme` (synced) plus `localStorage['neongym.theme']` so the page paints in the right colours at once.
- Water is stored per day inside that day's food doc (`S.food[d].water = [{ml, t}]`), so it syncs with food.
  A food doc can hold only water: use `tidyFoodDay(d)` instead of deleting a day when its items run out.
- Fasting state lives in the profile (`profile.fast = {on, plan, h, start, consent, notify}`, `profile.fastLog`). The service worker
  handles the fasting notification buttons (`notificationclick` in `sw.js`). A web app can't show a live countdown in the
  notification shade; the "fast complete" alert with the app closed comes from Web Push sent by the Cloudflare Worker in `push-worker/`
  (deployed by `.github/workflows/push-worker.yml`; the app's `PUSH_URL` points at it, empty = off).
