#!/bin/sh
n=0
for line in `cat test`
do
    if [ $n -eq 10 ]
    then
        echo "$line"
    fi
        echo "$line"
    n=$[$n + 1]
done