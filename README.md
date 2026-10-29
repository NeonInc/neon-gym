# NEON GYM

A phone-first gym plan and training log by **Neon Inc™**. It's built for a beginner who trains alone and wants lean muscle, so every plan sticks to machines, cables and supported dumbbell work.

Open it: **https://neoninc.github.io/neon-gym/**

On Android, open it in Chrome, then tap **⋮ → Add to Home screen** (or **Install app**) to get it as an app. After the first visit it works offline.

## What it does

- **Today:** shows the next workout in your plan. Each exercise is a row you tick off. Tap a row for sets, reps, rest, technique, your last numbers, what to do next time, set-by-set logging, a choice of machine, cable or dumbbell versions, and a how-to video.
- **Equipment tags:** every exercise shows what it uses, colour-coded: Machine, Machine (plate-loaded / assisted), Cable (single / rope / bar / V-handle / double), Dumbbell, Barbell (EZ bar), Smith machine and Bodyweight. The add-exercise list can be filtered by equipment, and the kg column says "kg each" for dumbbells and "assist kg" for assisted machines.
- **Workout:** today's workout stays put even if your phone closes the app. Tap **Change** to pick another workout from a list of cards; the choice is saved. Do the exercises in any order. Each exercise opens to three tabs: Log sets, How-to and Swap. Tap **Finish workout** whenever you're done: it asks "Done for today?", lists anything you didn't get to (saved as skipped), and shows exercises, sets, kg lifted and time. Your plan then moves on to the next workout. The app reopens on the tab and exercise you were on, and the rest timer keeps counting.
- **Rest timer:** starts on its own when you tick a set and shows what's next, with −15 / +15 / Skip. When rest is over it flashes, buzzes and beeps; turn on "Alert when the app is closed" (Profile) to get a notification even with the phone locked.
- **Plates per side:** for barbell, Smith and plate-loaded exercises. Follows the set you're on, shows the plates in gym colours and the closest weight you can load; pick the bar weight per exercise.
- **PRs and History:** a set that beats your best gets a gold medal and a "New PR" line right under it. Each exercise has a History tab: best set, estimated 1-rep max, last time's average and your last sessions.
- **Finish from anywhere:** a small Finish button sits in the top bar while you train (it fills in once you've ticked something), so you don't have to scroll to the bottom.
- **Add an exercise:** a search box finds exercises by name, muscle or gym slang ("pectoral machine", "pec deck", "lats", "bum", "db row", "hammer strength"), with muscle-group and equipment filters. The same search is in the plan builder. 113 exercises, including pendulum squat, hip abduction/adduction, standing and seated calf raises, Bayesian curl, Arnold press, iso-lateral (Hammer Strength) machines and more cable work.
- **Plans:**
  - Full Body A/B, 3 days (start here)
  - Upper / Lower, 4 days
  - Push / Pull / Legs
  - Body-part pairs: Chest & Biceps, Legs, Back & Triceps, Shoulders & Arms
  - Arnold split: Chest & Back, Shoulders & Arms, Legs, each twice a week (6 days)

  Each plan shows the weekly hard sets per muscle. You can also pick any workout on any day.

  **My plans:** tap **Create** to build your own. Start blank or copy a plan (it keeps the versions you picked with Swap), name each workout, add exercises from the library (filter by muscle group and equipment), set the sets, reorder, and choose how many days a week you train. Your own plans work like the built-in ones: rotation, the workout picker, history and cloud saves. Deleting a plan keeps its logged workouts in your history.
- **Food:** a week strip at the top (a small protein ring for each day; tap a day to open it), then one ring for the day (silver = calories, yellow = protein, the middle shows protein still to go) with bars for protein, calories, carbs and fat, and a "protein to go" line with ideas. A slim bar under the top bar keeps the totals in view while you scroll.
  - **Your usuals:** one-tap chips for the foods you log most, at your usual amount, with Undo.
  - **Meals:** each logged food sits in its own box. Tap it to change the amount or meal, tap × or swipe left to remove it (Undo). An empty meal offers "Same as yesterday".
  - **Adding food:** tap + on a meal, search a food and type exactly how much you had. About 1,600 foods are built in: everyday meals, SA brands and takeaways, Pretoria spots, supermarket items, frozen food, sauces, drinks and more (values and sources in `tools/food-sources.md`).
  - **My meals:** build your own (e.g. a chicken rice wrap) from any foods with amounts, say how many servings it makes, and add it any day as one line. Or log a few foods and tap "Save as my meal".
- **Water** (blue tab, far right): a bottle that fills as you log. One tap adds a glass (250 ml), bottle (500 ml) or big bottle (750 ml), or any amount. Undo, a log for the day, this week's chart, goal-hit count and streak. The daily goal is about 35 ml per kg (or your own number), plus 0.5 L on days you train.
- **Fasting** (opt-in, Profile): pick 12:12 to 23:1 after a short safety check. On the Food tab it's only a small Start fast button; once you start, the timer card opens (elapsed time, end time, rough stage) and can be shrunk to a slim bar. A small timer sits in the header on every tab, with an optional notification and a "fast complete" alert even with the app closed. Research: `tools/fasting-research.md`.
- **Your targets:** anyone can enter sex, age, height, weight, activity and goal. The app estimates calories (Mifflin-St Jeor × activity, adjusted for the goal, fat loss capped at ~1% body weight a week) and protein as a target with a range, per kg of your weight capped at a healthy BMI (or lean mass if you add body fat %). Research: `tools/targets-research.md`, and the Progress advice follows that goal.
- **Themes** (Profile → Theme): Volt (lime, the default), Ocean, Ember, Mono (clean black and white) and Daylight (light mode). Saved with your account.
- **Profile** (round button, top right): sign in with Google (your Neon Inc account), see whether your log is saved, your body details and daily targets, your plan, how much you've logged, and backup codes.
- **Stats:** four tiles at the top (workouts this week, week streak, weight, average protein), then three sections:
  - **Training · history calendar:** a cyan day means you trained, a magenta dot means you logged food. Tap any day to see that workout (every exercise with its sets, kg × reps, and what was skipped) and that day's food. Page back through earlier months.
  - **Training · exercise history:** every exercise you've trained with your best set last time and the change since your first session. Tap one for a strength chart, your best set ever and every session's sets.
  - **Body:** log weight and waist, a 7-day average chart (weight or waist) and a plain note on whether to eat more, less or the same, plus all entries.
  - **Food:** protein per day this week against your target, and your daily targets.
- **Guide** (book button, top right): progression rules, the first 12 weeks, food (no fish needed), supplements, recovery and sources.
- **Backups** (Profile → Backups and restore): signed in, everything is saved to your account as you go. The phone also keeps a copy of each of the last 14 days you can roll back to, and you can download or load a backup file or copy a backup code.

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
