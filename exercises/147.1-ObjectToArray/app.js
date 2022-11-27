function getAllKeys(obj) {
  let newArr = [];
  for (let property in obj) {
    newArr.push(property)
  }
  return newArr;
}

let output = getAllKeys({name: "Sam", age: 25, hasPets: true});
console.log(output); // ['name', 'age', 'hasPets']