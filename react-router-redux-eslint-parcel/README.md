# react-router-redux-eslint-parcel
### what is this?
react automaticaly<br/>
这是一个React脚手架，没有使用create-react-app<br/>
标准的React+Redux分层结构<br/>
经过了多个项目的实践，不停的更新和优化出来的。目前自己做项目也在用。


### NPM构建

```
npm install       # 安装依赖模块
```

```
npm run start     # 运行开发环境，默认监听8888端口
```

```
npm run build     # 正式打包，用于生产环境
```

```
npm run dist     # 运行正式打包后的最终文件（build目录下的文件），默认监听8888端口
```

```
npm prettier       # 自动格式化src、mock目录下的所有.js/.css/.scss/.less文件
```

### 特性

* HMR局部热替换

* 代码分割按需加载

* Prettier自动代码格式化

* HappyPack多线程编译(webpack分支)

* 最终打包后，会在/build文件夹下生成最终代码。


## 目录结构 Structure

```
.
├── build				# 正式打包后，会自动生成该文件夹，其中会包含最终用于生产环境的文件
├── mock				# Mock.js模拟数据相关配置
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
│   ├── util                            # 自己封装的常用工具函数（字符串转换，API请求什么的）
│   ├── index.js                        # 项目入口JS
│   ├── index.html			# 主页html文件,生产环境打包使用
│   └── index-mock.html                 # 主页html文件,开发环境使用（自带mock模拟数据）
└── server.js				# 用于开发环境的服务部署
```
