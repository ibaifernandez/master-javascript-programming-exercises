// function countAllCharacters(string) {
//     let newObj = {};
//     const strArr = string.split('');
//     strArr.forEach(x => { 
//         console.log(newObj[x])
//         newObj[x] = (newObj[x] || 0) + 1;
//     });
//     return newObj;
// }

// console.log(countAllCharacters("banana"));


function countAllCharacters(string) {
    let newObj = {};
    const strArr = string.split('');
    for (let i = 0; i < strArr.length; i++) {
        newObj[strArr[i]] = (newObj[strArr[i]] || 0) + 1;
    }
    return newObj;
}

console.log(countAllCharacters("banana"));


