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


sed 's/\w/b/g' test

tr A-Z a-z

echo hello123|sed -E 's/([a-z]+)([0-9]{3})/\1   \2/'
echo 123Chello123##|sed -E 's/[^a-zA-Z]+([a-zA-Z]+)([0-9]{3}).*/\1   \2/'
echo 123aaa456bbb | egrep -v 'aaa'
sort
uniq -c
sort -n

if test $# = 1
then
    start=1
    finish=$1
elif test $# = 2
then
    start=$1
    finish=$2
else
    echo "Usage: $0 <start> <finish>" 1>&2