# UptimeRobot SDK Generator Reproduction

This repository documents my attempt to generate an SDK for the UptimeRobot API v3 using the Voxgig SDK generator.

**Status: Blocked — no working SDK was generated.** On Windows, `npm run generate` failed because `model/api/api-info.aontu` could not be found. I saw the same failure with a Dokploy OpenAPI 3.x specification.

The UptimeRobot API key worked in Postman. No API key is included here.

## Environment

- OS: Windows
- Node.js: v24.13.1
- npm: 11.8.0

## Contents

- `openapi.yaml` — UptimeRobot specification used
- `REPORT.md` — steps, observations, and errors
- `logs/` — sanitized command output

This is an independent reproduction and is not affiliated with UptimeRobot or Voxgig.

## License

My original materials are licensed under MIT. Third-party files retain their applicable upstream terms.
