# uptimerobot SDK Generation Log

## 1. Initialize Project

```bash
C:\Users\voxgig-test> npm create @voxgig/sdkgen@latest -- uptimerobot -d .\openapi.yaml -o .\uptimerobot-sdk

> npx
> create-sdkgen uptimerobot -d .\openapi.yaml -o .\uptimerobot-sdk

[14:59:15.765] INFO: create                 generate-start       standard
[14:59:16.041] INFO: create/jostraca        generate-install     running npm install in .\uptimerobot-sdk\.sdk
Voxgig Create SDK Error: Failed to start npm: spawn npm ENOENT
npm error code 1
npm error path C:\Users\voxgig-test
npm error command failed
npm error command C:\WINDOWS\system32\cmd.exe /d /s /c create-sdkgen uptimerobot -d .\openapi.yaml -o .\uptimerobot-sdk
npm error A complete log of this run can be found in: C:\Users\voxgig-test\AppData\Local\npm-cache\_logs\2026-10-16T13_59_14_132Z-debug-0.log

C:\Users\voxgig-test> cd uptimerobot-sdk\.sdk
C:\Users\voxgig-test\uptimerobot-sdk\.sdk> npx voxgig-sdkgen target add ts py go

npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/voxgig-sdkgen - Not found
npm error 404
npm error 404  The requested resource 'voxgig-sdkgen@*' could not be found or you do not have permission to access it.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
npm error A complete log of this run can be found in: C:\Users\voxgig-test\AppData\Local\npm-cache\_logs\2026-10-16T14_00_39_897Z-debug-0.log

C:\Users\voxgig-test\uptimerobot-sdk\.sdk> npm install

> build-uptimerobot-sdk@0.0.1 postinstall
> node build/docgen.js

added 104 packages, and audited 105 packages in 23s

33 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Users\voxgig-test\uptimerobot-sdk\.sdk> npx voxgig-sdkgen target add ts py go

[15:01:14.909] INFO: sdkgen/jostraca        target-start
[15:01:14.913] INFO: sdkgen/jostraca        target-build         ts
[15:01:14.915] INFO: ts/jostraca            target-name          ts from:node_modules\@voxgig\sdkgen\project\.sdk
[15:01:14.946] INFO: sdkgen/jostraca        target-feature-trim  ts: dropping 20 unselected feature source entries
[15:01:14.952] INFO: sdkgen/jostraca        target-done          ts
[15:01:14.953] INFO: sdkgen/jostraca        target-build         py
[15:01:14.954] INFO: py/jostraca            target-name          py from:node_modules\@voxgig\sdkgen\project\.sdk
[15:01:14.982] INFO: sdkgen/jostraca        target-feature-trim  py: dropping 40 unselected feature source entries
[15:01:14.990] INFO: sdkgen/jostraca        target-done          py
[15:01:14.991] INFO: sdkgen/jostraca        target-build         go
[15:01:14.992] INFO: go/jostraca            target-name          go from:node_modules\@voxgig\sdkgen\project\.sdk
[15:01:15.022] INFO: sdkgen/jostraca        target-feature-trim  go: dropping 40 unselected feature source entries
[15:01:15.031] INFO: sdkgen/jostraca        target-done          go
[15:01:16.175] INFO: sdkgen/jostraca        feature-start
[15:01:16.177] INFO: sdkgen/jostraca        feature-build        test
[15:01:16.208] INFO: sdkgen/jostraca        feature-done         test
[15:01:16.256] INFO: sdkgen/jostraca        feature-end
[15:01:16.257] INFO: sdkgen/jostraca        target-end

C:\Users\voxgig-test\uptimerobot-sdk\.sdk> npx voxgig-sdkgen feature add test

[15:01:27.959] INFO: sdkgen/jostraca        feature-start
[15:01:27.965] INFO: sdkgen/jostraca        feature-build        test
[15:01:27.996] INFO: sdkgen/jostraca        feature-done         test
[15:01:28.049] INFO: sdkgen/jostraca        feature-end

C:\Users\voxgig-test\uptimerobot-sdk\.sdk> npm run generate

> build-uptimerobot-sdk@0.0.1 generate
> node build/docgen.js && tsc --build src && voxgig-model model/sdk.aontu && voxgig-model test/test.aontu

[15:01:37.966] INFO: model                  model-init
[15:01:37.969] INFO: model                  build-start          watch:config last:2026-10-16T14:01:37.969Z
[15:01:37.970] INFO: model                  build-trigger        watch:config trigger:<config>
[15:01:38.015] INFO: model                  write-model          .\model/.model-config/model-config.json
[15:01:38.017] INFO: model                  root-keys            watch:config keys: sys
[15:01:38.018] INFO: model                  build-end            watch:config

[15:01:38.018] INFO: model                  build-start          watch:model last:2026-10-16T14:01:38.018Z
[15:01:38.019] INFO: model                  build-trigger        watch:model trigger:<start>

[15:01:38.077] ERROR: model                  run-build            build
[aontu/multisource_not_found]: source not found: api/api-info.aontu
--> C:\Users\voxgig-test\uptimerobot-sdk\.sdk\model\sdk.aontu:13:1
11 |
12 | # API Information
13 | @"api/api-info.aontu"
    ^ source not found: api/api-info.aontu
14 |
15 |

The source path api/api-info.aontu was not found.

/Users/voxgig-test/uptimerobot-sdk/.sdk/api/api-info.aontu
/Users/voxgig-test/uptimerobot-sdk/.sdk/node_modules/api/api-info.aontu
...
C:\Users\voxgig-test\uptimerobot-sdk\.sdk\node_modules\@voxgig\model\bin\node_modules\api\api-info.aontu
...
C:\api-info.aontu
...
```
