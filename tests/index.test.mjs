import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('analytic fixture', () => {
  assert.ok(Math.abs(api.triangularCdf(1, 0, 1, 2) - 0.5) < 1e-12);
});
test('peak density', () => {
  assert.equal(api.triangularPdf(1, 0, 1, 2), 1);
  assert.equal(api.triangularPdf(-1, 0, 1, 2), 0);
});
test('support endpoints', () => {
  assert.equal(api.triangularCdf(-1, 0, 1, 2), 0);
  assert.equal(api.triangularCdf(3, 0, 1, 2), 1);
});
test('quantile inverse asymmetric', () => {
  for (let i = 0; i <= 100; i++) {
    const p = i / 100;
    assert.ok(Math.abs(api.triangularCdf(api.triangularQuantile(p, 0, 1, 4), 0, 1, 4) - p) < 1e-14);
  }
});
test('invalid mode', () => {
  assert.throws(() => api.triangularPdf(1, 0, 0, 2));
  assert.throws(() => api.triangularQuantile(-1, 0, 1, 2));
});
test('type contract', () => {
  assert.throws(() => api.triangularCdf('1', 0, 1, 2));
});
