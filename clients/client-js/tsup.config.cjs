/** @type {import('tsup').Options} */
module.exports = {
  entry: ['src/**/*.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  bundle: false,
  outDir: 'dist',
};
