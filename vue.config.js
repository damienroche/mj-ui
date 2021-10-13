// https://cli.vuejs.org/config/#configuration-reference
const config = require('./package.json');

process.env.VUE_APP_VERSION = config.version;

// pull in tailwind theme colors for the tile colors
const { emerald } = require('tailwindcss/colors');

module.exports = {
  outputDir: 'docs',
  publicPath: '/',
  pwa: {
    themeColor: emerald['600'],
    msTileColor: emerald['600'],
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
  configureWebpack: {
    plugins: [
      require('unplugin-vue-components/webpack')({})
    ]
  }
};
