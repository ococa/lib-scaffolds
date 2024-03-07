

// 多文件
export default [
    {
        input: `${pkgPath}/${module}`,
        output: {
            file: `${distPath}/index.js`,
            name: 'index.js',
            format: 'umd'
        },
        plugins: [...getBaseRollupPlugins()]
    }
]


// helpers
function getBaseRollupPlugins({ typescript = {} } = {}) {
    return [cjs(), ts(typescript)];
}