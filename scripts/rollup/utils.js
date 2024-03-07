import path from 'path'
import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'

export const isDev = process.env.NODE_ENV === 'development'

const projectRootPath = path.resolve(__dirname, '../../')
const packagesPath = path.resolve(__dirname, '../../packages')

function getEntryPath(fileName) {
  return `${packagesPath}/${fileName}`
}

function getDistPath() {
  return path.join(projectRootPath, '/dist')
}

function getBaseRollupPlugins({
  tsConfig = {
  },
  alias = { __DEV__: isDev },
} = {}) {
  return [
    replace({
      preventAssignment: true,
      ...alias,
    }),
    cjs(),
    ts(tsConfig),
  ]
}

export { getEntryPath, getDistPath, getBaseRollupPlugins }
