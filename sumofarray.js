//this function is calculate the sum of the given number in array set.


function sum(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
    total += arr[i]
    }
    return total  //here it return off sum of array
}

console.log(sum([23, 4, 6]))
//Big o(1) because it comes with single one with basis of output

