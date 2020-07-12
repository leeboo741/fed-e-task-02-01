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

```js
    // NPM Script
    // 定义一些与项目开发过程有关的脚本命令, 跟随项目一起维护, 方便后续使用
    // package.json -> scripts -> 'build' : 'sass scss/main.scss css/style.css'
    // yarn build
    // 是实现自动化构建工作流的最简方式
```

```js
    // 自动化构建示例
    // yarn add browser -sync --dev
    // package.json -> scripts -> 'server' : 'browser -sync .'
    // yarn server

    // 使用 NPM Script 钩子机制, 定义一个 preServe

    // scripts : {
    //     'build' : 'sass scss/main.scss css/style.css',
    //     'preserve': 'yarn build',
    //     'serve': 'browser -sync .'
    // }
```

```js
    // 添加一个 --watch 参数, 监听文件变化
    // 但是会阻塞执行后面的任务
    // yarn add npm-run-all 允许文件同时执行
    
    // scripts : {
    //     'build' : 'sass scss/main.scss css/style.css --watch',
    //     'serve': 'browser -sync .  --files \"css/*.css\"'
    //     'start': 'run-p build serve'
    // }

    // yarn start -> 同时执行build 和 start, 并监听 watch 变化

    // --files \"css/*.css\" 监听 css/*.css 文件的变化
```

```js
    // NPM Scripts 解决一部分简单的自动化构建任务, 复杂任务比较吃力

    // 常用的自动化构建工具
    // Grunt | Gulp | FIS

    // Grunt 功能完善, 复杂, 但是构建过程基于临时文件来完成, 使用临时构建速度偏慢,
    // 对于大型项目来说, 构建太慢
    // Gulp 基于内存实现, 速度快, 默认支持同时执行多个任务, 使用方式更加易懂, 目前最流行的构建系统
    // FIS 微内核 更像一种捆绑套餐, 把项目中典型需求集成到内部, 大而全

    // 初学者 FIS 
    // 要求灵活多变 Grunt Gulp
```

### (1). Grunt

```js
    // Grunt 基本退出舞台, 目的: 能看懂Grunt 就行, 基本不会使用了
```

```js
    // Grunt 的基本使用
    // 1. yarn init
    // 2. yarn add grunt
    // 3. 根目录创建一个 gruntfile.js 的文件作为 grunt 的入口文件, 用于定义一些需要grunt 自动执行的任务
    // 4. 需要导出一个函数
    // 5. 此函数接收一个 grunt 的形参, 内部提供一些创建任务时可以用到的 API
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

    // 1. grunt-sass
    //  (1)yarn add grunt-sass sass --dev 安装
    //  (2)loadNpmTasks('grunt-sass') 导入
    //  (3)配置输入和输出路径
    //  (4)配置implmentation
    //  (5)配置是否生成sourceMap
    const sass = require('sass')
    const loadGruntTasks = require('load-grunt-tasks');
    module.exports = grunt => {
        grunt.initConfig({
            sass: {
                options: {
                    sourceMap: true,
                    implementation: sass
                },
                main: {
                    files: {
                        'dist/css/main.css': 'src/scss/main.scss' // 目标路径: 输入路径
                    } // 指定输入输出路径
                } // 目标
            } // 配置目标
        })   
        // grunt.loadNpmTasks('grunt-sass'); // 载入 grunt-sass 任务 (多任务)
        loadGruntTasks(grunt) // 会自动加载所有的 grunt 插件
    }
    // 通过grunt-sass 官方文档查看更多选项

    // 2. 如果引入很多模块, loadNpmTasks() 使用很多, 可以使用 load-grunt-tasks 模块来简化步骤
    // (1)yarn add load-grunt-tasks --dev
    // (2)loadGruntTasks(grunt); // 加载所有 grunt 插件中的任务

    // 3. grunt-babel 编译ES6语法 ES6语法常用编译器 babel
    // babel 负责转换 ES 的最新特性, 最新特性 打包成了 preset
    // 导入 preset-env 会默认按 最新特性进行 js 转换 ES6 => ES5
    // (1)yarn add grunt-babel @babel/core @babel/preset-env --dev // 需要同步安装 babel 核心语法 和 babel 预设

    const sass = require('sass')
    const loadGruntTasks = require('load-grunt-tasks')
    module.exports = grunt => {
        grunt.initConfig({
            sass: {
                options: {
                    sourceMap: true,
                    implementation: sass
                },
                main: {
                    files: {
                        'dist/css/main.css': 'src/scss/main.scss' // 目标路径: 输入路径
                    } // 指定输入输出路径
                }// 目标
            
            }, // 配置目标
            babel: {
                options: {
                    presets: ["@babel/preset-env"],
                    sourceMap: true,
                },
                main: {
                    files: {
                        "dist/js/app.js" : "src/js/app.js"
                    }
                }
            }
        })   
        // grunt.loadNpmTasks('grunt-sass'); // 载入 grunt-sass 任务 (多任务)
        
        loadGruntTasks(grunt); // 会自动加载所有的 grunt 插件中的任务
    } 

    // 4. 当文件修改完成后 自动编译 grunt-contrib-watch --dev
    // (1) yarn add grunt-contrib-watch --dev
    // (2) 配置文件
    // (3) yarn grunt watch

    // 5. 一般而言会先给 watch 做个映射
    // grunt.registerTask('default', ['sass','babel', 'watch'])
```

