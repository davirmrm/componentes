export const int2Brl = v => (parseFloat(v / 100)
  .toFixed(2)
  .replace('.', ',')
  .replace(/(\d)(?=(\d{3})+\,)/g, '$1.'));

export const brl2Int = v => parseInt(v.replace(/(\D)/g, ''), 10);

export const float2Int = v => (
  v === '0' ? undefined :
 (v.indexOf('.') < v.length - 2 ?
  v.replace('.', '')
  : (v.length === 1  ? `00${v}` : parseFloat(v).toFixed(2) * 100))
);
