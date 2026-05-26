class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = {};

        let hasDup = false;

        for(let i = 0; i< nums.length ; i++) {
            if(seen[nums[i]]) {
                hasDup =  true;
            } else {
                seen[nums[i]] = 1;
            }
        }

        return hasDup;
    }
}
