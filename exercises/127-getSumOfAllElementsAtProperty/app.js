let obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    if (typeof obj.key === 'undefined') {
        return 0;
    } else if (!Array.isArray(obj.key)) {
        return 0;
    } else if (obj.key.length === 0) {
        return 0;
    } else {
    return obj.key.reduce((x,y) => x+y);
}
}
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13