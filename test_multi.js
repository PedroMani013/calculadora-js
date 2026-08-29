const assert = require('assert');
const { multiplicacao } = require('./calculadora');

assert.strictEqual(multiplicacao(2, 3), 6, 'Falha: 2 * 3 deveria ser 6');
assert.strictEqual(multiplicacao(-2, 3), -6, 'Falha: -2 * 3 deveria ser -6');
assert.strictEqual(multiplicacao(0, 5), 0, 'Falha: 0 * 5 deveria ser 0');
assert.strictEqual(multiplicacao(-2, -2), 4, 'Falha: -2 * -2 deveria ser 4');

console.log('test_multi: OK');