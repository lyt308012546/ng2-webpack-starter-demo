# 开发笔记

## 修改环境变量只会在当前命令窗口下有效

### shell处理环境变量

```javascript

#查看所有环境变量
ls env:

#搜索环境变量
ls env:NODE*

#查看单个环境变量
$env:NODE_ENV

#添加/更新环境变量
$env:NODE_ENV=development

#删除环境变量
del evn:NODE_ENV

```

### cmd处理环境变量
```javascript

#查看所有环境变量
set

#查看单个环境变量
set NODE_ENV

#添加/更新环境变量
set NODE_ENV=development

#删除环境变量
set NODE_ENV=

```

## typings

### 简介
* 一些js库扩展了JavaScript的特性和语法，但是TypeScript编译器并不识别，
通过typings.json配置可以辅助IDE，给出有智能的提示信息，以及重构的依据。
因此需要在typings.json文件中配置TypeScript类型定义文件（文件名后缀为.d.ts）

### 自己的理解
* typings就方便TypeScript识别、编译、智能提示TypeScript无法识别的JS库的特性和语法

### 命令集

``` javascript
#全局安装typings
npm install typings --global

#搜索
typings search module

#查找
typings search --name module
#安装(默认使用npm)
typings install module --save

#使用数据源为dt安装
typings install dt~module --global --save

#其他数据源安装
typings install env~module --global --save
typings install npm~module --save

#可以直接用github,后面为github的项目路径https://github.com/DefinitelyTyped/DefinitelyTyped #后面为提交的版本号，可以不写
typings install github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#38fb591c6eba840e0b53d1110302b8e4fb04652c --global --save

#显示所有引用
cat typings/index.d.ts
```


### 数据源
* npm - dependencies from NPM
* github - dependencies directly from GitHub (E.g. Duo, JSPM)
* bower - dependencies from Bower
* common - "standard" libraries without a known "source"
* shared - shared library functionality
* lib - shared environment functionality (mirror of shared) (--global)
* env - environments (E.g. atom, electron) (--global)
* global - global (window.<var>) libraries (--global)
* dt - typings from DefinitelyTyped (usually --global)

----

## TSlint

### 简介
* TSlint是用于检测TypeScript,类似JSlint检测JavaScript

### 核心规则API

* class-name 检测class名称是否为驼峰式写法

---
## polyfills

* 为ES5浏览器提供ES6特性支持，有点像bable。

---
## zone.js是什么

* zone.js为JavaScript提供了执行上下文，可以在异步任务之间进行持久性传递。
* zone.js暴力方式将JavaScript中的异步任务都包裹了一层，使得这些异步任务都将运行在zone的上下文中。
* zone.js包含哪些钩子
    * onZoneCreated：产生一个新的zone对象时的钩子函数。zone.fork也会产生一个继承至基类zone的新zone，形成一个独立的zone上下文；
	* beforeTask：zone Task执行前的钩子函数；
	* afterTask：zone Task执行完成后的钩子函数；
	* onError：zone运行Task时候的异常钩子函数；


## webpack

### webpack命令集

* webpack 最基本的启动webpack命令
* webpack -w 提供watch方法，实时进行打包更新
* webpack -p 对打包后的文件进行压缩
* webpack -d 提供SourceMaps，方便调试
* webpack –config webpack.custom.config.js 显示要执行的配置文件
* webpack --colors 输出结果带彩色，比如：会用红色显示耗时较长的步骤
* webpack --profile 输出性能数据，可以看到每一步的耗时
* webpack --display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
* webpack --display-error-details 发生错误时,显示详细参数



## tsconfig.json

* tsconfig.json是typescript的配置文件，默认在项目的根目录下
* 当typescript编译时会查找目录下的tsconfig.json文件

### 细节

* compilerOptions"可以被忽略，这时编译器会使用默认值。
* 如果tsconfig.json没有提供"files"属性，编译器会默认包含当前目录及子目录下的所有TypeScript文件（*.ts 或 *.tsx）。
  如果提供了"files"属性值，只有指定的文件会被编译。
* 如果指定了"exclude"选项，编译器会包含当前目录及子目录下的所有TypeScript文件（*.ts 或 *.tsx），不包括这些指定要包含的文件。
* "files"选项不能与"exclude"选项同时使用。如果同时指定了两个选项的话，只有"files"会生效。
* 所有被"files"属性里的文件所引用的文件同样会被包含进来。 就好比，A.ts引用了B.ts，因此B.ts不能被排除，
* "exclude"列表中的文件引用列表外的文件，。
* tsconfig.json可以是个空文件，那么编译器则使用默认编译选项，编译当前目录及其子目录下的所有文件。
* 命令行上提供的编译选项会覆盖tsconfig.json文件中的对应选项。

## webstorm

#### webstorm无法引用到typings,导致报错的解决方案

不要把typings文件夹设置成排除在项目之外，负责webstorm会找不到typings文件夹，就会报错，虽然代码执行webpack不会保存，webstorm中始终有
红色的错误横线，很容易无法判断是否是真是的错误信息。

#### 如何设置webstorm使用项目根目录的检测配置tslint.json进行检测

* file->seting->Languages&Frameworks->TypeScript->TSLint
* 设置启用
* 选择NODE目录
* 现在TSLint的模块目录
* 设置config目录
* 点击应用完成即可


#### webstorm中@Component下包含directives报错的问题解决方案

官方的意思好像只能升级webstorm，没办法只好重新下载了一个最新版的。
[官方的回答](https://youtrack.jetbrains.com/issue/WEB-22139#u=1466666851956&tab=Comments)


#### webpack编译报错：Duplicate identifier 'Promise'

不要同时引用core-js和es6-promise，这样会导致冲突，因为core-js中包含有promise的定义。
`修复问题时，请注意删除dist目录下的内容，防止有缓存。`


#### Code Style 统一


|-- Spaces
|--|-- Within
|--|--|-- ES3 import/export braces Y
|--|-- Other
|--|--|-- after type reference colon ':' Y
|-- Wrapping and Braces
|--|--Comment at first column N
|--|--Comment at first column N
