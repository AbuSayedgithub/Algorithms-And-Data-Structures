// leetcode problem- container-with-most-water

var MaxArea = function(heights){
    let totalWater = 0;

for(let i = 0; i < heights.length; i++){

    for(let j = i+1; j < heights.length; j++){

        let height = Math.min(heights[i], heights[j]);
        
        let width = j - i
       
        let currentWater = height * width ;
      
        totalWater = Math.max(currentWater, totalWater)

    }
}
return totalWater
}

console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))