# Neon Gym: intermittent fasting (IF) feature research

Researched 2026-10-21. Every claim has a numbered source [n]; the source list is at the end.
Where a source could not be opened (PubMed/PMC sometimes showed a captcha), the claim is marked
**(abstract not read)**, or I left the claim out. Anything I could not verify on a real device is marked **(verify on device)**.

---

## TL;DR

- **Content:** Time-restricted eating (TRE: 12:12 to 16:8) works about as well as ordinary calorie restriction for fat loss. It is **not better**: Liu 2022 NEJM [2], Lin 2023 Ann Intern Med [3], and the BMJ 2025 network meta-analysis of 99 trials [5], where differences between IF and continuous restriction were under 2 kg. It works mainly by making people eat less. With **resistance training and enough protein**, lean mass holds up [7][8][9][10]. Without them, TREAT [1] found more appendicular lean-mass loss. Sell it as "a structure that some people find easier", not as a metabolic hack.
- **Safety gate:** Show an opt-in screen with a "not for you if…" list before the timer starts: under 18, pregnant or breastfeeding, a history of eating disorders, type 1 diabetes or taking insulin, sulfonylureas or SGLT2 inhibitors, underweight [12][13][14][15][16][17].
- **Stages:** Label them "roughly" and "in studies". The only well-supported points are the metabolic switch (~12–36 h [20]) and ketones rising slowly (lab mean of ~21 h to reach 0.5 mmol/L at rest [21]). **Don't show an autophagy milestone.** Human timing is unknown [22][23][24].
- **Tech:** A web app **cannot** show a live, ticking chronometer notification. Notification Triggers was abandoned [27], and Live Activities and chronometers are native-only. Recommended plan:
  1. **At fast start:** show one silent, tagged service-worker notification ("Fasting since 20:00 · ends 12:00"). On Android, `timestamp = endTime` should make the header read "in 3h", and the system keeps that text updated [28][29] (verify on device).
  2. **At fast end, with the app closed:** send a **Web Push scheduled by a free Cloudflare Worker plus a Durable Object alarm**. This is free on the Workers Free plan [37][38], needs no Firebase Blaze plan, and works on Android and on iPhone home-screen installs (iOS 16.4+) [30].
  3. **Fallback** for people with no push permission, or iPhone users who haven't installed the app: an **"Add to calendar" (.ics with VALARM)** button.

---

## A) Fasting content

### A1. Protocols: definitions and popularity

| Protocol | Definition | Notes for the app |
|---|---|---|
| **12:12** | 12 h fast / 12 h eating window daily (e.g. 20:00→08:00) | Mostly just an overnight fast. Easiest starting point. The control group in the AHA poster ate within 12–16 h windows [18]. |
| **14:10** | 14 h fast / 10 h window | Common "step 2". |
| **16:8** | 16 h fast / 8 h window | The most studied TRE window. TREAT used 12:00–20:00 [1], Lin 2023 used 12:00–20:00 [3], Liu 2022 used 08:00–16:00 [2], Moro used 13:00–20:00 [7]. It was the most-practised method in a survey of 514 people who fast (43.8%) [11]. |
| **18:6** | 18 h fast / 6 h window | de Cabo & Mattson use 18:6 as their example daily TRF prescription [4]. |
| **20:4 ("Warrior")** | 20 h fast / 4 h window | Tinsley 2017 used a 4-h window (16:00–24:00) on 4 non-training days a week [8]. It is hard to fit enough protein feedings into it (see A2). |
| **OMAD (~23:1)** | One meal a day | Most extreme daily option. Same protein-distribution problem, and the highest dropout risk. |
| **5:2** | Two non-consecutive days a week at ~500 kcal (women) / 600 kcal (men), with normal eating on the other 5 days | Definition from Hajek 2021 RCT [6]. Weight loss was similar to standard advice at 1 year, and only 22% were still doing 5:2 at 1 year [6]. One of the three most-studied regimens [4]. |
| **Alternate-day (ADF / modified ADF)** | Fast days (0–25% of energy needs) alternate with feast days | Trepanowski 2017 used 25% on fast days and 125% on feast days. Weight loss equalled daily calorie restriction, with more dropouts (38% vs 29%) [19]. In BMJ 2025 it had a small edge (~1.3 kg) over continuous restriction, below the clinically important threshold [5]. |

