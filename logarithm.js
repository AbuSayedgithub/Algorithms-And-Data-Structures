// in this funtion we know how a log funtion work.
// here is two differant way you can look


// 1st one 
function logarithmsN(n){
    while(n > 1){
        console.log(n)
        n /= 2
    }
    console.log("Done")

}

logarithmsN(8)


// another way of calculation. 
// 2nd way
function anotherLogN(n){
    if(n <= 1) {
        console.log("Done")
        return
    }
    console.log(n)
    anotherLogN(n/2)
}

anotherLogN(16)