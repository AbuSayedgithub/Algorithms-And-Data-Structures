//This function shows the maximum number of the input that you give.

function maxLog(n){
    for(let i = 0; i <= Math.min(10, n); i++){////here i set the maximum is 10 by default.
        console.log(i)
    }
}
maxLog(10)

//Big o (1). because it is not depands on N. that you ganna put.