**Popularity:** In the IFIC 2020 US survey, IF was the most popular named diet (~10% of respondents) [25]. Among fasting methods, 16:8 is the most commonly practised [11] (one Saudi survey; there's no global dataset).

**Beginner-friendly:** 12:12 → 14:10 → 16:8, stepping up only if the person likes it. 18:6 and longer, 20:4, OMAD, 5:2 and ADF should be "advanced" options with an extra warning. Rationale: higher ADF dropout [19], low 5:2 adherence at 1 year [6], and the protein-distribution problem with very short windows [26].

### A2. Evidence: fat loss, muscle, protein

**IF vs ordinary calorie restriction (fat and weight loss)**
- **Lowe et al. 2020, TREAT (JAMA Intern Med)** [1]: 116 adults with overweight or obesity, 16:8 (12:00–20:00) vs 3 structured meals, 12 weeks, no calorie target. TRE −0.94 kg vs control −0.68 kg; the difference was not significant (P = .63).
- **Liu et al. 2022 (NEJM)** [2]: 139 adults with obesity. **Both groups** ate a calorie-restricted diet (1,500–1,800 kcal men, 1,200–1,500 kcal women); one group also ate only 08:00–16:00. At 12 months: −8.0 kg vs −6.3 kg, difference −1.8 kg (95% CI −4.0 to 0.4; P = .11), not significant. Body fat, lean mass and metabolic markers followed the same pattern. Conclusion: "not more beneficial than daily calorie restriction."
- **Lin et al. 2023 (Ann Intern Med)** [3]: 90 adults with obesity. 8-h TRE **without calorie counting** vs 25% calorie restriction vs control, 12 months. Compared with control: TRE −4.61 kg, CR −5.42 kg, with no significant difference between TRE and CR. Both arms ate ~400–425 kcal/day less. **The window works by reducing intake.**
- **de Cabo & Mattson 2019 (NEJM review)** [4]: summarises the mechanisms (metabolic switching, autophagy in animal and cell work) and the three main regimens. Notes that hunger, irritability and poorer concentration are common at first and usually fade within ~1 month. Also notes that the trials were mostly in overweight young and middle-aged adults, so the results can't be generalised to other ages.
- **Semnani-Azad et al. 2025 (BMJ), network meta-analysis** [5]: 99 RCTs, 6,582 adults. All IF strategies and continuous restriction beat an unrestricted diet by small amounts. Only ADF beat continuous restriction (~1.29 kg), and no difference reached the 2 kg clinically important threshold. Certainty was low to moderate.
- **Hajek 2021 (PLoS ONE), 5:2** [6]: −1.9 kg vs −1.8 kg with standard advice at 1 year.

**Honest framing for the app:** "IF helps you eat less by giving you a structure. Fat loss comes from the calorie deficit, and studies find it about equal to ordinary calorie control."

**Muscle when combined with resistance training**
- **Moro et al. 2016 (J Transl Med)** [7]: 34 resistance-trained men, 8 weeks, 16:8 with meals at 13:00, 16:00 and 20:00, similar macros (~22% protein). Fat mass fell in TRF; fat-free mass and max strength were maintained in both groups.
- **Tinsley et al. 2017 (Eur J Sport Sci)** [8]: 18 analysed young men, 4-h window on 4 non-training days a week, 8 weeks of RT. TRF cut intake by ~650 kcal on those days. Strength gains were similar. Lean mass: control +2.3 kg vs TRF −0.2 kg, not significant (small sample), "did not adversely affect lean mass retention". **Read with caution:** the trend went against TRF.
- **Tinsley et al. 2019 (Am J Clin Nutr)** [9]: 40 resistance-trained women, ~7.5-h window, **protein ~1.6 g/kg/day in all groups**, whey supplement in all groups. Fat-free mass gains (~2–3%) and strength gains were similar to a 13-h window.
- **Hays et al. 2025 (Int J Obes) meta-analysis, TRE + exercise** [10]: 15 trials, 338 participants. Small reduction in fat mass (ES −0.20); no significant effect on fat-free mass (P = .07). Comparator: exercise with unrestricted eating.
- **Without RT or protein focus:** TREAT [1] found appendicular lean mass fell more with TRE (−0.47 kg between groups, P = .009), and lean mass was ~65% of the weight lost. The authors flag protein intake (not measured) as a likely factor.

**Protein distribution concern**
- ISSN position stand [26]: 1.4–2.0 g/kg/day for exercisers, with per-meal doses of ~0.25 g/kg (20–40 g), "ideally evenly distributed, every 3–4 h, across the day."
- In practice, an 8-h window still fits 3 protein feedings ~3–4 h apart (as in Moro [7]). A 6-h window fits 2–3, while 4-h windows and OMAD can't follow that pattern.
- **App suggestion:** If the person has a muscle-gain or strength goal and picks 18:6 or longer, show a hint like "Aim for at least 2–3 protein-rich meals in your window (≈0.25 g/kg each)" and link it to the existing protein target.

### A3. Safety

**Should not use the timer, or should ask a doctor first.** Show this before first use and require an "I understand" tick:
- Under 18 [12][13]
- Pregnant or breastfeeding [12][13][15]
- History of an eating disorder [12][13][15]. In a Canadian sample of 16–30-year-olds, IF was *associated* with eating-disorder behaviours (cross-sectional, so correlation only) [16].
- Type 1 diabetes, or anyone taking insulin [12][13]. Diabetes generally: fasting can disrupt glucose control [15].
- On **sulfonylureas** (hypoglycaemia risk; doses often need changing) or **insulin**. This needs a clinician's plan and glucose monitoring [14].
- On **SGLT2 inhibitors** (e.g. dapagliflozin, empagliflozin): prolonged fasting can trigger euglycaemic DKA, and clinicians are advised to consider withholding them during prolonged fasting [17].
- Medicines that must be taken with food, and blood pressure or heart medicines (electrolyte issues) [15b]
- Underweight / low body weight [15b], high risk of bone loss or falls [15]
- Older adults and anyone with a chronic condition (heart disease etc.) should check with a doctor first [15b]. The trials were mostly in younger and middle-aged adults [4].

A suggested soft gate: if the person's logged BMI is below 18.5, or age (if known) is under 18, hide or disable the fasting timer and show a short explanation.

**Common side effects:** Hunger, irritability and poorer concentration early on, usually fading within ~1 month [4]. Also fatigue, dizziness, headaches, mood swings, constipation and menstrual changes [15], and cravings [13]. The app should tell people to stop and eat if they feel faint, unwell or very dizzy, and to see a doctor about unusual anxiety, headaches or nausea [12].

**Signals to mention with caution:** A 2024 AHA conference poster linked <8-h eating to higher CV death. It was observational, based on 2 days of dietary recall, one positive result out of 36 analyses, and not peer-reviewed at the time [18]. Mayo Clinic mentions it [15]. Phrase it as "long-term effects are not well studied."

**What's allowed during a fast:**
- Water, black coffee and plain tea (no milk or sugar): zero-calorie drinks are allowed [12][13]. Lin 2023's TRE arm allowed calorie-free fluids outside the window [3].
- Medication: taking it doesn't "break" a fast. Keep the normal regimen unless the doctor says otherwise [15b].
- **Zero-calorie sweetened drinks (diet soda, sweeteners):** The calories are ~0. In a crossover study, sucralose in water had no measurable effect on glucose, insulin or GLP-1, while diet sodas modestly raised GLP-1 and insulin was "nominally" higher [36]. Honest label: "Counts as fasting for calories; some people prefer to avoid them. Evidence is small." Don't claim they "spike insulin".
- Milk in coffee, bone broth, BCAAs and protein shakes contain calories and break the fast. Electrolytes without sugar are fine.

### A4. Fasting stages: what's real and how to label it

| App-style claim | What the evidence says | Suggested honest label |
|---|---|---|
| "Blood sugar falls" (~4–8 h) | After a meal is absorbed, glucose and insulin return to baseline. Glucose stays in the normal range because the liver releases stored glycogen; it doesn't "crash". (General physiology; timing depends on meal size.) | **0–4 h "Digesting":** "Your last meal is being absorbed." **4–12 h "Settling":** "Insulin falls back to baseline; your liver keeps blood sugar steady." |
| "Glycogen depleting" (~12 h) | "Energy restriction for 10 to 14 hours or more results in depletion of liver glycogen stores" [4]. This is the fast end of the range; it depends on activity and the last meal. | **~12 h+ "Using stored fuel":** "Liver glycogen is running lower. In studies this takes roughly 10–14 h or more." |
| "Ketosis rising" (~12–18 h) | Ketones begin to rise ~8–12 h into a fast [4]. The "metabolic switch" usually happens 12–36 h after the last food [20]. In a lab study at rest, people took a **mean ~21 h** to reach 0.5 mmol/L BHB [21]. | **~12–18 h "Fat burning ramps up":** "Your body leans more on fat; ketones start to rise." **~18–24 h "Light ketosis (for some)":** "In one lab study people reached light ketosis after about 21 h on average." Avoid saying "in ketosis" at 16 h. |
| "Autophagy" (16–24 h+) | Evidence is from animals and cells [4]. Humans: a 72-h fast gave **conflicting** muscle markers (LC3B-II +30% but p62 also rose) [22]. A 2025 JCI Insight study found **no difference** in blood-cell autophagic flux between a 12-h fasted and a fed state [24]. An expert (Varady) says "we just don't know the hours" [23]. | **Don't show an autophagy milestone,** or show it only in an info card: "Cell 'recycling' (autophagy) increases with fasting in animal studies. In humans, nobody knows when or whether it starts at 16–24 h." |
| "HGH 5x", "immune reset", "stem cells" at 24–72 h | Outside the scope of this research. These come from small or prolonged-fasting studies. | Leave out. |

General UI rule: every stage chip says "roughly" and has an "i" button with the source. The timer should cap at the chosen goal plus a soft warning past 24 h ("Fasts over 24 h aren't supported by this app. Talk to a doctor.").

---

## B) Web/PWA: showing a fasting timer outside the app

### B1. Capability check (Android Chrome vs iPhone home-screen PWA)

Browser-support data comes from MDN's browser-compat-data (BCD) JSON [31] unless another source is given.

| Capability | Android (Chrome) | iPhone (Safari, home-screen web app) | Use for fasting? |
|---|---|---|---|
| `registration.showNotification()` | Yes | Yes, **16.4+, home-screen apps only** [31][30] | Yes: start-of-fast card |
| `tag` (replace in place) | Yes | **No:** BCD says the property can be set but has no effect [31] | Android: update the card in place. iOS: show once, don't re-post |
| `renotify` | Yes (Chrome 50). Same tag with no renotify means a **silent replace** [29] | No | Update the card silently on Android |
| `silent` | Yes | No (iOS BCD = false) [31] | Android: the start card makes no sound |
| `timestamp` | Yes. **Shown only on Chrome for Android**, top right [29]. Chrome passes it to Android's `when` field [32]. Android's `DateTimeView` renders future times in short "future" wording (`duration_hours_shortest_future`) and refreshes on minute ticks [33] | No | **Closest thing to a live countdown on the web:** set `timestamp: endAt` and Android should show something like "in 3h". BCD marks it experimental (verify on device; OEM skins may differ) |
| `requireInteraction` | Supported in Chrome [31]. On Android the notification stays in the shade until swiped anyway | No | Not needed |
| `actions` (buttons) | Yes, **max 2** in Chrome (`Notification.maxActions`) [34] | **No** [31] | Android: "End fast" / "Open" buttons. iOS: tap opens the app |
| Ongoing / non-dismissable, chronometer, progress bar | **No web API.** Native Android has `setUsesChronometer` / countdown [35]; the web doesn't | **No.** Live Activities are native (ActivityKit) only | Not possible |
| **Notification Triggers** (`showTrigger`, `TimestampTrigger`) | **Development ended**, listed as "No longer pursuing" [27] | No | Not usable |
| **Periodic Background Sync** | Chrome only, installed app only, engagement-based; "timing … not controlled by developers" [39] | No [31] | Not usable for timers |
| **Background Fetch** | Chrome only (for large downloads) [31] | No | Not relevant |
| `setTimeout` in the service worker | The SW is terminated when idle | Same | Not usable |
| **Web Push** (Push API) | Yes. Needs a sender (server with VAPID keys) | Yes, **16.4+ after Add to Home Screen; permission request must come from a user tap**; delivered through APNs; no Apple developer account needed [30] | **Yes: end-of-fast alert while the app is closed** |
| **Declarative Web Push** | No | iOS/iPadOS **18.4+**. The JSON payload is shown even if the SW fails, and there's no penalty for a failed SW display [40] | Optional robustness on iOS |
| **Badging** `navigator.setAppBadge()` | **Not supported** on Chrome Android [31] (launcher shows a dot when a notification exists) | Yes, 16.4+, home-screen only. **Shows only if notification permission is granted** [41]. Can be set from the SW in a push handler, but a badge alone doesn't count as the required visible notification [41] | iOS: `setAppBadge(1)` while fasting, cleared by the end push |
| **Screen Wake Lock** | Chrome 84+ [31] | 16.4+ in Safari; **18.4+ in iOS home-screen apps** per BCD [31] | Optional "keep screen on" full-screen timer view |
| **Media Session trick** (play silent audio so a media card shows in the shade) | Technically possible: Chrome shows a media notification for media ≥5 s, and play needs a user gesture [42] | Unreliable | **Not recommended.** It holds audio focus (pauses the user's music, a real problem in a gym app), drains battery, and is a misuse of the API |
| **Document Picture-in-Picture** | Desktop Chrome 116+ only; **not on Android** [31] | No | Not relevant |
| **Android alarm intent** (`intent:#Intent;action=android.intent.action.SET_ALARM;…`) | Chrome only launches activities in the **BROWSABLE** category, and only from a user gesture [43]. Clock apps register SET_ALARM/SET_TIMER with category **DEFAULT**, and the caller needs the `SET_ALARM` permission [44]. **Expected not to work** (not tested on device) | No | Don't rely on it. At most an experimental "Set phone alarm" link with `S.browser_fallback_url` |

### B2. Sending scheduled pushes: who sends them, and the cost

Web Push needs something on a server to send the message at the end time. The browser push services (FCM for Chrome, APNs for Safari) only deliver it.

| Option | Free? | Timing accuracy | Complexity | Notes |
|---|---|---|---|---|
| **Cloudflare Worker + Durable Object alarm (one alarm per fast)** | **Yes, Workers Free:** 100k requests/day, 100k rows written/day, 5 GB. `setAlarm()` = 1 row write, an alarm firing = 1 request [38]. Durable Objects (SQLite) are on the Free plan since Apr 2025 [45] | Fires at the set time | Medium (~100 lines) | **Recommended.** Each fast costs about 3 requests and 2 writes. VAPID and encryption via the zero-dependency `@pushforge/builder` (MIT; runs on Workers) [46][47]. CPU limit on Free is 10 ms per invocation [37]; WebCrypto push encryption should fit, but watch it |
| Cloudflare Worker cron (every minute) + D1 table of due fasts | Yes. Cron min 1 min; 5 cron triggers per account [37][48]; D1 free 5M reads / 100k writes per day [49] | ≤1 min late | Medium | Good alternative if DOs feel heavy. 1,440 runs a day, even when idle |
| Firebase Cloud Functions + Cloud Tasks / Scheduler | **No: Cloud Functions isn't available on Spark** ("Not applicable") [50]. Blaze has a 2M invocations/month free tier [50]; Cloud Scheduler gives 3 free jobs per account, then $0.10/job/month [51] | Good | Medium | Only if you're happy to put a card on file (Blaze). Fits the Firebase stack. FCM itself is free on Spark [50] but has no "send at" scheduling, so it doesn't remove the need for a server |
| GitHub Actions `schedule` cron | Free for public repos | **Poor:** shortest interval 5 min, "can be delayed during periods of high loads", "some queued jobs may be dropped", and disabled after 60 days without repo activity in public repos [52] | Medium | Not recommended for "your fast is over" alerts |

Notes on the push path:
- You don't need the Firebase Messaging SDK. Use the standard `pushManager.subscribe()` with your own VAPID public key. Chrome's endpoint is FCM underneath and Safari's is APNs [30].
- Store the push subscription in Firestore under `users/{uid}/gym/...` (within the existing rules). The Worker doesn't need Firestore access if the app sends the subscription and `endAt` to the Worker when a fast starts, and sends a cancel when the fast ends early.
- Authenticate calls to the Worker with the Firebase ID token (`user.getIdToken()`), verified in the Worker against Google's securetoken JWKS. Or at minimum use a random `fastId` plus rate limiting.
- Send with `urgency: "high"` and a TTL of about 1 hour so a stale "fast over" doesn't arrive the next day (`@pushforge` supports ttl, urgency and topic [47]).
- iOS: every push must show a notification [41][40]. Never send silent "update" pushes.

### B3. Ranked answer: the most reliable options without native code

**(a) A persistent "fasting" notification with start and end time**

1. **Local SW notification at fast start** (free, simple, both platforms). Fires from the page when the person taps "Start fast". Android: `tag:'fast'`, `silent:true`, `timestamp:endAt`, two actions. The header should read "in Xh" and update by itself [29][33] (verify on device). iOS: plain card, no tag replacement, no actions [31]. The person can swipe it away on both platforms; there's no way to make it truly "ongoing" on the web.
2. While the app is open, refresh the Android card silently each ~5–15 min (same tag, no renotify) so the body text ("4 h 12 m to go") stays roughly correct. Skip this on iOS (tag is unsupported, so it would stack duplicates).
3. iOS extra: `navigator.setAppBadge(1)` while fasting, cleared when the end push arrives [41].
4. Not viable: Notification Triggers [27], chronometer or progress notifications, Live Activities, Media Session hack [42], Document PiP [31].

**(b) An alert when the fast ends, even if the app is closed**

1. **Web Push scheduled by a Cloudflare Worker + Durable Object alarm**: most reliable and free [38][45]. Android: works once notification permission is granted. iPhone: requires Add to Home Screen + iOS 16.4+ + permission from a user tap [30]. Cancel the alarm if the person ends early.
2. **"Add to calendar" fallback**: zero infrastructure, very reliable alert (the system calendar rings even if the app is uninstalled), works without push permission. Downsides: one manual tap per fast, and it won't auto-cancel if the fast ends early.
   - **.ics with `VALARM TRIGGER:PT0M`**: iPhone handles `text/calendar` natively. Best served from an https URL (e.g. `GET https://<worker>/ics?...`) rather than a `blob:` URL, because blob downloads in home-screen mode are less reliable (verify on device). On Android, Google Calendar only gained .ics file import in about Oct 2025 (v2025.41) [53]; Samsung Calendar and others vary.
   - **Google Calendar template link** (`https://calendar.google.com/calendar/render?action=TEMPLATE&text=…&dates=YYYYMMDDTHHmmSSZ/YYYYMMDDTHHmmSSZ&details=…`) [54]: works on Android. **There's no reminder parameter** [54]; the person's default event notification applies.
3. **Firebase Functions on Blaze**: equally reliable as option 1, but needs the paid plan [50][51].
4. **GitHub Actions cron**: delays and dropped jobs [52]. Not recommended.
5. **Android alarm intent link**: expected to be blocked [43][44]. Don't build it.

---

## Code sketches (minimal; adapt to `src/app.html` + `sw.js`)

> The service worker scope is `/neon-gym/` (`sw.js` is registered from `src/app.html`). Add a monochrome 96×96 PNG
> (white on transparent) for `badge:`; Android masks it to a silhouette [MDN showNotification].

### 1. Permission flow (only from a tap; iOS needs a home-screen install)

```js
const isStandalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
              (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function fastAlertsSupport() {
  if (!('serviceWorker' in navigator) || !('Notification' in window)) return 'none';
  if (isIOS && !isStandalone) return 'needs-install';   // push only for home-screen web apps (16.4+)
  if (!('PushManager' in window)) return 'local-only';
  return 'push';
}

// Call from a button handler ("Remind me when my fast ends")
async function enableFastAlerts() {
  const s = fastAlertsSupport();
  if (s === 'needs-install') { showSheet('Add Neon Gym to your Home Screen (Share → Add to Home Screen) to get fast reminders, or use "Add to calendar".'); return null; }
  if (s === 'none') return null;
  const perm = await Notification.requestPermission();   // must be inside the tap handler on iOS
  if (perm !== 'granted') return null;
  const reg = await navigator.serviceWorker.ready;
  if (s !== 'push') return { reg };
  const sub = (await reg.pushManager.getSubscription()) ||
              await reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: urlB64ToUint8(VAPID_PUBLIC) });
  return { reg, sub: sub.toJSON() };   // save to Firestore users/{uid}/gym/... and send to the Worker
}
function urlB64ToUint8(b64) {
  const p = '='.repeat((4 - b64.length % 4) % 4), s = atob((b64 + p).replace(/-/g, '+').replace(/_/g, '/'));
  return Uint8Array.from(s, c => c.charCodeAt(0));
}
```

### 2. Start-of-fast notification (page side) + silent refresh on Android

```js
const hhmm = t => new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const left = ms => { const m = Math.max(0, Math.round(ms / 60000)); return `${Math.floor(m / 60)} h ${m % 60} m to go`; };

async function showFastCard(fast, { first = false } = {}) {
  if (Notification.permission !== 'granted') return;
  const reg = await navigator.serviceWorker.ready;
  const opts = {
    body: `Started ${hhmm(fast.startAt)} · ends ${hhmm(fast.endAt)} · ${left(fast.endAt - Date.now())}`,
    icon: 'icon-192.png',
    badge: 'badge-96.png',
    data: { kind: 'fast', id: fast.id, endAt: fast.endAt },
  };
  if (!isIOS) Object.assign(opts, {
    tag: 'fast',                 // same tag = replace in place (Android/Chrome)
    renotify: false,             // silent replace
    silent: true,                // no sound or vibration for the status card
    timestamp: fast.endAt,       // Android header should show "in 3h" and tick by itself (verify)
    actions: [{ action: 'end', title: 'End fast' }, { action: 'open', title: 'Open' }],
  });
  if (isIOS && !first) return;   // iOS ignores tag; don't stack duplicates
  await reg.showNotification(`Fasting · ${fast.goalH}:${24 - fast.goalH}`, opts);
  if ('setAppBadge' in navigator) navigator.setAppBadge(1).catch(() => {});
}

// While the app is open (Android only): refresh the body text every 10 min
setInterval(() => { if (S.fast && !isIOS && document.visibilityState === 'visible') showFastCard(S.fast); }, 10 * 60 * 1000);

async function clearFastCard() {
  const reg = await navigator.serviceWorker.ready;
  (await reg.getNotifications({ tag: 'fast' })).forEach(n => n.close());
  if ('clearAppBadge' in navigator) navigator.clearAppBadge().catch(() => {});
}
```

### 3. Service worker additions (`sw.js`)

```js
self.addEventListener('push', e => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) {}
  // Accept both our own JSON and the declarative shape { web_push: 8030, notification: {...} }
  const n = d.notification || d;
  e.waitUntil((async () => {
    // Close the "fasting" status card, then show the end alert (must always show something on iOS)
    (await self.registration.getNotifications({ tag: 'fast' })).forEach(x => x.close());
    await self.registration.showNotification(n.title || 'Fast complete', {
      body: n.body || 'Nice work. Your eating window is open.',
      icon: 'icon-192.png', badge: 'badge-96.png',
      tag: 'fast-done', data: { kind: 'fast-done', url: n.navigate || './#fast' },
    });
    if (self.navigator.clearAppBadge) self.navigator.clearAppBadge().catch(() => {});
  })());
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './#fast', self.registration.scope).href;
  const msg = e.action === 'end' ? { type: 'fast-end' } : { type: 'fast-open' };
  e.waitUntil((async () => {
    const wins = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    const w = wins.find(c => c.url.startsWith(self.registration.scope));
    if (w) { w.postMessage(msg); return w.focus(); }
    return clients.openWindow(url + (e.action === 'end' ? '&end=1' : ''));
  })());
});
```
(Remember to bump `CACHE` in `sw.js` when changing it.)

### 4. Scheduler: Cloudflare Worker + Durable Object alarm (free plan)

`wrangler.toml` (abridged):
```toml
name = "neon-fast-push"
main = "src/index.js"
compatibility_date = "2026-10-01"
[[durable_objects.bindings]]
name = "FAST"
class_name = "FastTimer"
[[migrations]]
tag = "v1"
new_sqlite_classes = ["FastTimer"]     # SQLite-backed DOs are on the Free plan
# secrets: VAPID_PRIVATE_JWK (from `npx @pushforge/builder vapid`), FIREBASE_PROJECT_ID
```

`src/index.js`:
```js
import { buildPushHTTPRequest } from '@pushforge/builder';
import { createRemoteJWKSet, jwtVerify } from 'jose';
const JWKS = createRemoteJWKSet(new URL('https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com'));
const CORS = { 'Access-Control-Allow-Origin': 'https://neoninc.github.io', 'Access-Control-Allow-Headers': 'authorization,content-type', 'Access-Control-Allow-Methods': 'POST,OPTIONS' };

export default {
  async fetch(req, env) {
    if (req.method === 'OPTIONS') return new Response(null, { headers: CORS });
    const url = new URL(req.url);
    if (url.pathname === '/ics') return ics(url);                 // see sketch 5
    const tok = (req.headers.get('authorization') || '').replace('Bearer ', '');
    let uid;
    try {
      ({ payload: { sub: uid } } = await jwtVerify(tok, JWKS, {
        issuer: `https://securetoken.google.com/${env.FIREBASE_PROJECT_ID}`, audience: env.FIREBASE_PROJECT_ID }));
    } catch { return new Response('unauthorised', { status: 401, headers: CORS }); }
    const stub = env.FAST.get(env.FAST.idFromName(uid));          // one DO per user
    const res = await stub.fetch(req);
    return new Response(res.body, { status: res.status, headers: CORS });
  },
};

