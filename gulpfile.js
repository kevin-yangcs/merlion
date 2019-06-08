let gulp = require('gulp'); // 工作流管理插件
let ts = require('gulp-typescript'); // ts文件解析插件
let tsp = ts.createProject('tsconfig.json'); // ts解析插件装载配置文件
let uglify = require('gulp-uglify'); // 压缩混淆工具
let babel = require('gulp-babel'); // 语法转化工具
let gutil = require('gulp-util'); // gulp工具类

// 目录常量
const PATHS = {
  entry: ['./src/index.ts', './src/*/*'],
  output: './dist'
};

// 编译ts文件
gulp.task('build', () => {
  return gulp.src(PATHS.entry) // 资源地址
    .pipe(tsp()) // ts解析成js
    .pipe(babel({ // es6转es5
      presets: ['@babel/env'] // es5检查机制
    }))
    .pipe(uglify({ // 压缩混淆
      ie8: true,
      warnings: false,
      compress: { // 去除console和debugger
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.error', 'console.warn', 'debugger']
      }
    }))
    .on('error', (err) => { // 监听error消息
      gutil.log(gutil.colors.red('[Error]'), err.toString()); // 打印错误消息
    })
    .pipe(gulp.dest(PATHS.output)); // 输出
});