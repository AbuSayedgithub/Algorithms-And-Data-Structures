/* Selection sort implementation */


function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let lowest = i
        for(let j = i + 1; j < arr.length; j++){
            if(arr[lowest] > arr[j]){
                lowest = j 
            }
            
        }
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
    }
    return arr
}

console.log(selectionSort([23, 45, 55, 35, -12, -5, -3, 1, 5, 9, 11]))