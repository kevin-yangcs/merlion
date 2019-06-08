"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 桶排序
const insertionSort_1 = require("../insertionSort");
function bucketSort(arr, bucketSize = 5) {
    if (arr.length === 0) {
        return arr;
    }
    let len = arr.length, minValue = arr[0], maxValue = arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
        else if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1, buckets = new Array(bucketCount);
    for (let i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    for (let i = 0; i < len; i++) {
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (let i = 0; i < buckets.length; i++) {
        insertionSort_1.insertionSort(buckets[i]);
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    return arr;
}
exports.bucketSort = bucketSort;