### (2). Glup

```js
    // 当前主流自动构建工具  重点
```

```js
    // gulp 基本使用
    // 高效, 易用
    
    // 1. yarn init
    // 2. yarn add gulp 
    // 安装同时会安装一个 gulp-cli , 可以后续根据 使用 gulp 命令 运行构建任务
    // 3. 创建一个 gulpfile.js 文件作为 gulp 入口
    // gulp 入口文件
    // 这个文件运行在 nodejs 中
    // 所以可以使用 commonjs 规范
    // 定义构建任务方式 -> 通过导出函数成员的方式定义

    // 最新 gulp 取消了同步代码模式, 约定所有任务都是异步任务  所以需要 手动调用回调函数 done() 来标识任务完成

    // yarn gulp foo
    exports.foo = done => {
        console.log('foo task working')
        done()
    }

    // 默认任务 yarn gulp
    exports.default = done => {
        console.log('default task working')
        done()
    }

    // gulp 4.0 以前, 需要通过 gulp 模块里的方法去实现 注册任务
    const gulp = require("gulp");
    gulp.task('bar', done => {
        console.log('bar task working');
        done()
    })
```

```js
    // gulp 组合任务
    // 创建 组合任务 (并行任务, 串行任务)
    // 通过 gulp 提供的 series, parallel 两个 api 可以方便的实现 组合任务
    // 组合任务
    const {series, parallel} = require('gulp');
    const task1 = done => {
        setTimeout(() => {
            console.log("task1 working");
            done();
        }, 1000);
    }
    const task2 = done => {
        setTimeout(() => {
            console.log("task2 working");
            done()
        }, 1000);
    }
    const task3 = done => {
        setTimeout(() => {
            console.log('task3 working');
            done();
        }, 1000);
    }

    exports.seriesTask = series(task1, task2, task3); // 按顺序 依次执行 串行
    exports.parallelTask = parallel(task1, task2, task3); // 同步执行 并行
```

```js
    // gulp 异步任务
    // 异步任务的三种方式
    // 1. 回调函数 方式
    exports.callback = done => {
        console.log('callback task');
        done()
    }
    exports.callback_error = done => {
        console.log('callback_error taks');
        done(new Error('task failed'));
    }
    // 这里的回调函数和node中的回调函数是统一标准, 错误优先, 当我们想要在执行过成中抛出一个错误, 阻止后续任务继续执行, 给回调函数第一个参数指定为一个错误对象就可以了

    // 2. Promise 方式
    // 在任务执行函数中 return 一个 promise 对象
    exports.promiseTask = () => {
        console.log('promise task');
        return Promise.resolve();
    }
    exports.promiseRejectTask = () => {
        console.log('promise reject task');
        return Promise.reject(new Error('task failed'));
    }

    // 3. Async / Await
    // node 环境 8 以上 恩施 新标准
    const fs = require('fs')
    const timeout = time => {
        return new Promise(resolve => {
            setTimeout(resolve, time);
        })
    }
    exports.async = async () => {
        await timeout(1000),
        console.log('async task');
    }
    
    // 4. Steam
    exports.stream = done => {
        const readStream = fs.createReadStream('package.json');
        const writeStream = fs.createWriteStream('temp.txt');
        readStream.pipe(writeStream); // 文件复制

        // return readStream;
        // 约等于以下操作, gulp 只是注册了一个 end 事件
        readStream.on('end', ()  => {
            done();
        })
    }

```

