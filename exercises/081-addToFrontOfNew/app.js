function addToFrontOfNew(arr, element) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
    newArr.unshift(element);
    return newArr
  }  
  
  let input = [1, 2];
  let output = addToFrontOfNew(input, 3);
  console.log(output); // --> [3, 1, 2];
  console.log(input); // --> [1, 2]