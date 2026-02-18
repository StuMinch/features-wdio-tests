#!/usr/bin/env bash

DEVICE_IDS=("iPhone_SE_2020_POC132" "iPhone_SE_2020_POC124")
API_URL="https://api.us-west-1.saucelabs.com/v1/rdc/device-management/devices"

echo "Checking availability for devices: ${DEVICE_IDS[*]}"
echo

wait_for_any_device() {
    while true; do
        for DEVICE_ID in "${DEVICE_IDS[@]}"; do
            STATUS=$(curl -s -u "$SAUCE_USERNAME:$SAUCE_ACCESS_KEY" "$API_URL" \
                | jq -r ".[] | select(.id==\"$DEVICE_ID\") | .state")

            echo "[$DEVICE_ID] Status: ${STATUS:-NOT FOUND}"

            if [[ "$STATUS" == "AVAILABLE" ]]; then
                echo "Device $DEVICE_ID is AVAILABLE — proceeding with test run."
                export SELECTED_DEVICE_ID="$DEVICE_ID"
                return
            fi
        done

        echo "Waiting 10 seconds before checking again..."
        sleep 10
    done
}

for i in {1..50}; do
    echo "=============================="
    echo "Run number $i"
    echo "=============================="

    wait_for_any_device

    npx wdio run wdio.conf.js
done
