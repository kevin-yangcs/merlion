// 归并排序
function merge (left: number[], right: number[]): number[] {
  let result: number[] = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
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

export function mergeSort (arr: number[]): number[] {
  let len: number = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle: number = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}