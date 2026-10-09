# NEON GYM

A phone-first gym plan and training log by **Neon Inc™**. It's built for a beginner who trains alone and wants lean muscle, so every plan sticks to machines, cables and supported dumbbell work.

Open it: **https://neoninc.github.io/neon-gym/**

On Android, open it in Chrome, then tap **⋮ → Add to Home screen** (or **Install app**) to get it as an app. After the first visit it works offline.

## What it does

- **Today:** shows the next workout in your plan. Each exercise is a row you tick off. Tap a row for sets, reps, rest, technique, your last numbers, what to do next time, set-by-set logging, a choice of machine, cable or dumbbell versions, and a how-to video.
- **Equipment tags:** every exercise shows what it uses, colour-coded: Machine, Machine (plate-loaded / assisted), Cable (single / rope / bar / V-handle / double), Dumbbell, Barbell (EZ bar), Smith machine and Bodyweight. The add-exercise list can be filtered by equipment, and the kg column says "kg each" for dumbbells and "assist kg" for assisted machines.
- **Rest timer:** starts on its own when you tick a set.
- **Plans:**
  - Full Body A/B, 3 days (start here)
  - Upper / Lower, 4 days
  - Push / Pull / Legs
  - Body-part pairs: Chest & Biceps, Legs, Back & Triceps, Shoulders & Arms

  Each plan shows the weekly hard sets per muscle. You can also pick any workout on any day.
- **Food** (far right, in magenta): rings for protein and calories, then your meals. Tap **+ Add** on a meal, search a food and type exactly how much you had (grams, ml or servings) with live protein and calories. Tap a logged item to change the amount, move it to another meal or remove it. Combos split into their parts so each amount can be changed. Recent foods remember your last amount. About 80 South African foods are built in, and you can save your own.
- **Your targets:** anyone can enter sex, age, height, weight, activity and goal. The app estimates calories (Mifflin-St Jeor × activity, adjusted for the goal) and protein (1.8–2.2 g/kg by goal), and the Progress advice follows that goal.
- **Stats:** protein per day this week against your target, then log weight and waist, see 7-day average charts and a plain note on whether to eat more, less or the same. It also tracks top weight per lift.
- **Guide** (book button, top right): progression rules, the first 12 weeks, food (no fish needed), supplements, recovery and sources.
- **Backup codes:** your log lives in the browser. Copy a code to back it up or move it to another phone.

## Files

```
index.html            The app (built from src/app.html)
src/app.html          Source: styles, markup, script and food data in one file
tools/build.py        Wraps src/app.html into index.html
manifest.webmanifest  Install-as-app settings
sw.js                 Offline cache
icon.svg, icon-*.png  App icons
```

Edit `src/app.html`, then run `python3 tools/build.py`.

Pure HTML, CSS and vanilla JavaScript. No frameworks, no build dependencies, no server.

General training guidance only, not medical advice.

© 2026 Neon Inc™
