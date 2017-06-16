import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import cssnext from 'postcss-cssnext';
import fs from 'fs';
import copy from 'rollup-plugin-copy';

const pkg = JSON.parse(fs.readFileSync('./package.json'));
const external = Object.keys(pkg.dependencies || {});

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
    external,
    plugins: [
      babel({ include: 'src/**/*.js' }),
      postcss({ plugins: [cssnext()] }),
      copy({
        'src/index.d.ts': 'dist/index.d.ts',
      }),
    ],
    dest: 'dist/index.js',
  },
];
