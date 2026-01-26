#!/bin/bash

for i in {1..10000}
do
    echo "Run #$i"
    npx wdio run web.conf.js
done
