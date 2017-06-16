import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';

export default [
  {
    entry: 'src/popperupper.js',
    format: 'iife',
    plugins: [
      resolve(),
      commonjs({ namedExports: { 'iframe-resizer': ['iframeResizer'] } }),
      babel({ include: 'src/**/*.js' }),
      postcss({ plugins: [cssnext()] }),
    ],
    dest: 'dist/popperupper.js',
  },
  {
    entry: 'src/index.js',
    format: 'cjs',
    plugins: [
      resolve(),
      commonjs({ namedExports: { 'iframe-resizer': ['iframeResizer'] } }),
      babel({ include: 'src/**/*.js' }),
      postcss({ plugins: [cssnext()] }),
    ],
    dest: 'dist/index.js',
  },
];
