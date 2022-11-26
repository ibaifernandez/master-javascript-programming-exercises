let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    if (typeof obj.key === 'undefined') {
        return undefined;
    } else {
        return obj.key[index];
}
}