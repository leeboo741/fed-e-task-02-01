# 前段工程化

```js
    // 问题
    // 1. ES6 兼容有问题
    // 2. Less/Sass/postCss 提高CSS 变成星， 但是运行环境不能直接支持
    // 3. 使用模块化的方式提高项目可维护性， 但运行环境不能直接支持
    // 4. 部署上线前需要手动压缩代码和资源文件， 部署过程需要手动上传代码到服务器
    // 5. 多人协作开发， 无法硬性同意代码风格，从仓库pull回来的代码质量不能保证
    // 6. 部分功能开发是需要等后端服务接口提前完成

    // 主要解决的问题
    // 1. 传统语言或语法的弊端
    // 2. 无法直接使用模块化/组件化
    // 3. 大量，重复的机械化工作
    // 4. 代码风格统一， 质量保证
    // 5. 依赖后端接口支持
    // 6. 整体依赖后端项目
```

```js
    // 前段工程化
    // 一切以提高效率， 降低成本， 质量保证为目的的手段都属于工程化
    // 一切重复的工作都应该被工程化
    // 1.创建项目 --> 2.编码 --> 3.预览、测试 --> 4.提交 --> 5.部署
    // 1. 创建项目   --> 创建项目结构， 创建特定类型文件
    // 2. 编码       --> 格式化代码， 校验代码风格， 编译、构建、打包
    // 3. 预览、测试  --> Web Server/Mock , Live Reloading/HMR ， SourceMap
    // 4. 提交       --> Git Hooks , Lint-stage , 持续集成
    // 5. 部署       --> CI/CD , 自动发布
``` 

```js
    // 工程化 不等于 工具
    // 工具不是工程化的核心
    // 工程化是对项目整体的规划和架构， 工具是帮助把这种规划和架构落地的手段

    // 一些成熟的工程化集成
    // 1. create-react-app
    // 2. vue-cli
    // 3. angular-cli
    // 4. gatsby-cli
```

```js
    // 前段工程化由node驱动
    // 1.脚手架工具开发
    // 2.自动化构建系统
    // 3.模块化打包
    // 4.项目代码规范化
    // 5.自动化部署
```

## 1.脚手架工具开发

```js
    // 前段脚手架
    // 1. 脚手架的作用
    // 2. 常用脚手架工具
    // 3. 通用脚手架工具剖析
    // 4. 开发一款脚手架
```

### (1)脚手架的作用

```js
    // 脚手架 
    // 本质作用: 创建项目基础结构, 提供项目规范和约定
    // 相同的组织结构
    // 相同的开发范式
    // 相同的模块依赖
    // 相同的工具配置
    // 相同的基础代码

    // 示例: IDE 创建项目的过程就是一个脚手架的工作流程
```

### (2)常用的脚手架工具

```js
    // 1. 特定项目类型脚手架
    // React-app : create-react-app
    // vue.js : vue-cli
    // angular : angular-cli
    // 根据提供的信息创建对应的项目基础结构(文件及相关配置)

    // 2. Yeoman 为代表的通用脚手架工具
    // 根据一套模板生成一个对应的项目结构
    // 灵活, 易扩展

    // 3. Plop
    // 用来在项目开发过程中, 创建一些特定类型的文件, 例如创建一个组件/模块所需要的文件
```

### (3)通用脚手架工具剖析

#### a. Yeoman

```js
    // 更像是一个脚手架的运行平台
    // 优点:
    // 可以通过 yeoman 搭配不同的 generator 去创建任何类型的项目
    // 可以通过创建自己的 generator 去创建 自己的 yeoman 脚手架
    // 缺点:
    // 过于通用, 不够专注
```

```js
    // Yeoman 基本使用
    // 1. 安装 yeoman: yarn global add yo
    // 2. 找到对应项目类型的 generator: yarn global add generator-node
    // 3. 安装 generator : yo node
```

```js
    // Yeoman Sub Generator
    // 生成部分generator
    // 1. yo node:cli -> 生成一些 cli 命令需要的配置文件
    // 2. 可以将模块作为全局的命令行进行使用
    // 3. 本地模块使用 yarn link 链接到全局范围
    // 4. 通过模块名称运行 加进来的命令
    // 5. fed-e-task-02-01 --help
    // 6. 如果不成功 先给权限 sudo chmod -R 777 fed-e-task-02-01
    // 7. yarn 导入 文件
    // 8. 再执行

    // 并不是每一个 Generator 都提供了 子集的生成器, 需要通过官方文档进行明确
```

