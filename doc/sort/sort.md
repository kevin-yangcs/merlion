### 排序
&emsp;&emsp;所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。

&emsp;&emsp;排序算法，就是如何使得记录按照要求排列的方法。排序算法在很多领域得到相当地重视，尤其是在大量数据的处理方面。一个优秀的算法可以节省大量的资源。在各个领域中考虑到数据的各种限制和规范，要得到一个符合实际的优秀算法，得经过大量的推理和分析。

#### 1、算法列表
1）稳定的
* [冒泡排序](./bubbleSort.md)（bubble sort） — O(n^2）
* 鸡尾酒排序(Cocktail sort，双向的冒泡排序) — O(n^2）
* [插入排序](./insertionSort.md)（insertion sort）— O(n^2)
* [桶排序](./bucketSort.md)（bucket sort）— O(n); 需要 O(c) 额外空间
* [计数排序](./countingSort.md)(counting sort) — O(n+k); 需要 O(n+k) 额外空间
* [归并排序](./mergeSort.md)（merge sort）— O(nlogn); 需要 O(n) 额外空间
* 原地合并排序— O(n^2)
* 二叉排序树排序 （Binary tree sort） — O(nlogn)期望时间； O(n^2)最坏时间； 需要 O(n) 额外空间
* 鸽巢排序(Pigeonhole sort) — O(n+k); 需要 O(k) 额外空间
* [基数排序](./radixSort.md)（radix sort）— O(n·k); 需要 O(n) 额外空间
* Gnome 排序— O(n^2)
* 图书馆排序— O(nlog n) with high probability，需要 （1+ε)n额外空间

2）不稳定的
* [选择排序](./selectionSort.md)（selection sort）— O(n^2)
* [希尔排序](./shellSort.md)（shell sort）— O(nlogn) 如果使用最佳的现在版本
* 组合排序— O(nlogn)
* [堆排序](./heapSort.md)（heapsort）— O(nlogn)
* 平滑排序— O(nlog n)
* [快速排序](./quickSort.md)（quicksort）— O(nlogn) 期望时间，O(n^2) 最坏情况； 对于大的、乱数列表一般相信是最快的已知排序
Introsort— O(nlogn)
* 耐心排序— O(nlog n + k) 最坏情况时间，需要 额外的 O(n + k) 空间，也需要找到最长的递增子串行（longest increasing subsequence）

3）不实用的
* Bogo排序— O(n× n!) 期望时间，无穷的最坏情况。
* Stupid sort— O(n^3); 递归版本需要 O(n^2) 额外存储器
* 珠排序（Bead sort） — O(n) or O（√n)，但需要特别的硬件
* Pancake sorting— O(n)，但需要特别的硬件
* stooge sort——O（n^2.7）很漂亮但是很耗时