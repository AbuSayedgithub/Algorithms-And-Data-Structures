// write a function take an array and a value.
// find the value from the array 
// and return the index of where find the value.

function binarySearch(arr, value){
    let start = 0;
    let end = arr.length -1

    let middle = Math.round((start + end) / 2)

    while(start <= end){
        if(arr[middle] === value) return middle

    if(value > arr[middle]){
            start = middle + 1
    }else if(value < arr[middle]){
            end = middle -1
        }
    }
     return -1
    

   
}

console.log(binarySearch([2, 3, 4, 7, 34, 66], 34))