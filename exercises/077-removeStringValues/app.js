let obj = {
    name: 'Sam',
    age: 20
}

function removeStringValues(obj) {
    for (let property in obj) {
        if (typeof obj[property] === "string") {
          delete obj[property];
        }
    }
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }
