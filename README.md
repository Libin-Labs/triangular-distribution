# @lp-labs/triangular-distribution

Interior-mode triangular density,CDF and inverse.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/triangular-distribution
```

## Working example

```js
import { triangularCdf } from '@lp-labs/triangular-distribution';
if (Math.abs(triangularCdf(1, 0, 1, 2) - 0.5) > 1e-12) throw new Error('Distribution');
```

CommonJS: `const api = require('@lp-labs/triangular-distribution')`.

## Behavior, customization and limits

Ideal mathematical probability model,not inference,fitting,random sampling or a guarantee about real observations. Negligible floating-point probabilities may underflow0 explicitly. triangularPdf/Cdf(x,low,mode,high) and triangularQuantile(p,low,mode,high). Coordinates[-1e100,1e100],both mode gaps>=1e-12,strict interior mode,p[0,1]. Uses normalized fractions to avoid products of huge widths. PDF0 outside,CDF saturates,quantile includes endpoints. O(1); excludes endpoint-mode triangles.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function triangularPdf(x: number, low: number, mode: number, high: number): number;
export declare function triangularCdf(x: number, low: number, mode: number, high: number): number;
export declare function triangularQuantile(
  p: number,
  low: number,
  mode: number,
  high: number,
): number;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
