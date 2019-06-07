// 选择排序
export function selectionSort (arr: Array<number>): Array<number> {
  let len: number = arr.length;
  let minIndex: number, tmp: number;
  for (let i:number = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j: number = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    tmp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tmp;
  }
  return arr;
}