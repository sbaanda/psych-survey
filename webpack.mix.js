let mix = require('laravel-mix');
require('laravel-mix-brotli');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig({
        output: {
            publicPath: Mix.isUsing('hmr') ? (process.argv.includes('--https') ? 'https' : 'http') + '://alina.loc:8080/' : '/',
            chunkFilename: `js/chunks/[id].[name].[chunkhash].js`
        },
    })
    .vue()
    .brotli(
        {
            enabled: mix.inProduction(),
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|woff2|jpg)$/,
            threshold: 10240,
            minRatio: 0.8,
            quality: 11
        }
    );

mix.js('resources/js/guest.js', 'public/js')
    .sass('resources/sass/guest.scss', 'public/css')
    .vue()
    .brotli(
        {
            enabled: mix.inProduction(),
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|html|svg|woff2|jpg)$/,
            threshold: 10240,
            minRatio: 0.8,
            quality: 11
        }
    );

if (mix.inProduction()) {
    mix
        .version()
}
