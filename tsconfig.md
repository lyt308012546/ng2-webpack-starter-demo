
[tsconfig-json 英文文档](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[tsconfig-json 中文文档](http://www.tslang.cn/docs/handbook/tsconfig-json.html)

[compilerOptions 英文文档](http://www.typescriptlang.org/docs/handbook/compiler-options.html)
[compilerOptions 中文文档](http://www.tslang.cn/docs/handbook/compiler-options.html)

```
{
  "compilerOptions": {
    //允许javascript被编译
    "allowJs":true，
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    //启用支持ES7的装饰器，这个必须开启，否则就不能写@component这样的写法了
    "experimentalDecorators": true,
    "sourceMap": true,
    //这里一定要为false，否则编译会报错
    //编译时不生成类似 extends这样的辅助函数
    "noEmitHelpers": false
  },
  "exclude": [
    "node_modules"
  ],
  "awesomeTypescriptLoaderOptions": {
    "compiler": "typescript",
    "forkChecker": true,
    "useWebpackText": true
  },
  "compileOnSave": false,
  "buildOnSave": false,
  "atom": { "rewriteTsconfig": false }
}
```