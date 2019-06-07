let assert = require('assert').strict;
let bubbleSort = require('../../dist').bubbleSort;

describe('冒泡排序测试', () => {
  it('number类型排序', () => {
    assert.deepStrictEqual(bubbleSort([1, 2]), [1, 2]);
  });
});