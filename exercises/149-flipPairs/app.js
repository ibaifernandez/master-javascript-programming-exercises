function flipPairs(input){
        const arr = input.split('')
        const oddArr = [];
        const evenArr = [];
        const finalArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i === 0) {
                evenArr.push(arr[i]);
            } else if (i % 2 === 0) {
                evenArr.push(arr[i])
            } else {
                oddArr.push(arr[i])
            }
        }
      for (let i = 0; i <= oddArr.length; i++) {
        finalArr.push(oddArr[i])
        finalArr.push(evenArr[i])
      } 
      return finalArr.join('');
    }  
      
let input = 'check out how interesting this problem is, it\'s insanely interesting!';
let output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