```js
    // 常规使用步骤
    // 1. 明确自己的需求
    // 2. 根据需求找到合适的 Generator
    // 3. 全局范围安装找到的 Generator
    // 4. 通过 yo 命令 运行对应的 Generator
    // 5. 通过命令行交互填写 选项
    // 6. 生成你所需要的项目结构
```

### (4)开发一款脚手架

基于 Yeoman 搭建自己的脚手架

```js
    // 自定义 Generator
```

```js
    // 创建 Generator 模块
    // Generator 本质上就是一个 NPM 模块
    // Generator 基本结构:
    // |- Generators/ ...............生成器目录
    // |    |- app/ .................默认生成器目录
    // |        |- index.js .........默认生成器实现
    // |    |- compoment/ ...........其他子生成器目录
    // |        |- index.js .........其他子生成器目录实现
    // |-package.json ...............模块包配置文件

    // 模块名称必须是 generator-<name> 模式
```

```js
    // 1. 生成一个 generator-sample 文件夹 mkdir generator-sample
    // 2. yarn init
    // 3. 安装 yeoman-generator 模块, 这个模块提供了生成器的基类, 提供了一些工具函数, 可以使得模块开发更加便捷 yarn add yeoman-generator
    // 4. 在 generator-sample 文件夹中 创建一个 generators 文件夹
    // 5. generators 文件夹下 创建一个 app 文件夹
    // 6, app 文件夹下创建一个 index.js 作为生成器默认实现
    // 7. index.js 作为 Generator 的 核心入口,
    // 8. 需要导出一个继承自 Yeoman Generator 的类型
    // 9. Yeoman Generator 在工作室会自动调用我们在此类型中定义的一些生命周期方法
    // 10. 我们在这些方法中可以通过调用父类的一些工具方法实现一些功能, 例如文件的写入
    const Generator = require('yeoman-generator')
    module.exports = class extends Generator {
        // 重写 Yeoman 方法, writing 会在生成文件阶段 自动调用
        writing() {
            // Yeoman 自动在生成文件阶段调用此方法
            // 我们这里尝试往项目目录中写入文件
            // 调用父类的 fs 模块(与 node fs 模块不同, 是一个高度封装的 file system 模块)
            this.fs.write(
                this.destinationPath('temp.txt'), // 自动获取生成项目目录下的文件路径
                Math.random().toString()
            )
        }
    }
    // 11. 通过 yarn link 方式把模块连接到全局范围, 使之成为全局模块包, yeoman 在工作时就可以找到该 generator 
    // 12. 通过 yo sample 方式 调用 generator
```

```js
    // 根据模板创建文件
    // 1. 在生成器目录下生成一个 templates 目录
    // 2. 在 templates 目录中放置模板文件
    // 3. 模板文件 内部可以使用 EJS 模板标记输出数据,例如: <%= title %> , 其他的 EJS 语法也支持, <% if (success) {%> 哈哈哈 <% } %> 
    // 4. 在writing 方法中可以使用 copyTpl 方法 复制模板文件
    const Generator = require('yeoman-generator')
    module.exports = class extends Generator {
        // 重写 Yeoman 方法, writing 会在生成文件阶段 自动调用
        writing() {
            // 通过模板方式写入文件到目标目录
            // 模板路径
            const templ = this.templatePath('foo.txt')
            // 输出目标路径
            const output = this.destinationPath('foo.txt');
            // 模板数据上下文
            const context = {title: 'hello motto', success: true};
            // copy 模板
            this.fs.copyTpl(templ, output, context);
        }
    }
    // 5. yarn link
    // 6. yo sample

    // 相对于手动创建每一个文件, 模板方式大大提高了效率, 特别是在文件比较多比较复杂的情况下
```

