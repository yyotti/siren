#!/bin/sh
set -eu

if [ ! -d '/app/node_modules' ]; then
  yarn install
fi

yarn start
