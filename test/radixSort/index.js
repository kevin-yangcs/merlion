let assert = require('assert').strict;
let radixSort = require('../../dist').radixSort;

describe('基数排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + radixSort([4, 2, 1, 5, 3, 13], 2));
    assert.deepStrictEqual(radixSort([4, 2, 1, 5, 3, 13], 2), [1, 2, 3, 4, 5, 13]);
  });
});