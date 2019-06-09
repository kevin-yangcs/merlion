let assert = require('assert').strict;
let base64 = require('../../dist').base64;

describe('base64加密算法测试:', () => {
  it('加密测试', () => {
    console.log('精忠报国=>' + base64.encode('精忠报国'));
    assert.deepStrictEqual(base64.encode('精忠报国'), '57K+5b+g5oql5Zu9');
  });

  it('解密测试', () => {
    console.log('57K+5b+g5oql5Zu9=>' + base64.decode('57K+5b+g5oql5Zu9'));
    assert.deepStrictEqual(base64.decode('57K+5b+g5oql5Zu9'), '精忠报国');
  });
});