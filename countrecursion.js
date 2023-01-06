//in this program you see number goes recursive wayand sum the number 

// for start you need a function

function sumOfNumber(n){
    //1st part
    // let sum = 0
    // for(let i = n; i > 0; i--){
    //     sum += i
    // }
    // return sum
    // this normal wy of recursion

    //2nd part
    if (n < 0) return 0
    return n + sumOfNumber(n-1)
    //this is recursion way

    //comment out them to see them woek differently


         
}

console.log(sumOfNumber(10))