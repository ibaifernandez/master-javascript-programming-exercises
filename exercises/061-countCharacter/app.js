function countCharacter(str, char) {
    let counter = 0;
    const newArr = str.split('');
    
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === char) {
            counter++;
        }
    }
    return counter;
}