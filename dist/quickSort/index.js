"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 快速排序
function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
function partition(arr, left, right) {
    let pivot = left, index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}
function quickSort(arr, left, right) {
    let len = arr.length, partitionIndex;
    left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}
exports.quickSort = quickSort;