```js
    // 接受用户输入数据
    // 可以实现 generator 中的 prompting 方法 发起命令行交互 实现用户输入
    // prompting () 方法 Yeoman 在询问用户环节会自动调用此方法
    // 在此方法中可以调用父类的 prompt() 方法发出对用户的命令行 询问
    // 这个方法返回的是一个promise,
    // 在 prompt() 方法中接受一个数组参数, 每个元素都是一个问题对象
    // 问题对象包含四个属性 type (问题类型) name (问题名称) message (问题说明) default (默认值)
    // 在返回的promise 方法的 then 方法中 返回一个 answers 对象, 是对以上问题的回答, 可以挂载到 this 对象上, 以便在 writing 方法中调用
    const Generator = require('yeoman-generator')
    module.exports = class extends Generator {
        prompting() {
            return this.prompt([
                {
                    type: 'input', // 类型
                    name: 'name', // 名称
                    message: "your project name",
                    default: this.appname // appname 为项目生成目录名称
                },
                {
                    type: 'input', 
                    name: 'version', 
                    message: 'your project version',
                    default: '0.1.0'
                },
                {
                    type: "confirm",
                    name: 'printVersion',
                    message: 'need print version',
                    default: false
                }
            ]).then (answers => {
                // 当前问题接受完用户输入的结果
                // answers -> { name : user input name}
                // 挂载到 this 对象上, 以便于在 writing 中使用
                this.answers = answers
            })
        }
        // 重写 Yeoman 方法, writing 会在生成文件阶段 自动调用
        writing() {
            // 通过模板方式写入文件到目标目录
            // 模板路径
            const templ = this.templatePath('foo.txt')
            // 输出目标路径
            const output = this.destinationPath('foo.txt');
            // 模板数据上下文
            const context = this.answers;
            // copy 模板
            this.fs.copyTpl(templ, output, context);
        }
    }
```

```js
    // Vue Generator 案例
    // 1. 正常创建 generator 的目录结构和文件
    // 2. 将常用的文件及结构导入 templates 目录下
    // 3. 修改 模板文件中的 需要替换的内容 为 模板标记
    // 4. 在 writing() 中 将所有文件的相对路径组成 数组
    // 5. 循环遍历 templates 路径数组 copyTpl() 生成文件
```

```js
    // 发布 Generator 
    // 发布 npm 模块
    // npm publish 命令
    // yarn publish 命令

    // 1. echo 忽略不需要发布的文件
    // echo node_modules > .gitignore
    // 2. git init 初始化本地空仓库
    // 3. git status 查看本地仓库状态
    // 4. git add 添加文件
    // 5. git commit -m "somethings"  创建提交
    // 6. 创建一个远端仓库
    // 7. 同步至远端仓库
    // 8. 为远端仓库添加别名 git remote add origin https://...
    // 9. push 至远端仓库 git push -u origin master
    // 10. yarn publish 发布 至 npm 仓库
    // 11. 注册npm 用户名和密码
    // 12. 如果使用了 淘宝的 npm 镜像, 因为淘宝镜像属于只读镜像, 会导致发布错误
    // 13. 修改本地镜像配置, 或者publish 追加 registry 配置
    // 14. yarn publish --registry=https://registry.yarnpkg.com
    // 15. 发布成功后 可以去 npm 官网查看, 其后可以通过 npm 和 yarn 安装执行
```

```js
    // Plop 一款小而美的脚手架工具
    // 主要用于创建项目中特定类型文件的小工具
    // 类似于 sub-generator
    // 一般不会独立使用, 一般集成到项目中, 用来自动化的创建同类型的项目文件
```

```js
    // Plop 的具体使用

    // 1. 文件目录下 安装 plop 模块 yarn add plop --dev 
    // 2. 根目录下创建一个 plopfile.js 文件 作为plop 入口文件
    // 3. plopfile.js 中需要导出一个函数, 此函数接收一个 plop 对象, 对象中包含一系列的工具函数, 用于创建生成器任务
    module.exports = plop => {
        plop.setGenerator('component', // 生成器名称
        {
            description: 'create a component', // 生成器描述
            prompts: [
                {
                    type: 'input',
                    name: 'name',
                    message: 'component name',
                    default: 'MyComponent'
                }
            ], // 命令行问题
            actions: [
                {
                    type: 'add', // 类型 add 添加全新文件
                    path: 'src/components/{{name}}/{{name}}.js', // 指定目标路径
                    templateFile: '', // 执行模板路径
                }
            ], // 生成器完成命令行输入之后要执行的动作
        })
    }
    // 4. 在根目录下 创建一个 plop-templates 文件夹盛放模板文件,
    // 5. 可以通过 .hbs 模板引擎的方式去创建模板文件, 允许使用插值的方式生成
    import react from 'react';
    export default () => () {
        <div className-"{{name}}">
            <h1>{{name}} components</h1>
        </div>
    }
    // yarn plop component(生成器名称)
```

