function transformEmployeeData(array) {
  let finalArr = [];
  let newObj = {};
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        newObj[array[i][j][0]] = array[i][j][1]
      }
      finalArr.push(newObj);
      newObj = {};
    }
  return finalArr
}
  
let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],[['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // [{firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'}, {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}]