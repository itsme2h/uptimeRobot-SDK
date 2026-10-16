# Voxgig SDK Generator: Developer Experience Report

## 1. Environment

- **OS:** Windows
- **Node:** v24.13.1
- **npm:** v11.8.0

## 2. Preparation (Setup Ready)

- **API Chosen:** UptimeRobot (Not in Voxgig's catalogue).
- **Specification:** Downloaded the official OpenAPI v3 YAML file.
- **Authentication:** Created a free account and generated a v3 API key.
- **Verification:** Tested the API key and endpoints in Postman. The request succeeded perfectly.
- **Status:** API and setup ready.

## 3. SDK Generation & Errors

I followed the official Voxgig documentation to generate the SDK. The process failed on Windows due to the following issues:

**Issue 1: Scaffolder crash (npm ENOENT)**
Running `npm create @voxgig/sdkgen@latest ...` created the folder structure but crashed during the dependency installation:
`Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT`
_Workaround:_ I navigated into the `.sdk` folder and manually ran `npm install`.

**Issue 2: Target & Feature addition**
Initially, `npx voxgig-sdkgen target add ts` failed with a 404 error because the local binary wasn't installed due to Issue 1. After the manual `npm install`, adding the `ts` target and `test` feature worked successfully using the `npm run` scripts.

**Issue 3: Generation blocker (api-info.aontu)**
Running `npm run generate` failed completely with this error:
`[aontu/multisource_not_found]: source not found: api/api-info.aontu`

_Testing a variable:_ I tried the exact same process with a different OpenAPI 3 spec (Dokploy) and got the exact same `api-info.aontu` error, confirming this is an environment/generator issue on Windows, not a problem with the UptimeRobot spec.

## 4. Conclusion

I reached my 30-minute timebox limit. The developer experience on Windows currently contains blocking bugs during the scaffolding phase that prevent SDK generation.

For the full terminal outputs and error stack traces, please check the `/logs` directory.
