function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result=""
    result+="the "+myAdjective +myNoun+ myVerb+myAdverb+" to the store"
    return result;
}

console.log(wordBlanks("dog","big","ran","quickly"));
