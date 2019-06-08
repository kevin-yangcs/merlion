// 希尔排序
export function shellSort (arr: number[]): number[] {
  let len: number = arr.length;
  for (let gap: number = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i:number = gap; i < len; i++) {
      let j:number = i;
      let current:number = arr[i];
      while(j - gap >= 0 && current < arr[j - gap]) {
        arr[j]= arr[j - gap];
        j = j - gap;
      }
      arr[j] = current;
    }
  }
  return arr;
}