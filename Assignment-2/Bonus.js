/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let currentNumber = 1;
    let missingNumber = 0;
    let i = 0;
    while (missingNumber < k) {
        if (i < arr.length && arr[i] === currentNumber) {
            i++;
        } else {
            missingNumber++;
            if (missingNumber === k) {
                return currentNumber;
            }
        }
        currentNumber++;
    }         
};