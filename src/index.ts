function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function bounds(low: number, mode: number, high: number): { width: number; fraction: number } {
  for (const v of [low, mode, high]) finite(v, -1e100, 1e100);
  if (mode - low < 1e-12 || high - mode < 1e-12)
    throw new RangeError('Strict resolvable interior mode');
  const width = high - low;
  return { width, fraction: (mode - low) / width };
}
export function triangularPdf(x: number, low: number, mode: number, high: number): number {
  const { width, fraction } = bounds(low, mode, high);
  finite(x, -1e100, 1e100);
  if (x < low || x > high) return 0;
  const t = (x - low) / width;
  return (2 / width) * (x <= mode ? t / fraction : (1 - t) / (1 - fraction));
}
export function triangularCdf(x: number, low: number, mode: number, high: number): number {
  const { width, fraction } = bounds(low, mode, high);
  finite(x, -1e100, 1e100);
  if (x <= low) return 0;
  if (x >= high) return 1;
  const t = (x - low) / width;
  return x <= mode ? (t * t) / fraction : 1 - ((1 - t) * (1 - t)) / (1 - fraction);
}
export function triangularQuantile(p: number, low: number, mode: number, high: number): number {
  const { width, fraction } = bounds(low, mode, high);
  finite(p, 0, 1);
  if (p === 0) return low;
  if (p === 1) return high;
  return p <= fraction
    ? low + width * Math.sqrt(p * fraction)
    : high - width * Math.sqrt((1 - p) * (1 - fraction));
}
