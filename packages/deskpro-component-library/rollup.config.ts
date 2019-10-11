import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'

const pkg = require('./package.json')

const libraryName = 'deskpro-component-library'

export default {
  input: `src/${libraryName}.ts`,
  output: [
    { file: pkg.main, name: camelCase(libraryName), format: 'umd', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**',
  },
  plugins: [
    // Allow json resolution
    json(),
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: [
        'node_modules/**'
      ],
      exclude: [
        'node_modules/process-es6/**'
      ],
      namedExports: {
        'node_modules/react/index.js': ['Children','cloneElement','Component','createContext','createElement','forwardRef','Fragment','isValidElement','memo','PropTypes','useCallback','useContext','useDebugValue','useEffect','useLayoutEffect','useMemo','useRef','useState'],
        'node_modules/react-is/index.js': ['ForwardRef','isElement','isValidElementType'],
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/prop-types/index.js': ['any','arrayOf','bool','func','element','instanceOf','node','number','object','oneOf','oneOfType','string'],
        'node_modules/@material-ui/utils/index.js': ['chainPropTypes','elementAcceptingRef','elementTypeAcceptingRef','exactProp','getDisplayName','ponyfillGlobal','refType'],
      }
    }),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),

    // Resolve source maps to the original source
    sourceMaps(),
  ],
}
