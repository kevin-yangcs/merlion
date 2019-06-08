// 快速排序
function swap (arr: number[], i: number, j: number): void {
  let tmp: number = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function partition (arr: number[], left: number, right: number): number {
  let pivot = left,
    index = pivot + 1;
  for (let i: number = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index);
      index++;
    }
  }
  swap(arr, pivot, index - 1);
  return index - 1;
}

export function quickSort (arr: number[], left, right): number[] {
  let len: number = arr.length,
    partitionIndex: number;
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
    }
  return arr;
}