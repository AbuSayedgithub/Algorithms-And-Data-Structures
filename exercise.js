// create programming that can calculate the highest 
// and lowest number from an array. 
// minimum of the two number
// how to avoid the string from the array

let temperature = [-19, -5, -15, -9, -3, 0, "error", 1, 5, 10, 15, 20, 30]


function getHigherAndLower(arr){
         
    //create a higher variable
    let higher = arr[0]
    //create a higher variable
    let lower = arr[0]

    //iterate the whole array
    for(let i = 0; i < arr.length; i++){
         
		 
		 //let's check there has any error

         if(typeof arr[i] !== "number") continue

           console.log(typeof arr[i])

     //if the higher variable has smaller number than our current number then value will be our current element.
       if (higher < arr[i]) {
           higher = arr[i]
       }
       
     //if the lower variable has bigger number than our current number than value will be our current element.
     if (lower > arr[i]){
        lower = arr[i]
     }
    
    }

    
    //return our higher variable and lower variable
	//it return subtraction between higher and lower
         return   higher - lower 
}

console.log(getHigherAndLower(temperature))