```js
    // 构建过程核心工作原理
    // 读取文件 -> 转换 -> 写入目标位置
    // 读取流 -> 转换流 -> 写入流
    // gulp => The streaming build system 基于流的构建系统
    const fs = require("fs")
    const {Transform} = require("stream")
    exports.default = () => {
        // 文件读取流
        const read = fs.createReadStream('test.css');
        // 文件写入流
        const write = fs.createWriteStream('test.min.css');
        // 文件转换流
        const transform = new Transform({
            transform: (chunk, encoding, callback) => {
                // 转换过程是实现
                // chunk => 读取流中 读取到的内容 (buffer)
                const input = chunk.toString();
                const output = input.replace(/\s+/g, "").replace(/\/*.+>\*\//g, ""); // 剔除空格和注释
                callback(null, output); // 错误优先函数, 第一个是错误, 没有可以不填
            }
        })

        // 把读取出来的流导入写入流
        read
        .pipe(transform) // 先转成 转换流
        .pipe(write); // 在转成 写入流

        return read; // return 出去 gulp 可以根据流的状态 去判定 任务是否完成
    }
```

```js
    // gulp 文件操作 API | 插件的使用

    // gulp 自带的 读取流 和 写入流 生成器
    const {src, dest} = require('gulp')

    // 文件转换通过插件的方式实现
    // 例如 css 文件的压缩
    const clearCss = require("gulp-clean-css");
    const rename = require('gulp-rename');

    exports.default = () => {
        // return src('src/normalize.css').pipe(dest("dist"))
        // 相比于原始api gulp模块提供的api 更加强大, 可以使用通配符
        // return src('src/*.css').pipe(dest("dist"));
        // 文件的转换通过插件的方式实现
        return src("src/*.css")
                .pipe(clearCss())
                .pipe(rename({extname: '.min.css'}))
                .pipe(dest('dist'))
    }
```

