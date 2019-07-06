#!/bin/sh
#lsof -i:8080

#find ../ -name Thread.js

# parameters from $1, $0 is the file name
echo "$0, $1, $2, finished"

# process id
echo "$$"

# $# the number of the arguements
echo "$#"

# arguements
echo "$*"
echo "$@"
echo "$2"


sed 's/\w/b/g' test.sh

tr A-Z a-z

echo hello123|sed -E 's/([a-z]+)([0-9]{3})/\1   \2/'
echo 123Chello123##|sed -E 's/[^a-zA-Z]+([a-zA-Z]+)([0-9]{3}).*/\1   \2/'
echo 123aaa456bbb | egrep -v 'aaa'
sort
uniq -c
sort -n

if test.sh $# = 1
then
    start=1
    finish=$1
elif test.sh $# = 2
then
    start=$1
    finish=$2
else
    echo "Usage: $0 <start> <finish>" 1>&2


for filename in "$@"
do
    new_filename=`echo "$filename" | tr A-Z a-z`
    test.sh "$filename" = "$new_filename" && continue
    if test.sh -r "$new_filename"
    then
        echo "$0: $new_filename exists" 1>&2
    elif test.sh -e "$filename"
    then
        mv -- "$filename" "$new_filename"
    else
        echo "$0: $filename not found" 1>&2
    fi
done

for file in *
do
    line=`wc -l $file | cut -d' ' -f1`
#    echo $file $line
    if [ $line -lt 10 ]
    then
        small=`echo $small $file`
    elif [ $line -lt 100 ]
    then
        mid=`echo $mid $file`
    else
        large=`echo $large $file`
    fi
done