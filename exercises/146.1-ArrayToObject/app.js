function transformFirstAndLast(array) {
  let newObj = {};
  newObj[array[0]] = [array[array.length-1]].toString();
  return newObj
}

let output = transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'])
console.log(output); // { Queen: "Beyonce" }
