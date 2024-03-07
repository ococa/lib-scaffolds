// 多文件
import { getBaseRollupPlugins, getDistPath, getEntryPath, isDev } from './utils'

const inputPath = getEntryPath('index.ts')
const outputPath = getDistPath()

export default async () => ({
  input: inputPath,
  output: {
    file: `${outputPath}/index.js`,
    name: 'index.js',
    format: 'umd',
  },
  plugins: [
    ...getBaseRollupPlugins(),
    !isDev && (await import('@rollup/plugin-terser')).default()
  ],
})

