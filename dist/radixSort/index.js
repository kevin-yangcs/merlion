"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 基数排序
let counter = [];
function radixSort(arr, maxDigit) {
    let mod = 10, dev = 1;
    for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
        for (let j = 0; j < arr.length; j++) {
            let bucket = parseInt(((arr[j] % mod) / dev).toString());
            if (counter[bucket] == null) {
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        let pos = 0;
        for (let j = 0; j < counter.length; j++) {
            let value = null;
            if (counter[j] != null) {
                while ((value = counter[j].shift()) != null) {
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}
exports.radixSort = radixSort;
