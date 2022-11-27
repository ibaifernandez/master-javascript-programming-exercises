function flipEveryNChars(input, n) {
  const arr = input.split('')
  let smallArr = [];
  const finalArr = [];

  console.log(arr);

for (let i = 0; i < arr.length; i += n) {
      const chunk = arr.slice(i, i + n);
      smallArr.push(chunk.reverse());
}

  for (let j = 0; j < smallArr.length; j++) {
    finalArr.push(smallArr[j].join(''));
  }
  return finalArr.join('');
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma
  
let output2 = flipEveryNChars('watch my backflip', 3);
console.log(output2); // --> taw hc ymcablfkpi
  