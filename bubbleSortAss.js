/* Bubble sort implementation. 
  if the array is ascending order than it will stop after one swipe */
/* and we find the BigO natation for this bubblesort funtion */

  

function bubblesort(arr) {
    
    let isSwap

    for(let i = 0; i < arr.length; i++){//n
        isSwap = false
       for(let j = 0; j < arr.length -i -1; j++){//n
           console.log("to see", arr, arr[j], arr[j+1])
           if(arr[j] > arr[j+1]){
               let temp = arr[j]
               arr[j] = arr[j+1]
               arr[j+ 1] = temp
               isSwap = true
           } 

       }
       if (!isSwap) break 
       
    }
   return arr
}

//time comlexity Big O(n^2)

console.log(bubblesort([8, 1, 2, 3, 4, 5, 6, 7]))