```js
    // gulp 自动化构建案例

    // 1. 样式文件编译
    //  (1) sass 文件  gulp-sass
    const { src, dest } = require('gulp');
    const sass = require('gulp-sass');
    const style = () => {
        return src('src/assets/styles/*.scss', { base: 'src' }) // 指定 base 之后 src 之后的路径会原样复制
                .pipe(sass({ outputStyle: 'expanded'})) // expanded 代码完全展开 // sass 插件 默认不会转换 _作为文件名开头的文件
                .pipe(dest('dist'));
    }
    module.exports={
        style
    }

    // 2, 脚本文件编译
    //  (1) gulp-babel yarn add gulp-babel @babel/core @babel/preset-env --dev
    const { src, dest } = require('gulp');
    const babel = require('gulp-babel')
    const script = () => {
        return src('src/assets/scripts/*.js', {base: 'src'})
                .pipe(babel([ presets: ['@babel/preset-env']]))
                .pipe(dest('dist'))
    }
    module.exports={
        script
    }

    // 3. 页面模板编译
    //  示例使用了 swig 页面模板引擎  所以解析使用对应的 gulp-swig
    const swig = require('gulp-swig')
    const data = {
        menus: [
            {
            name: 'Home',
            icon: 'aperture',
            link: 'index.html'
            },
            {
            name: 'Features',
            link: 'features.html'
            },
            {
            name: 'About',
            link: 'about.html'
            },
            {
            name: 'Contact',
            link: '#',
            children: [
                {
                name: 'Twitter',
                link: 'https://twitter.com/w_zce'
                },
                {
                name: 'About',
                link: 'https://weibo.com/zceme'
                },
                {
                name: 'divider'
                },
                {
                name: 'About',
                link: 'https://github.com/zce'
                }
            ]
            }
        ],
        pkg: require('./package.json'),
        date: new Date()
    }
    const page =() => {
        return src('src/*.html', { base: 'src'})
                .pipe(swig({ data })) // 引擎中变动的量 可以在此处指明, 从而生成的时候会一并将值生成
                .pipe(dest('dist'))
    }

    // 4. 组合任务  将三大任务统一执行
    const { src, dest, parallel} = require("gulp");
    const compile = paraller(style, script, page);
    module.exports={
        compile
    }

    // 5. 字体文件 和 图片文件的编译处理
    // gulp-imagemin --dev
    const imageMin = require('gulp-imagemin')
    const image = () => {
        return src('src/assets/images/**',{base: 'src'})
                .pipe(imagemin())
                .pipe(dest('dist'))
    }
    const font = () => {
        return src('src/assets/fonts/*', {base : "src"});
                .pipe(imagemin())
                .pipe(dest('dist'))
    }
    const compile = paraller(style, script, page, image, font)

    // 6. 其他文件 及 文件清除

    const extra = () => {
        return src('public/**',{base: 'public'})
                .pipe(dest('dist'))
    }
    const build = parallel (compile, extra);

    module.exports={
        compile,
        build
    }

    yarn add del --dev // 安装删除插件

    const del = require('del');

    const clean = () => {
        return del(['dist']);
    }

    const build = series(clean, paraller(compile,extra));

    module.exports={
        build,
    }

    // 7. 自动加载插件
    // gulp-load-plugins
    const loadPlugins = require('gulp-load-plugins')
    const plugins = loadPlugins();
    // 所有包都会成为 plugins 对象下的一个属性
    // plugins.sass
    // plugins.imagemin

    // 8. 热更新开发服务器
    // browser-sync 模块 yarn add browser-sync --dev
    // 支持热更新

    const browserSync = require('browser-sync'); // 模块引用
    const bs = browserSync.create(); // 创建一个服务器

    const server = () => {
        bs.init({
            notify: false, // 是否有提示, 默认 true
            port: 2030, // 端口号, 默认3000
            open: false, // 是否自动打开浏览器, 默认 true
            files: 'dist/**', // browserSync 启动后 监听的路径 通配符
            serve r: {
                baseDir: 'dist',
                routes: {
                    '/node_modules' : 'node_modules'
                }, // 路径 优先度 高于 baseDir, 用于配置一些特殊路径文件, 先查routes -> 再查 baseDir
            } // 网站根目录
        })
    }

    module.exports={
        compile,
        build
        server,
    }

    // 9. 监听 src 文件夹变化
    const {src, dest, series, parallel, watch} = require('gulp'); // watch 自动监听一个文件路径的通配符, 根据这些文件的变化, 决定是否要重新执行某一任务
    const server = () => {
        watch('src/assets/styles/*.scss', style);
        watch('src/assets/scripts/*.js', script);
        watch('src/assets/images/**', image);
        watch('src/assets/fonts/**', font);
        watch('src/*.html*', page);
        watch('public/**', extra);
        bs.init({
            notify: false, // 是否有提示, 默认 true
            port: 2030, // 端口号, 默认3000
            open: false, // 是否自动打开浏览器, 默认 true
            files: 'dist/**', // browserSync 启动后 监听的路径 通配符
            serve r: {
                baseDir: 'dist',
                routes: {
                    '/node_modules' : 'node_modules'
                }, // 路径 优先度 高于 baseDir, 用于配置一些特殊路径文件, 先查routes -> 再查 baseDir
            } // 网站根目录
        })
    }
    // 页面的自动刷新 也可能因为swig 模板引擎的缓存机制导致页面不刷新, 此时需要额外奖swig选项中的cache设置为false
    const page = () => {
        return src('src/*.html', { base: 'src' })
                .pipe(plugins.swig({ data, defaults: { cache: false } })) // 防止模板缓存导致页面不能及时更新
                .pipe(dest('temp'))
                .pipe(bs.reload({ stream: true }))
    }

    // 10. 构建优化
    // image font 等 文件 只做了压缩处理, 不需要再构建时自动监听构建, 可以在bs 中再指定一个目录用于监听 src 中的 image 和 font 目录, 不参与 开发过程构建, 只在发布上线时 构建
    const server = () => {
        watch('src/assets/styles/*.scss', style);
        watch('src/assets/scripts/*.js', script);
        watch('src/*.html*', page);
        // watch('src/assets/images/**', image);
        // watch('src/assets/fonts/**', font);
        // watch('public/**', extra);
        watch([
            'src/assets/images/**',
            'src/assets/fonts/**',
            'public/**'
        ], bs.reload); // 不再监听图片,字体和公共文件的变化而去构建, 可以监听 src 中的资源变化, 再请求bs 重新请求资源, 从而获取到最新文件资源
        bs.init({ 
            notify: false, // 是否有提示, 默认 true
            port: 2030, // 端口号, 默认3000
            open: false, // 是否自动打开浏览器, 默认 true
            files: 'dist/**', // browserSync 启动后 监听的路径 通配符
            serve r: {
                baseDir: ['dist', 'src', 'public' ], // 当一个请求出现后, 会从头开始往后匹配, 一直匹配到为止, css/js/html 会在 dist 中匹配到, image/font 会到src 中匹配到, 因为没有构建到 dist 中, 减少一个构建, 提高一部分构建效率
                routes: {
                    '/node_modules' : 'node_modules'
                }, // 路径 优先度 高于 baseDir, 用于配置一些特殊路径文件, 先查routes -> 再查 baseDir
            } // 网站根目录
        })
    }

    const compile = parallel(style, script, page); // 删除了image和font 任务, 不在开发是构建 image和 font 文件

    const build = series(clean, parallel(compile, image, font, extra)); // 完整构建, 准备上线

    const develop = series(compile, serve); // 开发模式 构建 + 开启测试服务器

    module.exports={
        compile, // 构建
        build, // 上线模式
        develop, // 开发模式
    }


    // 11. useref插件 -> 依赖文件引用处理
    // yarn add grup-useref --dev
    const useref = () => {
        return src('dist/*.html', { base: 'dist'})
                .pipe(plugins.useref({'searchPath' : ['dist', '.' ]}))
                .pipe(dest('dist'))
    }
    module.exports = {
        compile, // 构建
        build, // 上线模式
        develop, // 开发模式
        useref, // 处理文件引用 不能正常引用的问题
    }

    // 12. 分别压缩 依赖文件的 html/css/js
    const useref = () => {
        return src('dist/*.html', { base: 'dist'})
                .pipe(plugins.useref({'searchPath' : ['dist', '.' ]}))
                // html js css
                // gulp-htmlmin / gulp-uglify / gulp-clean-css
                // 需要判断, 安装 gulp-if 插件
                .pipe(plugins.if(/\.js$/,plugins.uglify())) // 判断是否是已 .js结尾 执行js压缩
                .pipe(plugins.if(/\.css$/,plugins.cleanCss())) // 判断是否是已 .css结尾, 执行css压缩
                .pipe(plugins.if(/\.html$/,plugins.htmlmin({
                    collapseWhitespace: true, // 折叠空白字符
                    minifyCSS: true, // 压缩css代码
                    minifyJS: true, // 压缩JS代码
                    // 移除注释
                    // 移除空白文档
                    // 去文档中自己找方法吧
                }))) // 判断是否是已 .html结尾, 执行html压缩 // 默认只执行空格的删除, 如果想删除换行符之类的, 需要另外指定collapseWhitespace: true
                // .pipe(dest('dist')) // 如果还是写入 dist 因为是从dist读取流中再写入dist写入流, 会造成读写冲突, 所以先写入另外一个文件夹
                .pipe(dest('release'))
    }
    module.exports = {
        compile, // 构建
        build, // 上线模式
        develop, // 开发模式
        useref, // 处理文件引用 不能正常引用的问题
    }

    // 13. 重新规划构建结构
    // useref 打破了 之前的文件结构, 需要重新规划, 创建一个临时文件夹来接受第一次转换的文件
    const clean = () => {
        return del(['dist', 'temp']);
    }
    const style = () => {
        return src('src/assets/styles/*.scss', {base : 'src'})
                .pipe(plugins.sass({
                    outputStyle: 'expended'
                }))
                .pipe(dest('temp'))
                .pipe(bs.reload({ 
                    stream: true
                })) // bs 载入 stream 流的方式执行
    }
    const script = () => {
        return src('src/assets/script/*.js', {base : 'src'})
                .pipe(plugins.babel({
                    presets: ['@babel/preset-env']
                }))
                .pipe(dest('temp'))
                .pipe(bs.reload({
                    stream: true
                }))
    }
    const page = () => {
        return src('src/*.html', {base: 'src'})
                .pipe(plugins.swig({
                    data
                }))
                .pipe(dest('temp'))
                .pipe(bs.reload({
                    stream: true
                }))
    }
    const image = () => {
        // 不改, 开发构建不受useref 影响, 所以不需要移动到临时文件夹 temp
    }

    const font = () => {
        // 不改, 开发构建不受useref 影响, 所以不需要移动到临时文件夹 temp
    }
    const extra = () => {
        // 不改, 开发构建不受useref 影响, 所以不需要移动到临时文件夹 temp
    }
    const useref = () => {
        return src('temp/*.html', {base : 'temp'})
                .pipe(plugins.useref({
                    searchPath: ['temp', '.']
                }))
                .pipe(plugins.if(/\.js$/, plugins.uglify()))
                .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
                .pipe(plugins.if(/\.html$/, plugins.htmlmin({
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                })))
                .pipe(dest('dist'))
    }
    const server = () => {
        watch('src/assets/styles/*.scss', style);
        watch('src/assets/scripts/*.js', script);
        watch('src/*.html*', page);
        // watch('src/assets/images/**', image);
        // watch('src/assets/fonts/**', font);
        // watch('public/**', extra);
        watch([
            'src/assets/images/**',
            'src/assets/fonts/**',
            'public/**'
        ], bs.reload); // 不再监听图片,字体和公共文件的变化而去构建, 可以监听 src 中的资源变化, 再请求bs 重新请求资源, 从而获取到最新文件资源
        bs.init({ 
            notify: false, // 是否有提示, 默认 true
            port: 2030, // 端口号, 默认3000
            open: false, // 是否自动打开浏览器, 默认 true
            files: 'dist/**', // browserSync 启动后 监听的路径 通配符
            serve r: {
                baseDir: ['temp', 'src', 'public' ], // 当一个请求出现后, 会从头开始往后匹配, 一直匹配到为止, css/js/html 会在 dist 中匹配到, image/font 会到src 中匹配到, 因为没有构建到 dist 中, 减少一个构建, 提高一部分构建效率
                routes: {
                    '/node_modules' : 'node_modules'
                }, // 路径 优先度 高于 baseDir, 用于配置一些特殊路径文件, 先查routes -> 再查 baseDir
            } // 网站根目录
        })
    }
    const compile = parallel(style, script, page);
    const build = series(
        clean, 
        parallel(
            series(compile, useref),
            image,
            font, 
            extra
        )
    )
    const develop = series(compile, server)
    module.exports={

    }

    // 14. gulp 补充

    // leader 设计 构建流程
    // 回答 需要什么构建流程
    // 回答 需要构建流程怎么样的执行顺序
    // 回答 暴露什么 构建方法 --> clean build develop
    // 还可以把这三个任务 提升到 package.json 中
    // scripts: {
    //     "clean" : "gulp clean",
    //     "build" : "gulp build",
    //     "develop" : "gulp develop",
    // }
    // 后续可以直接 通过 yarn clean 来调用 yarn gulp clean 任务

    // gitignore 文件中 添加对生成文件的忽略 例如 dist 和 temp 文件夹
```

