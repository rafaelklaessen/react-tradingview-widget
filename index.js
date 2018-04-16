if (typeof window === 'undefined') {
  global.window = {};
}

require('./dist/manifest');

if (typeof webpackJsonpreact_tradingview_widget === 'undefined') {
  global.webpackJsonpreact_tradingview_widget =
    window['webpackJsonpreact_tradingview_widget'];
}

require('./dist/vendor');
module.exports = require('./dist/index');
