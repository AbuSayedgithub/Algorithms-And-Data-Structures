//creating simple sort method ascendig and descendig order in javascript

let arr = [6, 12, 7, 23, -23, 100]
arr.sort((a , b) => a - b) ///here a and b was anonimus function
console.log(`Ascending Order`,arr)
arr.sort((a, b) => b - a)
console.log(`Descending Order`,arr)