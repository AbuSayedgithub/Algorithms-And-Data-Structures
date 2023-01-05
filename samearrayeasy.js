/// this function check two array. 
// and check 1st arrays double is 2nd array. 

function same(arr1, arr2){//if this two array lengths are same than the function go on.
    if(arr1.length !== arr2.length){
        return false
    }
    let sequenceCounter1 = {}
    let sequenceCounter2 = {}

    for(let val of arr1){  // if 1st arrays double is 2nd array than its work. otherwise it won't work.
        sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1
        }
    for(let val of arr2){
        sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1
        }
    for(let key in sequenceCounter1){
        //console.log(key)
        if(!(key ** 2) in sequenceCounter2){
            return false
        }
        if(sequenceCounter2[key ** 2] !== sequenceCounter1[key]){
            return false
        }
    }  
    return true 
}
//for this function the time complexity is Big O(n)

console.log(same([2, 3, 6], [4, 36, 9]))
//you can try those for more example below
//console.log(same([1, 2, 4], [1, 4, 16]))
//console.log(same([3, 5], [9, 25]))
//console.log(same([1, 2, 3], [1, 4]))
//console.log(same([1, 2, 3], [1, 9]))
