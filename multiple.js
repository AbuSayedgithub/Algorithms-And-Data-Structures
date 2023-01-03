// in this function we can see big o-(n^2)

function multipleArry(n) {
    for(let i = 0; i <=n; i ++){//n
        for(let j = 0; j <=n; j ++){//n
           console.log(i, j)
        }
    }
}

multipleArry(5)

//Big O(n^2)