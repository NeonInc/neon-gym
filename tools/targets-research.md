# Neon Gym: protein and calorie targets, research notes (2026-10-21)

## 1. Short summary

- **Why 210 g came out:** the app multiplies 2.2 g/kg by *total* body weight (96.5 kg). It only switches to a "healthy weight" when BMI is over 30, and at 182 cm he is BMI 29.1, so nothing is adjusted. 2.2 × 96.5 = 212 g.
- **Why 150 g is also defensible:** 1.6 g/kg × 96.5 kg = 154 g. That is the Morton 2018 meta-analysis plateau [S2] applied to total weight.
- **Evidence ranges.** For people who lift: about 1.6 g/kg/day (95% CI up to 2.2) gives most of the lean-mass benefit when not dieting [S2][S3]. In a deficit, about 1.6–2.4 g/kg BW [S5] or 2.3–3.1 g/kg of **fat-free mass** for lean trained people, scaled *up* with leanness and deficit size [S1][S4][S6]. Joint ACSM/AND/DC position: 1.2–2.0 g/kg [S8].
- **Heavier or higher-fat people.** Protein need follows lean mass, not fat mass [S9][S11]. Credible practical fixes: base protein on goal or "healthy" weight [S12][S11], cap the reference weight [S9], or use measured FFM. In obesity, ~1.2–1.5 g/kg *actual* weight is enough [S11][S9]. Lean-body-mass formulas (Boer, Hume) are estimates only [S10].
- **Verdict for the brother:** about **165 g/day (range 130–200 g)**. The app's 210 g is at the very top of the reasonable range, and the 150 g figure is inside it. If he knows his body fat (say about 20%), the FFM route gives about 195 g (175–230).
- **Calories:** −20% of TDEE is about −610 kcal, or about 0.56 kg/week (≈0.6% BW/week). That sits inside the 0.5–1% BW/week recommended for keeping muscle [S4][S6][S7]. Keep −20%, but cap it at about 1% BW/week. Note that deficits much over about 500 kcal/day blunt lean-mass gains [S13]. The gain surpluses (+10% and +15%) give 0.29% and 0.43% BW/week, inside the 0.25–0.5%/week range [S14].

## 2. Evidence by question

### Q1. Protein needs in a deficit with resistance training
| Source | Recommendation |
|---|---|
| ISSN protein position stand (Jäger 2017) [S1] | 1.4–2.0 g/kg/d is enough for most exercising people. **2.3–3.1 g/kg/d** may be needed to best keep lean mass in resistance-trained people during hypocaloric periods. Some evidence that >3.0 g/kg/d helps fat loss. |
| Morton 2018 meta-analysis (49 RCTs) [S2] | Lean-mass gains plateau at **1.62 g/kg/d** total protein. 95% CI 1.03–2.20, so 2.2 g/kg is a "safe upper" for maximal benefit. Applies to non-dieting training. |
| Nunes 2022 meta-analysis (J Cachexia Sarcopenia Muscle) [S3] | More protein gives small extra LBM gains with resistance training. For people under 65, the benefit showed at **≥1.6 g/kg/d**. |
| Helms 2014 systematic review [S4] | Energy-restricted, resistance-trained, **lean** athletes: **2.3–3.1 g/kg FFM**, "scaled upwards with severity of caloric restriction and leanness". Included studies were men ≤23% body fat. |
| Hector & Phillips 2018 [S5]; Murphy/Hector/Phillips 2015 [S5b] | Weight loss in athletes: **1.6–2.4 g/kg/d** [S5]; ~1.8–2.7 g/kg/d with a ~500 kcal deficit plus resistance exercise [S5b]. |
| Helms, Aragon, Fitschen 2014 (natural bodybuilding prep) [S6] | 2.3–3.1 g/kg LBM, lose 0.5–1% BW/week, 15–30% kcal from fat, carbs for the rest. |
| Ruiz-Castellano et al. 2021 narrative review [S7] | 2.2–3.0 g/kg BW/d (for lean athletes), lose 0.5–1.0% BW/week, fat ≥0.5 g/kg. |
| Helms (Stronger by Science, later reflection) [S15] | When dieting, roughly up to ~2.8 g/kg total mass. Non-dieting ~1.8–2.2 g/kg. |
| ACSM / Academy of Nutrition and Dietetics / Dietitians of Canada 2016 [S8] | 1.2–2.0 g/kg/d, about 0.3 g/kg per meal. |

No newer major position stand replaces these. The ISSN 2017 stand is still the current one from ISSN. The 2022 Nunes meta-analysis and its 2024–25 author reply [S3b] keep ~1.6 g/kg as the practical point for gains.

