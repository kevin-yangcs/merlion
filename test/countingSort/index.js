let assert = require('assert').strict;
let countingSort = require('../../dist').countingSort;

describe('计数排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + countingSort([4, 2, 1, 5, 3, 13], 13));
    assert.deepStrictEqual(countingSort([4, 2, 1, 5, 3, 13], 13), [1, 2, 3, 4, 5, 13]);
  });
});