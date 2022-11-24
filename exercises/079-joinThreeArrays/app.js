function joinThreeArrays(arr1, arr2, arr3) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i])
  }
  for (let i = 0; i < arr3.length; i++) {
    arr1.push(arr3[i])
  }  
  return arr1
}