export class FastTimer {
  constructor(ctx, env) { this.ctx = ctx; this.env = env; }
  async fetch(req) {
    const { action, sub, endAt, title, body } = await req.json();
    if (action === 'cancel') { await this.ctx.storage.deleteAlarm(); await this.ctx.storage.delete('job'); return new Response('ok'); }
    if (!sub || !(endAt > Date.now()) || endAt - Date.now() > 3 * 864e5) return new Response('bad', { status: 400 });
    await this.ctx.storage.put('job', { sub, title, body });
    await this.ctx.storage.setAlarm(endAt);                         // 1 row write; the firing = 1 request
    return new Response('scheduled');
  }
  async alarm() {
    const job = await this.ctx.storage.get('job'); if (!job) return;
    const { endpoint, headers, body } = await buildPushHTTPRequest({
      privateJWK: JSON.parse(this.env.VAPID_PRIVATE_JWK),
      subscription: job.sub,
      message: {
        payload: { title: job.title || 'Fast complete', body: job.body || 'Your eating window is open.' },
        adminContact: 'mailto:neoninc.support@gmail.com',
        options: { ttl: 3600, urgency: 'high', topic: 'fast' },
      },
    });
    const r = await fetch(endpoint, { method: 'POST', headers, body });
    // 404/410 = subscription gone: tell the app to resubscribe next time it opens
    await this.ctx.storage.delete('job');
  }
}
```
App side, at fast start: `fetch(WORKER + '/schedule', { method:'POST', headers:{ authorization:'Bearer ' + await user.getIdToken(), 'content-type':'application/json' }, body: JSON.stringify({ action:'schedule', sub, endAt }) })`. On early end, send `{action:'cancel'}`.

### 5. "Add to calendar" fallback (.ics + Google link)

```js
function fastICS({ id, startAt, endAt }) {
  const z = t => new Date(t).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');   // 20261021T180000Z
  return [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Neon Inc//Neon Gym//EN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:fast-${id}@neoninc.github.io`, `DTSTAMP:${z(Date.now())}`,
    `DTSTART:${z(endAt)}`, `DTEND:${z(endAt + 15 * 60000)}`,
    'SUMMARY:Fast complete - eating window opens',
    `DESCRIPTION:Started ${new Date(startAt).toLocaleString()}. Open Neon Gym to log it.`,
    'URL:https://neoninc.github.io/neon-gym/#fast',
    'BEGIN:VALARM', 'ACTION:DISPLAY', 'DESCRIPTION:Fast complete', 'TRIGGER:PT0M', 'END:VALARM',
    'END:VEVENT', 'END:VCALENDAR', ''
  ].join('\r\n');
}

