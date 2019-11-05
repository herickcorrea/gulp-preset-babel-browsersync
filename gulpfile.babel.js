const {
	src,
	dest,
	watch,
	parallel
} = require('gulp');

//var gulp        	= require('gulp');
const connect			= require('gulp-connect-php');
const browserSync 	= require('browser-sync').create();
const uglify 		= require('gulp-uglify-es').default;
const concat 		= require('gulp-concat');
const stripDebug 	= require('gulp-strip-debug');
const lessImport 	= require('gulp-less-import');
const less 			= require('gulp-less');
const lessMap 		= require('gulp-less-sourcemap');
const minifyCSS 	= require('gulp-csso');
const rename 		= require('gulp-rename');
const imagemin 		= require('gulp-imagemin');
const webp 			= require('gulp-webp');
const sourcemaps 	= require('gulp-sourcemaps');

function lesscss()
{
	return src('src/less/style.less')
		.pipe(less('style.css'))
		.pipe(minifyCSS())
		.pipe(lessMap({
	        sourceMap: {
	            sourceMapRootpath: './css'
	        }
	    }))
		.pipe(dest('./css'))
}

function minscripts()
{
	return src('src/js/app.main.js')
		.pipe(sourcemaps.init())
		//.pipe(concat('app.main.js'))
		.pipe(rename("app.main.min.js"))
		.pipe(uglify())
		.pipe(sourcemaps.write('./'))
		.pipe(dest('./js'));
}

function minscriptsPlugins()
{
	return src('src/js/plugins/*.js')
		.pipe(concat('plugins.js'))
		.pipe(rename("vendors.min.js"))
		.pipe(stripDebug())
		.pipe(uglify())
		.pipe(dest('./js'));
}

function optimizeImages()
{
	return src('src/images/*.{jpg,jpeg,png}')
		.pipe(imagemin())
		.pipe(dest('./images/optimized'));
}

function optimizeImagesWebp()
{
	return src('src/images/*.{jpg,jpeg,png}')
		.pipe(webp())
		.pipe(dest('./images/webp'));
}

function mwatch()
{
	connect.server({}, function ()
	{
		browserSync.init({
			proxy: '127.0.0.1:8000'
		});
	});

	watch('src/less/*.less', lesscss).on('change',function()
	{
		browserSync.reload();
	});

	watch('src/js/*.js', minscripts).on('change',function()
	{
		browserSync.reload();
	});

	watch('src/js/pages/*.js', minscripts).on('change',function()
	{
		browserSync.reload();
	});

	watch('src/js/modules/*.js', minscripts).on('change',function()
	{
		browserSync.reload();
	});

	watch('src/js/plugins/*.js', minscriptsPlugins).on('change',function()
	{
		browserSync.reload();
	});
	
	watch('**/*.php').on('change', function () {
		browserSync.reload();
	});

	watch('src/images/*.{jpg,jpeg,png}', optimizeImages)
	watch('src/images/*.{jpg,jpeg,png}', optimizeImagesWebp)	
}

exports.watch 	= mwatch;