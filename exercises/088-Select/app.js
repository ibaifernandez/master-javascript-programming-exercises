function select(arr,obj) {
    let result = {};
    
    for (let i = 0; i < arr.length; i++) {
      for (let property in obj) {
        if (arr[i] === property) {
          result[property] = obj[property]
        }
      }    
    }
    return result;
  }