#!/bin/sh
n=1
while read line
do
    if [[ $n > 1 ]]
    then
        echo "$line"
    fi
    n=$[$n + 1]
done < test