// Option A (simple; works in browser tabs, test in iOS home-screen mode):
function downloadICS(fast) {
  const url = URL.createObjectURL(new Blob([fastICS(fast)], { type: 'text/calendar;charset=utf-8' }));
  Object.assign(document.createElement('a'), { href: url, download: 'neon-gym-fast.ics' }).click();
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}
// Option B (most compatible on iPhone): link to the Worker, which returns the same text with
//   Content-Type: text/calendar; charset=utf-8  and  Content-Disposition: inline; filename="fast.ics"
//   <a href="https://<worker>/ics?id=..&start=..&end=..">Add to calendar</a>

// Google Calendar (Android-friendly; no reminder parameter, the user's default notification applies)
function gcalLink({ startAt, endAt }) {
  const z = t => new Date(t).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const p = new URLSearchParams({ action: 'TEMPLATE', text: 'Fast complete - eating window opens',
    dates: `${z(endAt)}/${z(endAt + 15 * 60000)}`, details: 'From Neon Gym: https://neoninc.github.io/neon-gym/' });
  return 'https://calendar.google.com/calendar/render?' + p.toString();
}
```

### 6. Optional "keep screen on" timer view

```js
let lock = null;
async function keepAwake(on) {
  try { if (on && 'wakeLock' in navigator) lock = await navigator.wakeLock.request('screen'); else { await lock?.release(); lock = null; } } catch (_) {}
}
document.addEventListener('visibilitychange', () => { if (lock && document.visibilityState === 'visible') keepAwake(true); });
```

### Data model suggestion (fits the existing sync)
- `S.fast = { id, startAt, endAt, goalH, protocol }` while a fast is active, and `S.fasts[]` history (`{id,startAt,endedAt,goalH,completed}`).
- Sync under `users/{uid}/gym/...` like the other gym data. Store the push subscription per device (e.g. `users/{uid}/gym/profile.pushSubs[deviceId]`).
- Opt-in flag `S.settings.fasting = { enabled, acceptedSafetyAt, protocol }`. Don't show any fasting UI until it's enabled.
- If a new save key is introduced, `PERSONAL_KEYS` in the hub's `neon-cloud.js` must be updated (hub CLAUDE.md). Keeping fasting inside `menlyn-log-v2` avoids that.

---

## Sources

1. Lowe DA et al. TREAT RCT. *JAMA Intern Med* 2020;180(11):1491–1499. https://pmc.ncbi.nlm.nih.gov/articles/PMC7522780 · https://pubmed.ncbi.nlm.nih.gov/32986097/
2. Liu D et al. Calorie Restriction with or without Time-Restricted Eating in Weight Loss. *NEJM* 2022;386:1495–1504. https://pubmed.ncbi.nlm.nih.gov/35443107/
3. Lin S et al. Time-Restricted Eating Without Calorie Counting for Weight Loss… *Ann Intern Med* 2023;176(7):885–895. Summary: https://immattersacp.org/weekly/archives/2023/06/27/4.htm
4. de Cabo R, Mattson MP. Effects of Intermittent Fasting on Health, Aging, and Disease. *NEJM* 2019;381:2541–2551. https://www.Gwern.net/doc/longevity/2019-decabo.pdf
5. Semnani-Azad Z et al. Intermittent fasting strategies… network meta-analysis. *BMJ* 2025;389:e082007. https://eprints.gla.ac.uk/362817 · press release https://bmjgroup.com/intermittent-fasting-comparable-to-traditional-diets-for-weight-loss/
6. Hajek P et al. A randomised controlled trial of the 5:2 diet. *PLoS ONE* 2021;16(11):e0258853. https://eclass.hmu.gr/modules/document/file.php/NDS252/%CE%86%CF%83%CE%BA%CE%B7%CF%83%CE%B7%202025-2026/%CE%86%CF%83%CE%BA%CE%B7%CF%83%CE%B7%204/A%20randomised%20controlled%20trial%20of%20the%205%202%20diet.pdf
7. Moro T et al. 8 weeks of TRF (16/8) in resistance-trained males. *J Transl Med* 2016;14:290. https://pubmed.ncbi.nlm.nih.gov/27737674/ · https://translational-medicine.biomedcentral.com/articles/10.1186/s12967-016-1044-0
8. Tinsley GM et al. TRF in young men performing resistance training. *Eur J Sport Sci* 2017;17(2):200–207. https://www.Gwern.net/doc/longevity/fasting/2016-tinsley.pdf
9. Tinsley GM et al. TRF plus resistance training in active females. *Am J Clin Nutr* 2019;110(3):628–640. https://pubmed.ncbi.nlm.nih.gov/31268131/
10. Hays HM et al. TRE with exercise on body composition: SR/MA. *Int J Obes* 2025. doi:10.1038/s41366-024-01704-2. Summary: https://www.emjreviews.com/gastroenterology/news/time-restricted-eating-with-exercise-reduces-fat-mass/
11. Alnasser A, Almutairi M. Considering intermittent fasting among Saudis. *BMC Public Health* 2022;22. https://doaj.org/article/111dd83631884413869de39ec78df6ee
12. Johns Hopkins Medicine. Intermittent Fasting: What is it, and how does it work? https://www.hopkinsmedicine.org/health/wellness-and-prevention/intermittent-fasting-what-is-it-and-how-does-it-work
13. Washington University Physicians. A fast guide to intermittent fasting. https://physicians.wustl.edu/a-fast-guide-to-intermittent-fasting/
14. Olansky L. Strategies for management of intermittent fasting in patients with diabetes. *Cleve Clin J Med* 2017;84(5):357–358. https://www.ccjm.org/content/84/5/357
15. Mayo Clinic. Intermittent fasting: what are the benefits? https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303
15b. Harvard Health. Is intermittent fasting safe for older adults? https://www.health.harvard.edu/healthy-aging-and-longevity/is-intermittent-fasting-safe-for-older-adults
16. Ganson KT et al. IF and eating-disorder behaviours (*Eating Behaviors*). Summary: https://psychnews.psychiatryonline.org/doi/10.1176/appi.pn.2023.02.2.3
17. ACP Diabetes Monthly: SGLT2 inhibitors and DKA (commentary). https://diabetes.acponline.org/archives/2020/11/13/6.htm
18. McGill OSS on the AHA 2024 TRE / CV-death poster. https://www.mcgill.ca/oss/node/9883
19. Trepanowski JF et al. Alternate-day fasting… RCT. *JAMA Intern Med* 2017;177(7):930–938. https://Www.Gwern.net/doc/longevity/fasting/2017-trepanowski.pdf
20. Anton SD et al. Flipping the Metabolic Switch. *Obesity* 2018;26(2):254–268. https://www.truenorthhealthfoundation.org/sites/default/files/docs/fasting-database-article/Anton_et_al_2018_Flipping_the_Metabolic_Switch_Understanding.pdf
21. Deru LS et al. Effects of exercise on β-hydroxybutyrate over a 36-h fast. *Med Sci Sports Exerc* 2021;53(9):1987–1998. https://pubmed.ncbi.nlm.nih.gov/33731648/
22. Vendelbo MH et al. Fasting increases human skeletal muscle net phenylalanine release… *PLoS ONE* 2014. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102031
23. Inverse: Stop trying to trigger autophagy (quotes K. Varady). https://www.inverse.com/mind-body/stop-trying-to-trigger-autophagy
24. Singh S et al. High protein does not change autophagy in human PBMCs after 1 hour. *JCI Insight* 2025;10(16). https://insight.jci.org/articles/view/188845
25. IFIC 2020 survey via FoodNavigator. https://www.foodnavigator.com/Article/2020/06/16/IFIC-Intermittent-fasting-replaces-clean-eating-as-most-popular-diet-presents-marketing-challenges/
26. Jäger R et al. ISSN Position Stand: protein and exercise. *J Int Soc Sports Nutr* 2017;14:20. https://pubmed.ncbi.nlm.nih.gov/28642676/
27. Chrome for Developers. Notification Triggers API ("development … has ended"). https://developer.chrome.com/docs/web-platform/notification-triggers
28. MDN. ServiceWorkerRegistration.showNotification(). https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification
29. Chrome for Developers. Web notification improvements in Chrome 50 (timestamp, renotify). https://developer.chrome.com/blog/notifications
30. WebKit. Web Push for Web Apps on iOS and iPadOS (16.4). https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/
31. MDN browser-compat-data (Notification, ServiceWorkerRegistration, Navigator, WakeLock, DocumentPictureInPicture, PeriodicSyncManager, BackgroundFetchManager). https://github.com/mdn/browser-compat-data/tree/main/api
32. Chromium code review 1388483002 (notification timestamp on Android). https://codereview.chromium.org/1388483002
33. Android `DateTimeView.java` (relative past/future time). https://git.aicp-rom.com/frameworks_base.git/plain/core/java/android/widget/DateTimeView.java?h=w16.1
34. Chrome for Developers. Notification actions in Chrome 48. https://developer.chrome.com/blog/notification-actions
35. Notifee docs: Android timestamps and chronometers (native only). https://docs.page/invertase/notifee/react-native/android/timers
36. Sylvetsky AC et al. Hormonal responses to non-nutritive sweeteners in water and diet soda. *Nutr Metab* 2016;13:71. https://hsrc.himmelfarb.gwu.edu/sphhs_exer_facpubs/82
37. Cloudflare Workers limits. https://developers.cloudflare.com/workers/platform/limits
38. Cloudflare Durable Objects pricing (free-plan limits, alarm billing). https://developers.cloudflare.com/durable-objects/platform/pricing
39. Chrome for Developers. Periodic Background Sync. https://developer.chrome.com/docs/capabilities/periodic-background-sync
40. WebKit. Meet Declarative Web Push. https://webkit.org/?p=16535
41. WebKit. Badging for Home Screen Web Apps. https://webkit.org/blog/14112/badging-for-home-screen-web-apps/
42. Chrome for Developers. Customize media notifications (Media Session). https://developer.chrome.com/blog/media-session/
43. Chrome for Developers. Android Intents with Chrome. https://developer.chrome.com/docs/android/intents
44. Android Developers. Common intents (alarm clock). https://developer.android.com/guide/components/intents-common
45. Cloudflare changelog. Durable Objects on Workers Free plan (2025-04-07). https://developers.cloudflare.com/changelog/2025-04-07-durable-objects-free-tier/
46. PushForge (zero-dependency Web Push, Workers-compatible). https://github.com/draphy/pushforge
47. @pushforge/builder README. https://cdn.jsdelivr.net/npm/@pushforge/builder/README.md
48. Cloudflare Cron Triggers. https://developers.cloudflare.com/workers/configuration/cron-triggers/
49. Cloudflare D1 pricing. https://developers.cloudflare.com/d1/platform/pricing/
50. Firebase pricing. https://firebase.google.com/pricing
51. Firebase: Schedule functions (Cloud Scheduler $0.10/job, 3 free). https://firebase.google.com/docs/functions/schedule-functions
52. GitHub Docs: Events that trigger workflows (`schedule`). https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows
53. Jetstream: Google Calendar for Android adds .ics import (v2025.41, Oct 2025; based on code analysis). https://jetstream.blog/en/android-google-calendar-icalendar-import/
54. Add-event-to-calendar docs: Google Calendar URL. https://github.com/InteractionDesignFoundation/add-event-to-calendar-docs/blob/master/services/google.md

### Gaps and caveats
- Not read in full because of captchas: Hays 2025 MA (numbers from the EMJ summary), a 2026 *Nutrition Research* MA on TRE in resistance-trained people (title only: "modest reduction in fat mass"; not cited for numbers), and the StatPearls fasting physiology chapter.
- Needs a real-device test: the Android "in Xh" header rendering for `timestamp` (Samsung One UI may differ), .ics handling in iOS home-screen mode, and the Android alarm intent (expected to fail).
- Cloudflare Free 10 ms CPU per invocation: WebCrypto push encryption should fit, but check the Worker's CPU metrics after launch.
