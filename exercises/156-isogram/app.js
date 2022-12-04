function isIsogram(text) {
  const isogram = new Set(text)
  console.log(isogram)
  return text.length === isogram.size ? true : false 
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false