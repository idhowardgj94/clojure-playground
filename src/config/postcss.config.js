module.exports = {
  plugins: [
    require('postcss-import')({path: ['tailwind', 'node_modules']}),
    require('tailwindcss')('src/config/tailwind.config.js'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('cssnano')({preset: 'default'}),
    require('postcss-reporter'),
  ]
};
