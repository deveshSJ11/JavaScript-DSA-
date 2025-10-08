/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let v=0;

    for(let i=0;i<nums.length;i++){
       if( nums[i]>nums[v]){
         v++;
        nums[v] = nums[i];
       }
       

    }
    return (v+1);
    
};