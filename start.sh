#!/bin/bash
#toBinary(){
#    local n bit
#    for (( n=$1 ; n>0 ; n >>= 1 )); do  bit="$(( n&1 ))$bit"; done
#    printf "%s\n" "$bit"
# }
#TEST=[]
#for number in {1..10}
#do
#TEST[$number]=$(($((RANDOM%2+1))-1))
#done
#echo "${TEST[@]}"
#exit 0
for number in {1..80000}
do
TEMP=$((RANDOM%10))
((BYTE=TEMP % 2 == 0 ? 0 : 1))
echo $BYTE
done
exit 0
