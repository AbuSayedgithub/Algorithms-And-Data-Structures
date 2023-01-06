//in this program you see how recursion works

// for start you need a function

function countDown(n){
    // for(let i = n; i > 0; i--)
    // console.log(i) //- this normal way
    //now it time recursion way
    console.log(n)
    n--
    if(n>0){
        countDown(n)
    }
}


countDown(10)