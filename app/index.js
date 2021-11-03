const Generator = require('yeoman-generator')
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        chalk.green('欢迎使用中欧it前端vue脚手架')
      )
    );

    return this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: '请输入项目名字',
        default: 'default-name'
      },
      {
        type: 'input',
        name: 'name',
        message: '请输入作者名字',
        default: 'nobody'
      }
    ])
      .then((answers) => {
        this.props = answers
      })
  }
  writing() {
    this.fs.copyTpl(
      this.sourceRoot(),
      this.destinationRoot(this.props.projectName),
    );
    const specialFiles = [
      '.browserslistrc',
      '.editorconfig',
      '.env.development',
      '.env.production',
      '.env.staging',
      '.gitignore',
      '.postcssrc.js',
      '.prettierrc',
      '.eslintrc.js',
      '.eslintignore'
    ]

    specialFiles.forEach((item) => {
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item)
      )
    })
  }
  configuring() {
    const { projectName, name } = this.props;

    const packageSettings = {
      name: projectName,
      version: '0.0.1',
      description: '',
      author: name,
      scripts: {
        'serve': 'vue-cli-service serve --open',
        'build': 'vue-cli-service build',
        'stage': 'vue-cli-service build --mode staging'
      },
      dependencies: {
        'axios': '^0.21.1',
        'core-js': '^3.6.4',
        'lib-flexible': '^0.3.2',
        'regenerator-runtime': '^0.13.5',
        'vant': '^2.10.2',
        'vue': '^2.6.11',
        'vue-router': '^3.2.0',
        'vuex': '^3.4.0'
      },
      devDependencies: {
        '@vue/cli-plugin-babel': '~4.5.0',
        '@vue/cli-plugin-eslint': '~4.5.0',
        '@vue/cli-plugin-router': '~4.5.0',
        '@vue/cli-plugin-vuex': '~4.5.0',
        '@vue/cli-service': '~4.5.0',
        'babel-eslint': '^10.1.0',
        'eslint': '^6.7.2',
        'eslint-plugin-vue': '^6.2.2',
        'babel-plugin-import': '^1.13.0',
        'babel-plugin-transform-remove-console': '^6.9.4',
        'less': '^4.1.2',
        'less-loader': '^7.3.0',
        'postcss-pxtorem': '^5.1.1',
        'script-ext-html-webpack-plugin': '^2.1.4',
        'style-resources-loader': '^1.4.1',
        'vue-cli-plugin-style-resources-loader': '^0.1.5',
        'vue-template-compiler': '^2.6.11',
        'webpack-bundle-analyzer': '^3.8.0'
      }
    }

    this.fs.writeJSON(this.destinationPath(projectName, 'package.json'), packageSettings);
  }
  install() {
    this.spawnCommandSync("npm", ["install"]); 
  }
  end() {
    this.log(
      yosay(
        chalk.green('项目已经初始化完毕，使用愉快~')
      )
    );
  }
}
