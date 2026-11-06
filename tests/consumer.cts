import { triangularCdf } from '@lp-labs/triangular-distribution';
if (Math.abs(triangularCdf(1, 0, 1, 2) - 0.5) > 1e-12) throw new Error('Distribution');
// @ts-expect-error invalid argument must be rejected by declarations
triangularCdf('1', 0, 1, 2);
