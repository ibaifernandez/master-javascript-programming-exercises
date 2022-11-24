
function getAverageOfElementsAtProperty(obj, property) {
    for (let property in obj) {
        if (obj[property].length !== 0 && Array.isArray(obj[property])) {
          return (obj[property].reduce((x, y) => x + y))/obj[property].length;
        } else {
          return 0;
        }
    }
}