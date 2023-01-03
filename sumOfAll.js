function sumOfAll(n){
    let total= 0;
    for (let i = 0; i<=n; i++){
       total += i 
   }
   return total

}

console.log(sumOfAll(11))
//Big O(n)


//another way to do this function

function sumOfAll(n){
    return n * (n +1) / 2

}

console.log(sumOfAll(10))
//Big O(1)