```js
    // Plop 使用总结
    // 1. 将 plop 模块作为项目开发依赖安装
    // 2. 在项目根目录下创建一个 plopfile.js 文件
    // 3. 在 plopfile.js 文件中定义脚手架任务
    // 4. 编写用于生成特定类型文件的模板
    // 5. 通过 Plop 提供的 CLI 运行脚手架任务
```

```js
    // 脚手架的工作原理
    // 脚手架 本质上就是一个 cli 应用
    // 1. yarn init 创建一个带 package.json 的项目文件夹 => yarn init
    // 2. 创建一个 cli.js 文件 
    // 3. 在 package.json 文件中 指定 bin 为 cli.js => bin: 'cli.js'
    // 4. cli.js 必须指定文件头 => #!/usr/bin/env node
    // 5. 如果是 linux 和 macOS 系统还需要修改 cli.js 文件读写权限为 755 => chmod 755 cli.js
    // 6. 创建一个 templates 文件夹安放 模板文件
    // 7. 脚手架工作流程: {
        // 1. 通过命令行交互询问用户问题
        // 2. 根据用户回答的结果生成文件 需要用到 inquirer 模块, yarn add inquirer
        // 3. 根据用户反馈结果生成文件
    // }
    const inquirer = require('inquirer');
    const fs = require('fs');
    const path = require('path'); // 当前目录
    const ejs = require('ejs')

    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Project name?'
        }
    ]).then(answers => {
        console.log(answers);
        // 根据问题答案生成文件
        // 模板目录 当前路径 +  当前文件夹名称 + templates  == templates 文件夹所在路径
        const tmplDir = path.join(__dirname, 'templates');
        // 目标目录
        const destDir = process.cwd(); // 当前命令行在哪个文件夹内就是哪个文件的目录
        // 将模板下的文件全部转换到目标目录
        fs.readdir(tmplDir, (err, files) => {
            if (err) throw err;
            files.forEach(file => {
                console.log(file);
                // file 是相对于templates的相对路径
                // 通过模板引擎渲染路径所对应的文件
                // 安装 ejs 模板引擎 yarn add ejs
                ejs.renderFile(path.join(tmplDir, file), answers, (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    // 将渲染结果 写入 目标文件路径下的文件
                    fs.writeFileSync(path.join(destDir, file), result);
                })
            })
        })
    })
```
## 2.自动化构建系统

```js
    // 一切重复工作本应自动化
    // 开发阶段的源代码 => 自动化构建 => 生产代码 (自动化构建工作流)
    // 作用: 尽可能脱离运行环境兼容带来的问题, 去在开发阶段使用提高效率的语法,规范和标准
    // 典型运用场景: 开发网页应用时, 使用 ECMAScript 最新标准去提高编码效率和质量, Sass 增强CSS的可编程性, 模板引擎 去抽象 页面中重复的 html, 这些用法大多都不被浏览器直接支持.
    // 自动化构建工具, 将这些不被支持的特性, 转换成能够直接运行的代码
```

## 3.模块化打包

```js

```

### (1). Grunt

