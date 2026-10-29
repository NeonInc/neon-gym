# neon-gym-push

A tiny Cloudflare Worker (free plan) that sends the "Fast complete" and "Rest over" notifications when the app is closed or in the background.

- `POST /fast {sub, at, title, body}`: schedule one notification for this browser at `at` (ms). A new call replaces the old one.
- `POST /rest {sub, at, title, body}`: same for the rest timer (3 s to 20 min ahead). Fast and rest jobs are kept separately.
- `POST /cancel {sub, kind}`: cancel the "fast" or "rest" job; with no kind, cancel both.
- `GET /vapid`: the public key the app subscribes with. The key pair is created on first use and kept in a Durable Object.

One Durable Object per push subscription holds the pending messages and an alarm at the earliest one. Data is deleted once sent.
Only requests from https://neoninc.github.io are accepted.

Deploy: GitHub → Actions → "Deploy push worker" → Run workflow (needs the CLOUDFLARE_API_TOKEN and
CLOUDFLARE_ACCOUNT_ID secrets). It is also redeployed when files here change.

Local test: `npx wrangler dev --var TEST_ANY_PUSH_HOST:1` lets a fake https://127.0.0.1 push endpoint through.
