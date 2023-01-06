/// create another array recursion that has less Complexity regarding that function we create arrayrecursion.js

function sumOfArray(arr){
    return helperSum(arr, 0)
}

function helperSum(arr, index){
    if(arr.length === index) return 0
    
    return arr[index] + helperSum(arr, index +1)
}

//Time = big O(n)
//Space = big O(n)

console.log(sumOfArray([2, 3, 5, 10, 10]))