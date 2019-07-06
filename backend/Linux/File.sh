#!/bin/sh

# read file by line
#for target in `cat $1`
#do
#    echo ${target}
#done

while read line
do
    echo $line
done < $1