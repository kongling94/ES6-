| app项目        | server服务器         | tasks脚本  |

1.创建脚本工具，对文件进行编译、处理、保存、重命名、压缩、热更新
2.创建js,css,views,erver的模板 scripts.js css.js server.js pages.js
3.将创建好的模板进行自动化的实现 brower.js
4.因为每次对文件监听、处理的时候都会复制，任务结束后需要清理文件 clean.js
5.创建依赖管理build.js

server目录下的app.js是入口文件，所有经过文件在处理之后要通过服务器的搭建进行展示；
根目录下的babelrc是解决语法兼容性问题、gulpfile.babel.js是引用依赖的管理配置
