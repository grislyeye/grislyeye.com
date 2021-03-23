import resolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'assets/scripts/vellum.js',
  output: {
    file: 'dist/scripts/vellum.js',
    format: 'es'
  },
  plugins: [
    resolve()
  ]
};
