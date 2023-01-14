// leetcode problem- container-with-most-water

var MaxArea = function(heights){
    let totalWater = 0;

    let firstPointer = 0;
    let lastPointer = heights.length -1;

    while(firstPointer < lastPointer){
        let height = Math.min(heights[firstPointer], heights[lastPointer]);
        let width = lastPointer - firstPointer;

        let currentWater = height * width;
        totalWater = Math.max(totalWater, currentWater);
        if(heights[firstPointer] <= heights[lastPointer]){
            firstPointer++;
        }else{
            lastPointer--;
        }
    }

return totalWater
}

//Time complexity BigO(n) 
//Space complexity BigO(1)


console.log(MaxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))