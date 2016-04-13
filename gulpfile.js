var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var webpackConfig = require('./webpack.config.js');
var mergeStream = require('merge-stream');
var path = require('path'),
    _ = require('lodash'),
	runSequence = require('run-sequence'),
	browserSync=require('browser-sync');


var configs = {
    js: 'public/**/*.js',
    less: 'public/**/*.less',
	sass: 'public/assets/sass/**/*.scss',
	css:'public/**/*.css',
    html: ['public/index.html',
        'public/views/*.html',
        'public/layout/*.html'
        ],
    assets: [
        'public/assets/fonts/**/*',
        'public/assets/images/**/*'
    ]
};
var server= {
	   views: 'server/views/*.html',
	   config: 'server/config/*.js',
	   allJS: ['server.js', 'config/**/*.js', 'server/**/*.js']
};

// 设置环境
// Set NODE_ENV to 'test'
gulp.task('env:test', function () {
  process.env.NODE_ENV = 'test';
});

// Set NODE_ENV to 'development'
gulp.task('env:dev', function () {
  process.env.NODE_ENV = 'development';
});

// Set NODE_ENV to 'production'
gulp.task('env:prod', function () {
  process.env.NODE_ENV = 'production';
});

gulp.task('js', ['webpack'], function () {
    return gulp.src('public/**/*.js')
//        .pipe(plugins.uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('webpack', function () {
    webpackConfig.refreshEntry();

    return gulp.src(configs.js)
        .pipe(plugins.webpack(webpackConfig))
        .pipe(gulp.dest('dist/js'));
});
//less编译
gulp.task('less', function () {
    return gulp.src(configs.less)
        .pipe(plugins.less())  //编译
	    .pipe(plugins.rename(function (file) {
      file.dirname = file.dirname.replace(path.sep + 'less', path.sep + 'css');
    }))
	    .pipe(plugins.concat('app.css')) //合并
	    .pipe(gulp.dest('public/css'))
        .pipe(plugins.cssmin()) //压缩
		.pipe(plugins.rename({ extname: '.min.css' })) //重命名
        .pipe(gulp.dest('public/css'));
});
//sass编译,合并压缩
gulp.task('sass', function () {
    return gulp.src(configs.sass)
        .pipe(plugins.sass())  //编译
	    .pipe(plugins.rename(function (file) {
      file.dirname = file.dirname.replace(path.sep + 'scss', path.sep + 'css');
    }))
	    .pipe(plugins.concat('app.css')) //合并
	    .pipe(gulp.dest('public/css'))
        .pipe(plugins.cssmin()) //压缩
		.pipe(plugins.rename({ extname: '.min.css' })) //重命名
        .pipe(gulp.dest('public/css'));
});
//图片字体处理
gulp.task('assets', function () {
    return mergeStream.apply(null, configs.assets.map(function(glob) {
        return gulp.src(glob)
            .pipe(gulp.dest(glob.replace(/\/\*.*plugins/, '').replace(/^public/, 'dist')));
    }));
});
//html编译
gulp.task('html', function () {
    return gulp.src(configs.html)
        .pipe(gulp.dest('dist'));
});
// Nodemon task:自动重启node
gulp.task('nodemon', function () {
  return plugins.nodemon({
    script: 'server.js',
    nodeArgs: ['--debug'],
    ext: 'js,html,css',
    watch: _.union(server.views,server.allJS,server.config)
  });
});

gulp.task('watch',function () {
    plugins.livereload.listen();

    gulp.watch(configs.js, ['js', pop])
        .on('change', push);

    gulp.watch(configs.less, ['css', pop])
        .on('change', push);

    gulp.watch(configs.html, ['html', pop])
        .on('change', push);

    gulp.watch(configs.assets, ['assets', pop])
        .on('change', push);

    var changed = [];

    function push(s) {
        changed.push(s);
    }

    function pop() {
        while (changed.length > 0) {
            var s = changed.pop();
            plugins.livereload.changed(s);
        }
    }
});
//用browserSync启动浏览器 -可有可无
gulp.task('start',function(){
	browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['public'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });
});
gulp.task('csslint',function(){
   gulp.src(_.union(configs.css))
       .pipe(plugins.csslint('.csslintrc'))
       .pipe(plugins.csslint.reporter())
       .pipe(plugins.csslint.reporter(function (file) {
           if (!file.csslint.errorCount) {
               done();
           }
       }));
});
gulp.task('jshint',function(){
	gulp.src(_.union(configs.js,server.config,server.allJS))
	.pipe(plugins.jshint())
	.pipe(plugins.jshint.reporter());
});
//图片压缩
gulp.task('img',function(){
	
});
//检查后编译less sass
gulp.task('lint', function(done) {
      runSequence('less', 'sass', ['csslint', 'jshint'], done);
});
gulp.task('default', function (done) {
      runSequence('env:dev', 'lint', ['nodemon', 'watch'],'start', done);
});


