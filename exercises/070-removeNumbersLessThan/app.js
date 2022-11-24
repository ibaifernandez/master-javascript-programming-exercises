let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
  for (let property in obj) {
      console.log(obj[property]);
      if (obj[property] < num) {
        delete obj[property];
      }
 }
 return obj;
}
