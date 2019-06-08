let assert = require('assert').strict;
let insertionSort = require('../../dist').insertionSort;

describe('插入排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + insertionSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(insertionSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});