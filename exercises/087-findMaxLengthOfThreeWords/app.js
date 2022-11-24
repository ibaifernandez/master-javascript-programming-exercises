function findMaxLengthOfThreeWords(w1, w2, w3) {
    const arr = [];
    arr.push(w1,w2,w3);
    let result = arr[0].length;
    
    for (let i = 1; i < arr.length; i++) {
      if (result < arr[i].length) {
        result = arr[i].length;
      }
    }
    return result
  }