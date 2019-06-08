"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 计数排序
function countingSort(arr, maxValue) {
    let bucket = new Array(maxValue + 1), sortedIndex = 0, arrLen = arr.length, bucketLen = maxValue + 1;
    for (let i = 0; i < arrLen; i++) {
        if (!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    for (let j = 0; j < bucketLen; j++) {
        while (bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}
exports.countingSort = countingSort;
