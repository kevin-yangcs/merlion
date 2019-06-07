// 冒泡排序
export function bubbleSort (arr: number[]): number[] {
  let len: number = arr.length;
  for (let i: number = 0; i < len - 1; i++) {
    for (let j: number = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp: number = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}