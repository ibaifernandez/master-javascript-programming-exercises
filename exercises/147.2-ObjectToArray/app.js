function listAllValues(obj) {
  let newArr = [];
  for (let property in obj) {
    newArr.push(obj[property])
  }
  return newArr;
}

let output = listAllValues({name: "Krysten", age: 33, hasPets: false});
console.log(output); // ['Krysten', 33, false]