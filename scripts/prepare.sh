#!/bin/bash

set -xe

pnpm -r install
pnpm run docs:build
pnpm -r run build
cd dist || exit
mkdir -p presentations/tooling-pkmgr-bundlers
cd ../
cp -r slides/tooling-pkmgr-bundlers/dist/* dist/presentations/tooling-pkmgr-bundlers
