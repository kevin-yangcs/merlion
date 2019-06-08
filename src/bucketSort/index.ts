// 桶排序
import { insertionSort } from '../insertionSort';

export function bucketSort (arr: number[], bucketSize: number = 5): number[] {
  if (arr.length === 0) {
    return arr;
  }

  let len: number = arr.length,
    minValue: number = arr[0],
    maxValue: number = arr[0];

  for (let i: number = 1; i < len; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  let bucketCount: number = Math.floor((maxValue - minValue) / bucketSize) + 1,
    buckets = new Array(bucketCount);
  for (let i: number = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (let i: number = 0; i < len; i++) {
    buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
  }

  arr.length = 0;
  for (let i: number = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    for (let j: number = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
  }
  
  return arr;
}