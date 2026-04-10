/** @type {import('tsup').Options} */
module.exports = {
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  platform: 'browser',
  noExternal: ['event-source-plus', 'lru-cache'],
};
