---
description: Autonomous Deployment Sequence
auto_mode: true
---

## Build Application
// turbo
Execute build process with production flag.
Run type checks and unit tests.

## Deploy to Cloudflare
// turbo
Upload assets to R2 bucket.
Deploy DB migrations to D1.
Publish Worker script.

## Verify Deployment
Run smoke tests against production URL.
Check circuit breaker status.
Notify user on Slack/Discord.
