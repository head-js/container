import eslint from '@rollup/plugin-eslint';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
// import terser from '@rollup/plugin-terser';


export default [
  {
    input: 'src/index.js',

    external: [
    ],

    plugins: [
      eslint(),

      commonjs({
        sourceMap: false,
      }),

      resolve({
        browser: true,
      }),

      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),

      // terser({
      //   format: {
      //     max_line_len: 120,
      //   }
      // }),
    ],

    output: { file: 'dist/container.js', format: 'cjs' },
  },
];
