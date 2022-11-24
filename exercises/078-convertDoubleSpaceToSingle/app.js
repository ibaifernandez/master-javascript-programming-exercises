function convertDoubleSpaceToSingle(str) {
    let resultString = "";
    const newArr = str.split(' ')
    const resultado = newArr.filter(elemento => elemento % 2 !== 0);
    return resultado.join(' ');
  }
  
let output = convertDoubleSpaceToSingle("string  with  double  spaces");

console.log(output); // --> "string with double spaces"