### (3). FIS

```js
    // 基本使用 
    // 高度集成
    // yarn global add fis3
    // fis3 release 或者 fis3 release -d output
    // fis-cong.js
    // fis.match(*.{js,scss,png})
```


### (4). 封装 自动化构建工作流 (基于 gulp)

```js
    // gulpfile + gulp = 构建工作流
    // gulpfile + gulp-cli = 
```

```js
    // 提取gulpfile
    // 写好的工作流 yarn link
    // 需要用到工作流的地方 yarn link (工作流名称)
    // 会将工作流导入到项目中.
    // 运行gulp 开放出来的方法
```

```js
    // 解决模块中的问题
    // 工作流读取项目中的数据, 约定大于配置的办法, 在项目中约定一个配置文件, 由工作流读取配置文件, 获取项目中的数据
    const cwd = process.cwd(); // 返回当前命令行所在的工作目录 -> 项目所在目录
    let config = {
        // default config
    }; 
    try {
        const loadConfig = require(`${cwd}/pages.config.js`);
        config = Object.assign({}, config, loadConfig); // 合并default  和 读取到的config
    } catch(e) {

    }

    // babel 读取不到 可以在工作流中用到的地方换成 require  让其向上查找
```

```js
    // 抽象路径配置
    // 在config 中 默认 src/ dist/ temp/ 等目录
    // 在项目中可以在 pages.config.js 等 文件中 覆盖工作流的路径, 灵活配置.
```

```js
    // 包装 gulp cli

    // 工作流中创建 bin/zce-pages.js 文件 作为 cli 入口
    // 在 package.json 中 创建 "bin": "bin/zce-pages.js"
    // cli 入口 #!usr/bin/env node
    // 修改权限 chmod 755 zce-pages.js
    // yarn link

```

```js
    // 发布并使用模块

```

```js
    // 梳理
    // github.com/zce/x-pages
```

## 3.模块化打包

```js

```

## 4.项目代码规范化

```js

```

## 自动化部署

```js

```