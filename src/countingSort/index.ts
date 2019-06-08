// 计数排序
export function countingSort (arr: number[], maxValue: number): number[] {
  let bucket: number[] = new Array(maxValue + 1),
    sortedIndex: number = 0,
    arrLen: number = arr.length,
    bucketLen: number = maxValue + 1;

  for (let i: number = 0; i < arrLen; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (let j: number = 0; j < bucketLen; j++) {
    while(bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }
  return arr;
}