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
