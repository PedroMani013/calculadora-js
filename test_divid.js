const assert = require('assert');
const { divisao } = require('./calculadora');

assert.strictEqual(divisao(6, 3), 2, 'Falha: 6 / 3 deveria ser 2');
assert.strictEqual(divisao(-6, 3), -2, 'Falha: -6 / 3 deveria ser -2');
assert.strictEqual(divisao(5, 2), 2.5, 'Falha: 5 / 2 deveria ser 2.5');

assert.throws(
  () => divisao(10, 0),
  /Não é possível dividir por zero/,
  'Falha: divisão por zero deveria lançar erro'
);

console.log('test_divid: OK');