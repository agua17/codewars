function getLargerNumbers(a, b) {
  return  a.map ((num,index) => Math.max(num, b[index]));
}

 
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];

let result = getLargerNumbers(arr1, arr2);
console.log(result);
 
