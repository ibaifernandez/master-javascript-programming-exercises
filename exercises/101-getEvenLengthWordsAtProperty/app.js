let obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    const newArr = [];
    if (typeof obj.key === 'undefined') {
      return newArr;
    } else if (obj.key.length === 0) {
      return newArr;
    } else {
      for (let i = 0; i < obj.key.length; i++) {
        if (obj.key[i].length % 2 === 0) {
          newArr.push(obj.key[i])
        }
      }
    }
    return newArr;
  }
  
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']