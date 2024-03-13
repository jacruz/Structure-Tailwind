const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        /*
        require('cssnano')({
            preset: 'default',
        }),*/
        require('postcss-nested'),
    ]
  }