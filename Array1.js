function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  let arr = [1,2,3,4,5,6]
  console.log(reverseArray(arr));
  
  function reverseArray(arr) {
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  
//   function reverseArrayInPlace(arr) {
//     for (var i = 0; i < Math.floor(arr.length / 2); i++) {
//       var temp = arr[i];
//       arr[i] = arr[arr.length - 1 - i];
//       arr[arr.length - 1 - i] = temp;
//     }
//   }
  

//   var originalArray = [1, 2, 3, 4, 5];
//   var reversed = reverseArray(originalArray);
//   console.log(reversed); 
  
//   var arrayToReverse = [1, 2, 3, 4, 5];
//   reverseArrayInPlace(arrayToReverse);
//   console.log(arrayToReverse);   