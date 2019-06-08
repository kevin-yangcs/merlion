let assert = require('assert').strict;
let bucketSort = require('../../dist').bucketSort;

describe('桶排序测试:', () => {
  it('number类型测试', () => {
    console.log('[4, 2, 1, 0.5, -3, 13] => ' + bucketSort([4, 2, 1, 0.5, -3, 13]));
    assert.deepStrictEqual(bucketSort([4, 2, 1, 0.5, -3, 13]), [-3, 0.5, 1, 2, 4, 13]);
  });
});