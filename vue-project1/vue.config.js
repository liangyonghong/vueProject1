const port = 7070
const path = require("path")

const resolve = dir => path.join(__dirname,dir)

module.exports = {
    publicPath:'/best-practice',
    devServer:{
        port
    },
    // configureWebpack:{
    //     name:'lyh',
    //     //加一个别名，@
    //     resolve:{
    //         alias:{
    //             comps: path.join(__dirname,'src/components')
    //         }
    //     }
    // }

    configureWebpack:config =>{
        config.resolve.alias.comps = path.join(__dirname,'src/components')
        if(process.env.NODE_ENV === 'development'){
            config.name = 'lyh1'  //开发环境
        }else{
            config.name = '梁'    //生产环境
        }
    },

    chainWebpack(config){
        //使用svg icon svg-sprite-loader
        //任务1.排除目前处理svg的rule添加一个规则可以打包icon目录中的svg文件
        config.module.rule('svg')
        .exclude.add(resolve('src/icon'))
        //任务2.添加一个规则可以使用svg-sprite-loader打包icon目录中的svg文件
        //vue inspect --rule icons  //配置完以后用
        config.module.rule('icons')
        .test(/\.(svg)(\?.*)?$/)
        .include.add(resolve('src/icon')).end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({symbolId:'icon-[name]'})
    }
}