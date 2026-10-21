# neon-gym-push

A tiny Cloudflare Worker (free plan) that sends the "Fast complete" notification when the app is closed.

- `POST /fast {sub, at, title, body}`: schedule one notification for this browser at `at` (ms). A new call replaces the old one.
- `POST /cancel {sub}`: cancel it (fast ended early or reminders turned off).
- `GET /vapid`: the public key the app subscribes with. The key pair is created on first use and kept in a Durable Object.

One Durable Object per push subscription holds the pending message and an alarm. Data is deleted once sent.
Only requests from https://neoninc.github.io are accepted.

Deploy: GitHub → Actions → "Deploy push worker" → Run workflow (needs the CLOUDFLARE_API_TOKEN and
CLOUDFLARE_ACCOUNT_ID secrets). It is also redeployed when files here change.

Local test: `npx wrangler dev --var TEST_ANY_PUSH_HOST:1` lets a fake https://127.0.0.1 push endpoint through.
