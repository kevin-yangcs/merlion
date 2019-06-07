let assert = require('assert').strict;
let bubbleSort = require('../../dist').bubbleSort;

describe('冒泡排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + bubbleSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(bubbleSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});