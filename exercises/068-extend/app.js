let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (let property in obj2) {
      if (obj2.hasOwnProperty(property) && !obj1.hasOwnProperty(property)) {
        obj1[property] = obj2[property];
      }   
    }
    return obj1;
  }
  
