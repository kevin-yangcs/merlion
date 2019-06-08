### 冒泡排序
&emsp;&emsp;冒泡排序（Bubble Sort），是一种计算机科学领域的较简单的排序算法。

&emsp;&emsp;它重复地走访过要排序的元素列，依次比较两个相邻的元素，如果他们的顺序（如从大到小、首字母从A到Z）错误就把他们交换过来。走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。

&emsp;&emsp;这个算法的名字由来是因为越大的元素会经由交换慢慢“浮”到数列的顶端（升序或降序排列），就如同碳酸饮料中二氧化碳的气泡最终会上浮到顶端一样，故名“冒泡排序”。

#### 1、算法原理：
1）比较相邻的元素。如果第一个比第二个大，就交换他们两个。

2）对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。

3）针对所有的元素重复以上的步骤，除了最后一个。

4）持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

#### 2、算法分析：
时间复杂度：

&emsp;&emsp;若文件的初始状态是正序的，一趟扫描即可完成排序。所需的关键字比较次数`C`和记录移动次数`M`均达到最小值：![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble1.png?raw=true), ![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble2.png?raw=true)

&emsp;&emsp;所以，冒泡排序最好的时间复杂度为![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble3.png?raw=true)

&emsp;&emsp;若初始文件是反序的，需要进行`n - 1`趟排序。每趟排序要进行`n - i`次关键字的比较(1≤i≤n-1)，且每次比较都必须移动记录三次来达到交换记录位置。在这种情况下，比较和移动次数均达到最大值：

&emsp;&emsp;![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble4.png?raw=true)

&emsp;&emsp;![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble5.png?raw=true)

&emsp;&emsp;冒泡排序的最坏时间复杂度为：![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble6.png?raw=true)

&emsp;&emsp;综上，因此冒泡排序总的平均时间复杂度为：![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble6.png?raw=true)

算法稳定性：

&emsp;&emsp;冒泡排序就是把小的元素往前调或者把大的元素往后调。比较是相邻的两个元素比较，交换也发生在这两个元素之间。所以，如果两个元素相等，是不会再交换的；如果两个相等的元素没有相邻，那么即使通过前面的两两交换把两个相邻起来，这时候也不会交换，所以相同元素的前后顺序并没有改变，所以冒泡排序是一种稳定排序算法。

#### 3、动图演示：
![image](https://github.com/SKY-JING/merlion/blob/master/doc/imgs/bubble/bubble7.gif?raw=true)