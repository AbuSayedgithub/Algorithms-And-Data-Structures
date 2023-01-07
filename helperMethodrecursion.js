//creating helper method recursion way.
// and with helper method find odd and even number.

//Odd number Function
function findOddnumber(arr){
    let result = []
    function helper(input){
        if(input.length === 0) return
        
        if(input[0] % 2 !== 0){
            result.push(input[0])
        }

        helper(input.slice(1))

    }
    helper(arr)
    
    return result
}


//even number Function
function findEvennumber(arr){
    let result = []
    function helper(input){
        if(input.length === 0) return
        
        if(input[0] % 2 == 0){
            result.push(input[0])
        }

        helper(input.slice(1))

    }
    helper(arr)
    
    return result
}
console.log(`Odd Number`,findOddnumber([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 32, 45, 50, 55, 75]))
console.log(`Even Number`,findEvennumber([1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 32, 45, 50, 55, 75]))