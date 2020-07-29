#!/bin/bash
#
# Run WebdriveIO test runner.
#
# Usage:
# run-tests.sh runner/wdio.conf.local.js - Run all browser tests locally
# run-tests.sh runner/wdio.conf.local.js LoginPageTest - Run "LoginPageTest" test locally

set -o errexit
set -o pipefail

echo 'Fetching secrets and setting environment variables...'
export WEBUI_USERNAME="trangxuanho@gmail.com"
export WEBUI_PASSWORD="bitchitlin"
export WEBUI_FIRSTNAME="Trang"

echo 'Calling WebdriverIO test runner...'

CONFIG=$1
TEST_FILE_NAME=$2

if [[ -n $TEST_FILE_NAME ]]; then
    SPEC_FLAG=--spec
    SPEC_PATH=test/**/$TEST_FILE_NAME.js
fi

wdio $CONFIG $SPEC_FLAG $SPEC_PATH