# js算法集合
此库用于个人使用typescript学习算法（大自然的搬运工）
### 使用:
```
// 下载依赖
npm install -D merlion

// 引入依赖
let fnc = require('merlion');

// 执行方法
fnc.bubbleSort([4, 2, 1, 0.5, -3, 13]);
```

### 现支持算法：
|-- [排序](./doc/sort/sort.md)<br>
|---- [冒泡排序](./doc/sort/bubbleSort.md)（bubbleSort）<br>
|---- [选择排序](./doc/sort/selectionSort.md)（selectionSort）<br>
|---- [插入排序](./doc/sort/insertionSort.md)（insertionSort）<br>
|---- [希尔排序](./doc/sort/shellSort.md)（shellSort）<br>
|---- [归并排序](./doc/sort/mergeSort.md)（mergeSort）<br>
|---- [快速排序](./doc/sort/quickSort.md)（quickSort）<br>
|---- [堆排序](./doc/sort/heapSort.md)（heapSort）<br>
|---- [计数排序](./doc/sort/countingSort.md)（countingSort）<br>
|---- [桶排序](./doc/sort/bucketSort.md)（bucketSort）<br>
|---- [基数排序](./doc/sort/radixSort.md)（radixSort）<br>
|-- 加解密<br>
|---- base64加密（base64.encode）<br>
|---- base64解密（base64.decode）<br>