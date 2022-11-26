function getElementsGreaterThan10AtProperty(obj, key) {
    const newArr = [];
    if (typeof obj.key === 'undefined') {
      return newArr;
    } else {
      for (let i = 0; i < obj.key.length; i++) {
        if (obj.key[i] > 10) {
          newArr.push(obj.key[i]);
        }
      }
    }
      return newArr;
  }
  
  let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]