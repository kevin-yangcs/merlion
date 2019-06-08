let assert = require('assert').strict;
let quickSort = require('../../dist').quickSort;

describe('快速排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + quickSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(quickSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});