#!/usr/bin/env bash

cat test | tr ' ' '\n' | grep -v '^$' | sort | uniq -c | sort -nr | awk '{print $2, $1}'