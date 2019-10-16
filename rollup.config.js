import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import { string } from 'rollup-plugin-string'

const production = !process.env.ROLLUP_WATCH

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      // CJS code to use in node applications (which use require() for modules i.e no build process)
      file: 'dist/bundle.cjs.js',
      format: 'cjs'
    },
    {
      // ESM code to use in client react applications
      file: 'dist/bundle.esm.js',
      format: 'esm'
    },
    {
      // UMD code to use directly in browsers
      name: 'reactUiComponents',
      file: 'dist/bundle.umd.js',
      globals: {
        react: 'React'
      },
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    string({
      include: '**/*.css'
    }),
    production && terser()
  ]
}
