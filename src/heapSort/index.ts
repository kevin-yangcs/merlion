// 堆排序
let len: number;

function swap(arr: number[], i: number, j:number) {
  let temp: number = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function heapify (arr: number[], i:number) {
  let left = 2 * i + 1,
    right = 2 * i + 2,
    largest = i;

  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  } 

  if (largest != i) {
    swap(arr, i, largest);
    heapify(arr, largest);
  }
}

function buildMaxHeap (arr: number[]) {
  len = arr.length;
  for (let i: number = Math.floor(len / 2); i >= 0; i--) {
    heapify(arr, i);
  }
}

export function heapSort (arr: number[]): number[] {
  buildMaxHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i);
    len--;
    heapify(arr, 0);
  }
  return arr;
}