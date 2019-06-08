let assert = require('assert').strict;
let shellSort = require('../../dist').shellSort;

describe('希尔排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + shellSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(shellSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});