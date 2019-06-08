"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 归并排序
function merge(left, right) {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length) {
        result.push(left.shift());
    }
    while (right.length) {
        result.push(right.shift());
    }
    return result;
}
function mergeSort(arr) {
    let len = arr.length;
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
