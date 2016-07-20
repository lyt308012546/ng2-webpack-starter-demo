# 概述

　本章描述的Angular 2开发环境基于开源的angular2-webpack-starter，包含以下内容：

* Angular2：核心、路由、Http服务、单元测试和端对端测试
* TypeScript：开发语言和编译工具
* Typings：TypeScript类型管理工具
* TsLint：TypeScript语法检查工具
* TypeDoc：TypeScript文档工具
* Webpack：构建和打包工具
* Jasmine：Javascript测试框架
* Karma：单元测试运行工具
* Protactor：端对端测试运行工具
* Istanbul：测试覆盖率工具。

# 安装

　安装步骤如下所述：

* npm install typings webpack-dev-server rimraf webpack -g安装全局库
* npm install安装项目本地库
* npm start运行
* 命令窗口看到”webpack: bundle is now VALID.”说明服务器已正确启动
* 打开浏览器输入http://localhost:3000 界面最上方应显示”Hello Angular 2 Webpack Starter”。

# 配置

#### 1. 概述

配置文件概述如下所示：

* package.json： npm包管理器
* typings.json： TypeScript类型定义管理器
* tsconfig.json： TypeScript编译配置
* tslint.json： TypeScript语法检查配置
* typedoc.json： TypeScript文档生成配置
* webpack.config.js：Webpack配置，分common、开发、生产和测试
* karma.conf.js：Karma单元测试配置
* protractor.conf.js： Protractor端对端集成测试配置
* .editorconfig： 编辑器设置

#### 2. npm包管理

npm包管理工具的配置文件是package.json， 主要包括内容：

* scripts：构建脚本，在命令行使用npm run “name”运行。假设定义了prename、name和postname，npm run name时将自动按npm run prename、npm run name和npm run postname顺序执行，当然pre和post是可选的
* dependencies：程序运行时依赖的库。npm install时增加—save自动更新列表
* devDependencies：开发工具依赖的库。npm install时增加—save-dev自动更新列表。
* 安装步骤中的npm install步骤即在本地安装dependencies和devDependencies中的所有软件包。
* npm –help可查看所有命令列表，npm -h可查看帮助信息。


#### 3. Typings

* typings用于管理第三方TypeScript库的类型定义，配置文件是typings.json，配置文件中包括所有第三方库类型定义的下载地址。
* package.json的postinstall脚本执行typings install，即按配置文件的定义下载安装所有的类型定义。
* typings --h可查看所有的命令。


#### 4. TypeScript编译

Angular 2开发使用TypeScript语言，编译配置文件是tsconfig.json，主要内容包括：

* compilerOptions：编译工具tsc的编译选项
    * target：ES5、ES6。如果使用async/await必须是ES6
    * module：编译后javascript模块方式
    * emitDecoratorMetadata：支持Decorator如@Component
    * experimentalDecorators：同上
    * sourceMap：ts元文件和生成js文件对照表，用于调试等
* exclude：编译时排除在外的子目录
* filesGlob：需编译的文件名模式。

#### 5. TsLint语法检查

TypeScript语法检查工具，配置文件是tslint.json，主要内容包括：

* rulesDirectory：按Angular 2编程规范编写的lint语法规则
* rules：lint语法规则。

#### 6. typedoc文档生成

typedoc将源代码中jsDoc格式注释自动生成HTML开发文档，配置文件是typedoc.json。


#### 7. Webpack构建打包

WebPack是Fackbook开源的构建打包工具，包括webpack-dev-server开发用Web服务器。配置文件分为开发、生成和测试，config/webpack.common.js为公用配置：

* config/webpack.dev.js
* config/webpack.prod.js
* config/webpack.test.js。

配置文件主要内容包括：

* entry：打包入口程序，分为polyfills模拟库包、vendor第三方库包和main应用程序包
* output：指定输出目录、文件名格式等
* resolve：用于解析模块路径
* module：定义各种资源文件的载入器
* plugins：执行各种构建任务的插件
* devtool：指定sourcemap的详细度
* tslint：tslint配置参数
* devServer：webpack-dev-server运行参数


#### 8. Karma单元测试

Karma运行单元测试用例并生成测试报表和测试覆盖率报告，配置文件是karma.conf.js。实际配置文件定义在/config/karma.conf.js，主要包括：

* frameworks：使用jasmine作为单元测试框架
* files：测试文件列表。由于单元测试需先导入Angular 2的运行环境，故测试文件 是./config/spec-bundle.js，在spec-bundle.js中再指定单元测试文件
* preprocessors：将typescript编译为javascript等预处理步骤
* webpack：测试用webpack配置
* coverageReporter：覆盖率工具报告设置
* reporters：单元测试和覆盖率报告
* browsers：如果karma-phantomjs-launcher在Windows下有Bug无法使用PhantomJS，可以设置为Chrome，单元测试时会弹出Chrome界面。

#### 9. Protractor端对端测试

Protractor运行端对端集成测试用例并生成测试报表，配置文件是protractor.conf.js。实际配置文件定义在/config/protractor.conf.js，主要包括：

* baseUrl：测试的浏览器主页
* specs：端对端测试用例文件列表
* framework：使用jasmine作为集成测试框架
* directConnect：true表示Node.js测试进程和Chrome浏览器通过WebDriver协议直连，而不使用Selenium Server中转
* capabilities：使用Chrome浏览器。

# 构建

* clean： 删除所有安装包、编译/文档/测试生成的目录
* clean:dist： 删除编译生成的发布目录
* clean:install： 先运行clean，再重新安装软件包
* watch： 编译并监控变化开发版代码
* watch:dev： 同上
* watch:prod： 编译并监控变化生产版代码
* build:dev： 编译构建开发版代码
* build:prod： 编译构建生成版代码
* lint： 程序语法检查
* docs： 文档生成

# 运行

* start： 运行开发版代码
* server： 同上
* server:dev： 同上
* server:prod：运行生成版代码

# 测试

* test： 执行Karma单元测试
* e2e： 执行Protractor集成测试
* ci： 执行单元测试和集成测试

















