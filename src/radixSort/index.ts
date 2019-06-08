// 基数排序
let counter = [];

export function radixSort (arr: number[], maxDigit: number): number[] {
  let mod = 10,
    dev = 1;
  
  for (let i: number = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for (let j:number = 0; j < arr.length; j++) {
      let bucket = parseInt(((arr[j] % mod) / dev).toString());
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    let pos: number = 0;
    for(let j: number = 0; j < counter.length; j++) {
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