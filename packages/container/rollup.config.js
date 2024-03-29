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
  {
    input: 'src/$$http.js',

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

    output: { file: '$$/http.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/$$edge.js',

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

    output: { file: '$$/edge.js', format: 'cjs', exports: 'default' },
  },
  {
    input: 'src/$$emitter.js',

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

    output: { file: '$$/emitter.js', format: 'cjs', exports: 'default' },
  },
];
