# NEON GYM

A phone-first gym plan and training log by **Neon Inc™**. It's built for a beginner who trains alone and wants lean muscle, so every plan sticks to machines, cables and supported dumbbell work.

Open it: **https://neoninc.github.io/neon-gym/**

On Android, open it in Chrome, then tap **⋮ → Add to Home screen** (or **Install app**) to get it as an app. After the first visit it works offline.

## What it does

- **Today:** shows the next workout in your plan. Each exercise is a row you tick off. Tap a row for sets, reps, rest, technique, your last numbers, what to do next time, set-by-set logging, a choice of machine, cable or dumbbell versions, and a how-to video.
- **Equipment tags:** every exercise shows what it uses, colour-coded: Machine, Machine (plate-loaded / assisted), Cable (single / rope / bar / V-handle / double), Dumbbell, Barbell (EZ bar), Smith machine and Bodyweight. The add-exercise list can be filtered by equipment, and the kg column says "kg each" for dumbbells and "assist kg" for assisted machines.
- **Workout:** today's workout stays put even if your phone closes the app. Tap **Change** to pick another workout from a list of cards; the choice is saved. Do the exercises in any order. Each exercise opens to three tabs: Log sets, How-to and Swap. Tap **Finish workout** whenever you're done: it asks "Done for today?", lists anything you didn't get to (saved as skipped), and shows exercises, sets, kg lifted and time. Your plan then moves on to the next workout. The app reopens on the tab and exercise you were on, and the rest timer keeps counting.
- **Rest timer:** starts on its own when you tick a set.
- **Plans:**
  - Full Body A/B, 3 days (start here)
  - Upper / Lower, 4 days
  - Push / Pull / Legs
  - Body-part pairs: Chest & Biceps, Legs, Back & Triceps, Shoulders & Arms

  Each plan shows the weekly hard sets per muscle. You can also pick any workout on any day.

  **My plans:** tap **Create** to build your own. Start blank or copy a plan (it keeps the versions you picked with Swap), name each workout, add exercises from the library (filter by muscle group and equipment), set the sets, reorder, and choose how many days a week you train. Your own plans work like the built-in ones: rotation, the workout picker, history and cloud saves. Deleting a plan keeps its logged workouts in your history.
- **Food** (far right, in magenta): rings for protein and calories, then your meals. Tap **+ Add** on a meal, search a food and type exactly how much you had (grams, ml or servings) with live protein and calories. Tap a logged item to change the amount, move it to another meal or remove it. Combos split into their parts so each amount can be changed. Recent foods remember your last amount. About 300 foods are built in, and you can save your own. **Everyday meals** has average values for when you don't know the brand: burgers, hotdogs, sandwiches, wraps, sushi, takeaway dishes, plates of food, breakfasts, bakery items, desserts, café drinks, soups and braai food. Branded SA foods include pizza (Debonairs, Roman's), takeaways (KFC, McDonald's, Steers, Wimpy, Nando's, Spur), chips and nuts (Simba, Lay's, NikNaks, Safari), chocolates and biscuits, cooldrinks, juice, beer and cider, and SA favourites like vetkoek, bunny chow and samoosas. The search bar and categories stay at the top while you scroll, and the keyboard only opens when you tap search. Where the values come from: `tools/food-sources.md`.
- **Your targets:** anyone can enter sex, age, height, weight, activity and goal. The app estimates calories (Mifflin-St Jeor × activity, adjusted for the goal) and protein (1.8–2.2 g/kg by goal), and the Progress advice follows that goal.
- **Profile** (round button, top right): sign in with Google (your Neon Inc account), see whether your log is saved, your body details and daily targets, your plan, how much you've logged, and backup codes.
- **Stats:** four tiles at the top (workouts this week, week streak, weight, average protein), then three sections:
  - **Training · history calendar:** a cyan day means you trained, a magenta dot means you logged food. Tap any day to see that workout (every exercise with its sets, kg × reps, and what was skipped) and that day's food. Page back through earlier months.
  - **Training · exercise history:** every exercise you've trained with your best set last time and the change since your first session. Tap one for a strength chart, your best set ever and every session's sets.
  - **Body:** log weight and waist, a 7-day average chart (weight or waist) and a plain note on whether to eat more, less or the same, plus all entries.
  - **Food:** protein per day this week against your target, and your daily targets.
- **Guide** (book button, top right): progression rules, the first 12 weeks, food (no fish needed), supplements, recovery and sources.
- **Backup codes** (in Profile): copy a code to back up your log or move it to another phone.

## Files

```
index.html            The app (built from src/app.html)
src/app.html          Source: styles, markup, script and food data in one file
tools/build.py        Wraps src/app.html into index.html
tools/food-sources.md Where each food's values come from
manifest.webmanifest  Install-as-app settings
sw.js                 Offline cache
icon.svg, icon-*.png  App icons
```

Edit `src/app.html`, then run `python3 tools/build.py`.

Pure HTML, CSS and vanilla JavaScript. No frameworks, no build dependencies, no server.

General training guidance only, not medical advice.

© 2026 Neon Inc™
