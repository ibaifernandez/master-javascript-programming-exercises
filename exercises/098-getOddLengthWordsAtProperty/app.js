function getOddLengthWordsAtProperty(obj, key) {
    const newArr = [];
    if (typeof obj.key === 'undefined') {
      return newArr;
    } else {
    for (let i = 0; i < obj.key.length; i++) {
        if (obj.key[i].length % 2 !== 0) {
            newArr.push(obj.key[i]);
        }
    }
}
    return newArr;
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']