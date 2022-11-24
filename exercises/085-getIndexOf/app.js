function getIndexOf (character, str) {
  const strArr = str.split('') 
  for (let i = 0; i < strArr.length; i++) {
    if (strArr.includes(character)) {
      if (strArr[i] === character) {
      return i;
    }
  } else {
    return -1
  }
}
}