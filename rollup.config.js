import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  entry: 'src/index.js',
  format: 'iife',
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'iframe-resizer': [ 'iframeResizer', 'iframeResizerContentWindow' ]
      }
    }),
    babel({ include: 'src/**/*.js' }),
    postcss(),
  ],
  dest: 'widget.js'
};
