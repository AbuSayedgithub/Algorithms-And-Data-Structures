

function sumOfArray(arr){
    if(arr.length === 0) return 0
    let rest = arr.slice(1)
    
    return arr[0] + sumOfArray(rest) 
}
console.log(sumOfArray([2, 3, 5]))


// Time complexity = big O(n*n) = n^2
// Space complexity = big O(n)