**Key caveat:** the high deficit numbers (2.3–3.1) come from **lean, trained** people and are per kg of **FFM**. Applying "2.2 per kg total weight" to a heavier person inflates the target.

### Q2. Higher body weight or body fat
- Weijs 2024/25 (Curr Opin Clin Nutr Metab Care) [S9]: protein need depends mainly on FFM. During weight loss in obesity he suggests ≥1.2 g/kg, with body weight **capped at BMI 30**, because adjusting body weight "might be more practical" than measuring FFM. A study he cites (PROMISS) capped at BMI 25. He also says evidence in obesity is "very limited".
- StrengthLog calculator [S11]: overweight or obese users get **1.2–1.5 g/kg actual weight**, *or* "ideal body weight (at a healthy body fat %) × 1.6 g/kg". Normal-fat users who are cutting get 1.8–2.7 g/kg.
- Examine.com (guest post on Eric Cressey's site) [S12]: people with obesity should base protein on **goal weight**, not current weight.
- LBM prediction equations [S10]:
  - Boer, men: LBM = 0.407·W + 0.267·H − 19.2
  - Boer, women: LBM = 0.252·W + 0.473·H − 48.3
  - Hume, men: LBM = 0.32810·W + 0.33929·H − 29.5336
  - Hume, women: LBM = 0.29569·W + 0.41813·H − 43.2933
  - These are population estimates and cannot tell a muscular person from a fat one at the same height and weight. Boer still rises steeply with weight in obesity (a 130 kg, 180 cm man gets ~82 kg LBM), so it does not fix the "heavy person = huge target" problem. **Not recommended as the default.**
- **Conclusion:** the simplest credible method without a body-fat measurement is a **reference weight = min(actual weight, weight at BMI 25)**, applied from BMI 25, not only above 30. Multiply it by the evidence-based g/kg. With BMI 25 at 182 cm (82.8 kg), 1.6–2.2 g/kg gives 132–182 g, matching "1.6–2.2 g/kg of goal weight". If the user enters body fat %, switch to FFM × g/kg FFM, which handles muscular users properly.

### Q3. Calorie deficit sizing
- Target **0.5–1.0% BW/week** loss to keep fat-free mass [S6][S7]. In elite athletes, losing ~0.7%/week kept and even gained LBM (+2.1%), while ~1.4%/week did not (Garthe 2011) [S16].
- Meta-regression: an energy deficit of about **500 kcal/day** prevented resistance-training lean-mass gains. Strength gains were unaffected [S13].
- The lower the body fat, the smaller the deficit should be [S7][S4].
- **−20% is reasonable** for most users. For the example it equals −613 kcal, about 0.58% BW/week. Add a guard so the deficit never exceeds ~1% BW/week (≈ weight_kg × 11 kcal/day, using the ~7,700 kcal/kg rule of thumb). Show expected kg/week so users can see the pace.
- Gaining: surplus ~10–20% for 0.25–0.5% BW/week. Advanced lifters should be more conservative [S14]. The app's +10% and +15% both fit.
- Mifflin-St Jeor is the most likely of the common equations to land within 10% of measured RMR, but individual errors can be large [S17]. Tell users to adjust after 2–3 weeks of real weight trend.

## 3. Recommended formula (pseudo-code)

```
// inputs: sex, age, heightCm, weightKg, activityFactor, goal, bodyFatPct (optional)
h = heightCm / 100
bmr  = 10*weightKg + 6.25*heightCm - 5*age + (sex == 'male' ? 5 : -161)   // Mifflin-St Jeor
tdee = bmr * activityFactor

// ---- calories ----
adj = { lose: -0.20, maintain: 0, leanGain: +0.10, fastGain: +0.15 }[goal]
kcal = tdee * (1 + adj)
if goal == 'lose':
    maxDeficit = weightKg * 11            // ~1% BW/week at ~7700 kcal/kg
    kcal = max(kcal, tdee - maxDeficit)
    kcal = max(kcal, bmr)                 // design choice: don't go below BMR
kgPerWeek = (kcal - tdee) * 7 / 7700      // show to the user

// ---- protein ----
// g per kg of reference weight: [low, target, high]
PER_REF = { lose: [1.6, 2.0, 2.4], maintain: [1.4, 1.6, 2.0],
            leanGain: [1.6, 1.8, 2.2], fastGain: [1.6, 1.8, 2.2] }
// g per kg FFM (used only if body fat % is known)
PER_FFM = { lose: [2.3, 2.6, 3.0], maintain: [1.9, 2.1, 2.6],
            leanGain: [1.9, 2.2, 2.6], fastGain: [1.9, 2.2, 2.6] }

if bodyFatPct known (3..60):
    ffm = weightKg * (1 - bodyFatPct/100)
    [lo, tgt, hi] = PER_FFM[goal] .map(x => x * ffm)
    basis = 'lean mass'
else:
    refWeight = min(weightKg, 25 * h * h)  // weight at BMI 25, applied whenever BMI > 25
    [lo, tgt, hi] = PER_REF[goal] .map(x => x * refWeight)
    basis = (refWeight < weightKg) ? 'healthy-weight' : 'body weight'

round all to nearest 5 g; display "Protein: tgt g (lo–hi g)" + basis note

// ---- fat & carbs ----
fat   = max(0.25 * kcal / 9, 0.6 * refWeightOrWeight)   // ≥0.5 g/kg floor per [S7]; 0.6 is fine
carbs = (kcal - 4*tgt - 9*fat) / 4
```

Notes on the constants:
- PER_REF "lose" 1.6–2.4 matches Hector & Phillips [S5]. The target 2.0 sits mid-range.
- Maintain 1.6 is the Morton breakpoint [S2]. The upper end of 2.0–2.2 is the CI top [S2] and the ACSM upper bound [S8].
- Gains 1.6–2.2 follow [S2][S14].
- PER_FFM lose 2.3–3.0 follows Helms 2014 [S4] and ISSN [S1]. The non-deficit FFM values are the 1.6–2.2 g/kg BW range converted at ~15% body fat (1.6/0.85 ≈ 1.9, 2.2/0.85 ≈ 2.6). This conversion is my derivation, not a published figure.
- Current code differences: (a) cap at BMI 25 instead of 30, and always apply it; (b) lose 2.2 becomes 2.0 target; (c) show a range; (d) optional body-fat path.

## 4. Example: male, 96.5 kg, 182 cm, 26 y, moderately active (×1.55)

BMR 1,978 kcal · TDEE ≈ 3,065 kcal · BMI 29.1 · weight at BMI 25 = 82.8 kg · Boer LBM 68.7 kg · Hume LBM 63.9 kg

**Calories by goal (unchanged %):**
| Goal | kcal | Expected change |
|---|---|---|
| Lose (−20%) | 2,450 | −0.56 kg/wk (0.58% BW) ✔ |
| Maintain | 3,065 | 0 |
| Lean gain (+10%) | 3,370 | +0.28 kg/wk (0.29%) ✔ |
| Faster gain (+15%) | 3,525 | +0.42 kg/wk (0.43%) ✔ |

**Protein, lose fat, by candidate formula:**
| Formula | Protein g/day |
|---|---|
| A. Current app: 2.2 × actual weight | **212** |
| B. 1.6 × actual weight (Morton plateau; likely the "150 g" source) | 154 (2.2× = 212) |
| C. Estimated LBM (Boer) × 2.3–3.1 | 158–213, mid 2.6 → 179 |
| C'. Estimated LBM (Hume) × 2.3–3.1 | 147–198, mid → 166 |
| D. Obesity rule 1.2–1.5 × actual | 116–145 (too low for a lifter at BMI 29) |
| **E. Recommended: ref weight 82.8 × 1.6/2.0/2.4** | **165 g (130–200)** |
| E with body fat known, 18% / 22% / 26% → FFM × 2.6 (2.3–3.0) | 205 (180–235) / 195 (175–225) / 185 (165–215) |

**Recommended formula, other goals (no body fat %):**
- maintain: 130 g (115–165)
- lean gain: 150 g (130–180)
- faster gain: 150 g (130–180)

**Lose macros (recommended):** 2,450 kcal · protein 165 g · fat 68 g (25% kcal) · carbs ~295 g.

**Answer to the user's question:** both numbers are within reason. 150 g is enough for most of the benefit [S2][S3]. 210 g is the high end and is mainly worth it if he is fairly lean, has a lot of muscle, or uses a larger deficit [S1][S4]. A good target is ~165 g (anything from 130–200 g works), or about 195 g if he is genuinely ~20% body fat.

## 5. Caveats
- The BMI-25 cap under-counts muscular people (e.g. a lean 96.5 kg lifter). That is why the optional body-fat input exists, and the UI should say "if you lift and are fairly lean, enter body fat % for a better number".
- Body-fat % from bathroom scales or BIA is noisy (±several %). A 5% error shifts the FFM target by ~10–15 g, which is acceptable.
- Most deficit data come from young, lean, trained men. Evidence in obesity is "very limited" [S9].
- Older adults (≥65) may benefit from ≥1.2 g/kg even when not training [S3][S9]. The formula's floor of 1.4 × ref weight already covers this.
- Higher protein is safe for healthy people, but people with kidney disease should follow medical advice (standard caveat; not researched here).
- Mifflin-St Jeor plus activity multipliers can be off by 10% or more for individuals [S17]. Users should adjust kcal by ~5–10% based on their 2–3-week weight trend.
- The 7,700 kcal/kg conversion is a rough rule; real loss slows over time.
- The BMR floor and the "11 kcal per kg" cap are design choices built from [S6][S7], not published constants.

## 6. Sources
- [S1] Jäger R et al. ISSN Position Stand: protein and exercise. JISSN 2017;14:20. https://pubmed.ncbi.nlm.nih.gov/28642676/ · https://pmc.ncbi.nlm.nih.gov/articles/PMC5477153
- [S2] Morton RW et al. Protein supplementation & RT-induced gains: meta-analysis. Br J Sports Med 2018;52:376–384. https://bjsm.bmj.com/content/52/6/376 · https://pubmed.ncbi.nlm.nih.gov/28698222/
- [S3] Nunes EA et al. Systematic review and meta-analysis of protein intake to support muscle mass and function in healthy adults. J Cachexia Sarcopenia Muscle 2022;13(2):795–810. https://experts.mcmaster.ca/scholarly-works/2169568 · https://pubmed.ncbi.nlm.nih.gov/35187864/
- [S3b] Nunes et al., authors' reply to comment (2025). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12547074/
- [S4] Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab 2014. https://pubmed.ncbi.nlm.nih.gov/24092765/
- [S5] Hector AJ, Phillips SM. Protein recommendations for weight loss in elite athletes. Int J Sport Nutr Exerc Metab 2018;28(2):170–177. https://sponet.de/sponet/Record/4045942?lng=en
- [S5b] Murphy CH, Hector AJ, Phillips SM. Considerations for protein intake in managing weight loss in athletes. Eur J Sport Sci 2015. https://pubmed.ncbi.nlm.nih.gov/25014731/
- [S6] Helms ER, Aragon AA, Fitschen PJ. Evidence-based recommendations for natural bodybuilding contest preparation. JISSN 2014;11:20. https://openrepository.aut.ac.nz/items/723f44d2-7c20-4214-ba62-987339099039/full · https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4033492/
- [S7] Ruiz-Castellano C et al. Achieving an optimal fat loss phase in resistance-trained athletes: a narrative review. Nutrients 2021;13:3255. https://mdpi-res.com/d_attachment/nutrients/nutrients-13-03255/article_deploy/nutrients-13-03255.pdf
- [S8] Thomas DT, Erdman KA, Burke LM. Position of AND, DC and ACSM: Nutrition and athletic performance. 2016. https://pubmed.ncbi.nlm.nih.gov/26917108/ · summary: https://www.myhealthcareer.com.au/dietetics/joint-position-statement-sport-nutritions
- [S9] Weijs PJM. Protein requirement in obesity. Curr Opin Clin Nutr Metab Care 2025;28(1):27–32. https://pure.amsterdamumc.nl/ws/files/142148308/Protein-requirement-in-obesity.pdf
- [S10] Lean body mass (Boer, Hume formulas). https://en.wikipedia.org/wiki/Lean_body_mass
- [S11] StrengthLog protein calculator (overweight users 1.2–1.5 g/kg; or ideal weight × 1.6). https://www.strengthlog.com/protein-calculator/
- [S12] Examine.com guest article: How much protein do you really need? (obese: use goal weight). https://ericcressey.com/how-much-protein-do-you-really-need/
- [S13] Murphy C, Koehler K. Energy deficiency impairs resistance training gains in lean mass but not strength: meta-analysis and meta-regression. Scand J Med Sci Sports 2022;32(1):125–137. https://lida.sport-iat.de/ta/Record/4071991?lng=en
- [S14] Iraki J, Fitschen P, Espinar S, Helms E. Nutrition recommendations for bodybuilders in the off-season. Sports 2019;7(7):154. https://doaj.org/article/0e44dd10f0ac46bbbd4817be206c8ff6
- [S15] Helms E. Reflecting on five years studying protein. Stronger by Science. https://www.strongerbyscience.com/?p=45103
- [S16] Garthe I et al. Effect of two different weight-loss rates on body composition and strength and power-related performance in elite athletes. Int J Sport Nutr Exerc Metab 2011;21(2):97–104. https://lida.sport-iat.de/ta/Record/4020442?lng=en
- [S17] Frankenfield D, Roth-Yousey L, Compher C. Comparison of predictive equations for resting metabolic rate. J Am Diet Assoc 2005;105(5):775–789. https://pure.psu.edu/en/publications/comparison-of-predictive-equations-for-resting-metabolic-rate-in-
