/// this function check two array. 
// and check 1st arrays double is 2nd array. 


function same(arr1, arr2){//if this two array lengths are same than the function go on.
    if(arr1.length !== arr2.length){
        return false
    }

    for(let i = 0; i < arr1.length; i++){// if 1st arrays double is 2nd array than its work. otherwise it won't work.
        let currentIndex = arr2.indexOf(arr1[i] ** 2)
        if(currentIndex === -1){
            return false
        }

        arr2.splice(currentIndex, 1)
    }
    return true
}

console.log(same([2, 3, 6], [4, 36, 9]))
//console.log(same([1, 2, 4], [1, 4, 16]))
//console.log(same([3, 5], [9, 25]))
//console.log(same([1, 2, 3], [1, 4]))
//console.log(same([1, 2, 3], [1, 9]))