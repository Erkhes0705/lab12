'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { calculateFine } = require('../src/fine');

test('хугацаандаа буцаавал торгууль 0', () => {
  assert.strictEqual(calculateFine('2026-11-10', '2026-11-10'), 0);
  assert.strictEqual(calculateFine('2026-11-10', '2026-11-05'), 0);
});

test('5 хоног хоцорвол 5 x 100 = 500 ₮', () => {
  assert.strictEqual(calculateFine('2026-11-10', '2026-11-15'), 500);
});

test('өдрийн тарифыг өөрчилж болно', () => {
  assert.strictEqual(calculateFine('2026-11-10', '2026-11-12', 200), 400);
});

test('буруу огноо өгвөл алдаа шиднэ', () => {
  assert.throws(() => calculateFine('abc', '2026-11-12'), TypeError);
});