```js
    // 基本使用
    // 1. yarn init
    // 2. yarn add grunt
    // 3. 创建一个 gruntfile.js 文件 -> grunt 入口文件, 用于定义一些需要 grunt 自动执行的任务, 需要导出一个函数, 函数接受一个 grunt 的形参, 内部提供一些创建任务时可以用到的 API
    module.exports = grunt => {
        // 注册任务 (任务名称, (可选, 如果第二参数是字符串, 会成为任务描述, yarn grunt -help可查看) , 任务函数)
        grunt.registerTask("foo", () => {
            console.log('hello grunt');
        })
        grunt.registerTask('bar', 'bar 任务描述', () => {
            console.log('hello, bar task')
        })
        // 任务名称为 default , 会成为默认任务, yarn grunt 就会自动调用 default 任务
        // 一般用default 映射一些其他任务
        // 第二个参数传入 其他任务名称数组, 将会自动执行任务组
        grunt.registerTask('default', ['foo','bar']);
        // grunt 异步任务
        // console.log 没有执行
        // grunt 默认支持同步模式, 如果要异步操作, 要用this 的 async 方法 得到一个回调函数, 在异步操作执行完成过后, 调用该函数, 标识任务完成
        grunt.registerTask('async-task', ()=> {
            setTimeout(() => {
                console.log('async task working');
            }, 1000);
        })
        grunt.registerTask('async-task-2', function() {
            const done = this.async();
            setTimeout(() => {
                console.log('async task working')
                done()
            }, 1000);
        })
    }
    // 4. yarn grunt foo
```

```js
    // grunt 标记任务失败
    // 1. 可以通过return false来标记是失败
    // 2. 如果任务是在一个列表中, 会导致后续任务不再执行
    grunt.registerTask('bad-working', () => {
        console.log('bad working');
        return false;
    })
    grunt.registerTask('default',['foo', 'bad-working', 'bar'])
    // 可以在 yarn grunt default 语句后添加 --force 
    // yarn grunt default --force 会强制执行所有任务, 忽略有错误任务的情况

    // 异步任务
    // 在异步回调函数指定一个 false 实参, 就可以标记失败
    grunt.registerTask('bad-async-task', function() {
        const done = this.async();
        setTimeout(() => {
            console.log('bad-async-task working')
            done(false)
        }, 1000);
    })
```

```js
    // grunt 配置选项方法, 接受一个对象形式的参数, 对象的键, 一般和任务名称保持一致, 值可以是任意类型属性
    grunt.initConfig({
        testInitConfig: 'test-initConfig',
        testinitconfig2: {
            bar: 123
        }
    })
    // 通过 grunt.config 可以获取对应的配置
    grunt.registerTask("testInitConfig",() => {
        console.log(grunt.config('testInitConfig'));
    })
    // 如果config 对象的 值 是一个对象, config 方法支持高级用法
    grunt.registerTask("testinitconfig2", () => {
        console.log(grunt.config('testinitconfig2.bar'))
        var configObj = grunt.config('testinitconfig2');
        console.log(configObj.bar);
    })
```

```js
    // grunt 多目标任务
    // 子任务的概念
    // 多目标任务模式, 可以让任务根据配置形成多个子任务
    // 多目标任务需要配置目标, initConfig() 方法
    // config 对象中指定一个 和 任务名称同名的属性
    // build 对应一个对象
    // 对象中每个属性名字 就是 目标任务名称, options 除外, options 指定的信息 会作为任务的配置选项出现
    // 如果要运行指定目标 yarn grunt build:css
    // 在任务函数中 可以通过 this 拿到当前执行的目标的名称 和 配置数据
    grunt.initConfig({
        build: {
            options: {
                foo: 'bar',
                bar: 'testBar'
            },
            css: '1',
            js: '2',
            test: { // 目标中也可以加配置选项, 会覆盖掉对象中的 options
                options: {
                    foo: 'baz'
                }
            }
        }
    })
    grunt.registerMultiTask('build', function(){
        console.log('build task')
        console.log(`target: ${this.target} , data: ${this.data}`);
        // 拿到配置选项对象
        console.log(this.options());
    })
```

```js
    // grunt 插件的使用
    // 插件
    // 1. 先安装 eg. yarn add grunt-contrib-clean
    // 2. 再引入 eg. grunt.loadNpmTask('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-clean')
    // 一般 grunt 插件命名 grunt-contrib-XXX
    // 3. initConfig 中 添加 对应目标的配置选项
    // 4. 执行 yarn grunt clean:tempAppjs 删除 temp文件目录下 app.js文件
    grunt.initConfig({
        clean:{
            tempAppjs: 'temp/app.js', // app.js
            tempTxt: 'temp/*.txt', // 所有.txt 文件
            tempAll: "temp/**" // 所有子目录以及子目录下的文件
        }
    })
```

```js
    // grunt 常用插件及总结
```

### (2). Glup

### (3). FIS

## 4.项目代码规范化

```js

```

## 自动化部署

```js

```