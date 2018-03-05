# react-redux-webpack4-mockjs
## what fuck this?
react automaticaly<br/>
这是一个React脚手架，没有使用create-react-app<br/>
标准的React+Redux分层结构<br/>
经过了多个项目的实践，不停的更新和优化出来的。目前自己做项目也在用。


## 构建 Start

```
npm install		# 安装依赖模块
```

```
npm run dev		# 运行开发环境，默认监听8888端口
```

```
npm run build		# 正式打包，用于生产环境
```

```
npm run prettier	# 自动格式化src、mock目录下的所有.js/.css/.scss/.less文件
```

```
npm run dist		# 运行正式打包后的最终文件（build目录下的文件），默认监听8888端口
```

## Yarn构建

```
yarn install		# 安装依赖模块
```

```
yarn run dev		# 运行开发环境，默认监听8888端口
```

```
yarn run build		# 正式打包，用于生产环境
```

```
yarn run prettier	# 自动格式化src、mock目录下的所有.js/.css/.scss/.less文件
```

```
yarn run dist		# 运行正式打包后的最终文件（build目录下的文件），默认监听8888端口
```

## 特性 Characteristic

* HMR局部热替换

* 代码分割按需加载

* HappyPack多线程编译

* 最终打包后，会在/build文件夹下生成 index.html 和 /dist文件夹，这两个东西是最终需要的。

## 目录结构 Structure

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
├── src                                 # 项目代码目录
│   ├── a_action                        # 所有的action
│   ├── a_component                     # 所有的公共类UI组件
│   ├── a_container                     # 所有的页面级容器组件
|	├── ...
|   	└── root			# 根页，里面配置了顶级的路由
│   ├── a_reducer                       # 所有的reducer
│   ├── assets                          # 所有的图片、文件等静态资源
│   ├── styles                          # 所有的样式文件
│   ├── store                           # store数据中心
│   ├── util                            # 自定义工具
|   	├── tools.js			# 封装了一些工具函数，比如去掉两端空格之类的
|	├── fetch-api.js		# 封装了2个异步请求，所有的action都调用的这个js中的方法
|	└── mock-data.js		# mock模拟数据的模版，只在fetch-api.js中有用到
│   ├── index.js                        # 项目入口JS
│   └── index.html                      # 主页html文件,开发环境和生产打包共用
├── server.js				# 用于开发环境的服务部署
├── webpack.dev.config.js		# 用于开发环境的webpack配置
└── webpack.production.config.js	# 用于生产环境正式打包的webpack配置
```

## 参阅资料 Consult
React GitHub地址：https://github.com/facebook/react <br/>
react-router GitHub地址：https://github.com/ReactTraining/react-router <br/>
React官方更新日志：https://github.com/facebook/react/releases <br/>
React16更新内容：http://blog.csdn.net/lx376693576/article/details/78192768 <br/>
mockjs官网：http://mockjs.com/ <br/>
Eslint中文站：http://eslint.cn/ <br/>
