let assert = require('assert').strict;
let selectionSort = require('../../dist').selectionSort;

describe('选择排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + selectionSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(selectionSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});