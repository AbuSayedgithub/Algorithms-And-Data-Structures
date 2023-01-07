function sumOfArraySlow(arr){
    if(arr.length === 0) return 0
    let rest = arr.slice(1)
    
    return arr[0] + sumOfArraySlow(rest) 
}

//Time = big O(n^2)
//Space = big O(n)


function sumOfArrayFast(arr){
    return helperSum(arr, 0)
}

function helperSum(arr, index){
    if(arr.length === index) return 0
    
    return arr[index] + helperSum(arr, index +1)
}

//Time = big O(n)
//Space = big O(n)



//now lets calculate the time complexity  for those two function Fastfunction And for SlowFunction
//for calculate time complexity we need huge number to find comlexity
let input = new Array(8000).fill(1)

//for slowfunction
let now = Date.now()
console.log(sumOfArraySlow(input))
let finish = Date.now()
console.log(`time elapsed for slowFunction ${finish - now} miliseconds`)

//for fastfunction
let start = Date.now()
console.log(sumOfArrayFast(input))
let end = Date.now()
console.log(`time elapsed for FastFunction ${end - start} miliseconds`)

