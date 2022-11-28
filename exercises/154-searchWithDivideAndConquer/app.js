// function search(array, value) {
//     if (array.includes(value)) {
//       return array.indexOf(value)
//     } else {
//       return null
//     }
//   }

function search(array, value) {
  if (array.includes(value))   
  let midPoint = Math.floor((array.length)/2);
  if (array[midPoint] === value) return true;
  if(array[midPoint] > x)
         return search(array, x, start, mid-1);
     else
  
         // If element at mid is smaller than x,
         // search in the right half of mid
         return recursiveFunction(arr, x, mid+1, end);
 }
  }
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 22)); // => 4