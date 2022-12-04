function isRotated(str1, str2) {
    let repeated1stStr = str1 + str1;
    return repeated1stStr.includes(str2) ? true : false
}


let output = isRotated("Learning is fun", "Lr aen ngiiufs")
console.log(output) // true
