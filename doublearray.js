// this fountion will double the number from the array list

function double(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i]*2)
    }
    return newArr   // it return the double number
}

console.log(double([3, 4, 5]))  //you can give as much as you can

// Big o(n) because it cames with the basis of  n