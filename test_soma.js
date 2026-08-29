const assert = require('assert')
const { soma } = require('./calculadora');

assert.strictEqual(soma(2, 3), 5, 'Falha: 2 + 3 deveria ser 5');
assert.strictEqual(soma(-1, 1), 0, 'Falha: -1 + 1 deveria ser 0');
assert.strictEqual(soma(-5, -5), -10, 'Falha: -5 + -5 deveria ser -10');
assert.strictEqual(soma(0, 0), 0, 'Falha: 0 + 0 deveria ser 0');

console.log('test_soma: OK');