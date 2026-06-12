class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const first = strs[0];

        for (let i = 0; i < first.length; i++) {
            if(!strs.every(str => str[i] === first[i])) {
                return first.slice(0,i);
            }
        }

        return first;
    }
}
