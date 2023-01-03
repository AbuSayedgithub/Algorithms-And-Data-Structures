// in this function we find the big o natation in this function.
// compare time complexity and space complexity in this function.

// let a random funtion as i did.
function uniqueName(arr){
    let uniqueName = []
    for(let i = 0; i < arr.length; i++){//Big O(n^2)
        let ele = arr[i]
        if(!uniqueName.includes(ele)){
            uniqueName.push(ele)
        }
    }

    return uniqueName//Big O(n)
}
//time complexity == n^2
//space complexity == n 

let nameArry = ["sakib", "hridoy", "tansin", "mehedi","hridoy","mehedi"]

console.log(uniqueName(nameArry))

//insertion = depands
//Removal = depands
//Searching = Big O(n)
//Access = Big O(1)