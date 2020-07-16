const Generator = require('yeoman-generator');

module.exports = class extends Generator{
    prompting() {
        return this.prompt([
            {
                type: 'input', // 类型
                name: 'projectName', // 名称
                message: "your project name",
                default: this.appname // appname 为项目生成目录名称
            },
            {
                type: 'input', 
                name: 'versionCode', 
                message: 'your project version',
                default: '0.1.0'
            },
            {
                type: 'input', // 类型
                name: 'mainFile', // 名称
                message: "your main file",
                default: 'main.js' // appname 为项目生成目录名称
            },
            {
                type: 'input', 
                name: 'license', 
                message: 'your license',
                default: 'MIT'
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
    writing() {
        // 把每一文件都通过模板转换到目标路径
        const templates = [
            'src/utils/request.js',
            'src/views/home.html',
            'package.json'
        ];
        templates.forEach(item => {
            // item => 每个文件路径
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}