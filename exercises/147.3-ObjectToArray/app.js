function convertObjectToList(obj) {
  let finalArr = [];
  let smallArr = [];

  for (let property in obj) {
    smallArr.push(property)
    smallArr.push(obj[property])
    finalArr.push(smallArr);
    smallArr = [];
  }
  return finalArr;

}

let output = convertObjectToList({name: "Holly", age: 35, role: "producer"});
console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]