function findShortestOfThreeWords(word1, word2, word3) {
    let result = word1
    if (word2.length < word1.length) {
        result = word2;
        if (word2.length < word3.length) {
            result = word3;
        }
    }
    return result;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'