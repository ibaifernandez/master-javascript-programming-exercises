function removeStringValuesLongerThan(num, obj) {
  for (let property in obj) {
    if (typeof obj[property] === "string" && obj[property].length > num) {
      delete obj[property];
    }
}
return obj;
}

let obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas',
};