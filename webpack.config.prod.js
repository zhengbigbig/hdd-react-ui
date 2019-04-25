const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
    mode: 'production',
    //外部的库，对应js不同打包工具
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',  //nodejs  modules.export
            amd: 'react',       //浏览器标准
            root: 'React',      // 两者都不是 <script src="xx/xx"></script>  window.xxx
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
        },
    }
})
