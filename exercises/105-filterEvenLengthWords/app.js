function filterEvenLengthWords(words) {
    return words.filter(x => x.length % 2 === 0);
}

let output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']