function getElementsLessThan100AtProperty(obj, key) {
    const newArr = [];
    if (typeof obj.key === 'undefined') {
      return newArr;
    } else {
      for (let i = 0; i < obj.key.length; i++) {
        if (obj.key[i] < 100) {
          newArr.push(parseInt(obj.key[i]));
        }
      }
    }
      return newArr;
  }

  let obj = {
    key: [1000, 20, 50, 500]
  };

  let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]