// test_subtr.js
const assert = require('assert');
const { subtracao } = require('./calculadora');

assert.strictEqual(subtracao(5, 3), 2, 'Falha: 5 - 3 deveria ser 2');
assert.strictEqual(subtracao(3, 5), -2, 'Falha: 3 - 5 deveria ser -2');
assert.strictEqual(subtracao(0, 0), 0, 'Falha: 0 - 0 deveria ser 0');
assert.strictEqual(subtracao(-4, -4), 0, 'Falha: -4 - -4 deveria ser 0');

console.log('test_subtr: OK');