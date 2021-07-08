//引入node_modules
const path = require("path")
//引入plugin插件
const HTMLWebpackPlugin = require("html-webpack-plugin")

//配置
module.exports = {
    //入口
    entry:"./src/index.ts",
    //打包环境
    mode : 'development',
    //打包后的位置
    devtool: "inline-source-map",
    output:{
        path:path.resolve(__dirname,"dist"),
        //打包后的文件类型及名称
        filename: "bundle.js"
    },
    //对loader模块的配置
    module:{
        rules:[
            {
                //对后缀为ts的文件转换
                test:/\.ts$/,
                //配置转换js兼容
                use:[
                    {
                       loader: "babel-loader",

                        options:{
                           presets:[
                               [
                                   "@babel/preset-env",
                                   {
                                       targets:{
                                           "chrome":"88",
                                           "ie":"11"
                                       },
                                       "corejs":"3",
                                       "useBuiltIns":"usage"
                                   }
                               ]
                           ]
                        }
                    },
                    'ts-loader'
                ],
                //转换时排除的文件
                exclude:/node_modules/
            },
            {
              test:/\.less$/,
              use:[
                  "style-loader",
                  "css-loader",
                  //配置css浏览器兼容
                  {
                      loader:"postcss-loader",
                      options:{
                          postcssOptions:{
                              plugins:[
                                  [
                                      "postcss-preset-env",
                                      {
                                          browsers:'last 2 versions'
                                      }
                                  ]
                              ]
                          }
                      }
                  },
                  "less-loader"
              ]
            }
        ]
    },
    //对plugin配置
    plugins:[
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }),
    ],
    resolve:{
        extensions:['.js','.ts','.css','.svg']
    }
}

