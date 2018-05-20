#!/bin/bash
for number in {1..80000}
do
TEMP=$((RANDOM%10))
((BYTE=TEMP % 2 == 0 ? 0 : 1))
echo $BYTE
done
exit 0
