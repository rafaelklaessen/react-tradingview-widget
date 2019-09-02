(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["react-tradingview-widget"] = factory();
	else
		root["react-tradingview-widget"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return webpackJsonpreact_tradingview_widget([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IntervalTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RangeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Themes; });
var BarStyles = {
  BARS: "0",
  CANDLES: "1",
  HOLLOW_CANDLES: "9",
  HEIKIN_ASHI: "8",
  LINE: "2",
  AREA: "3",
  RENKO: "4",
  LINE_BREAK: "7",
  KAGI: "5",
  POINT_AND_FIGURE: "6"
};

var IntervalTypes = {
  D: "D",
  W: "W"
};

var RangeTypes = {
  YTD: "ytd",
  ALL: "all"
};

var Themes = {
  LIGHT: "Light",
  DARK: "Dark"
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stock_chart_widget__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TradingViewStockChartWidget", function() { return __WEBPACK_IMPORTED_MODULE_0__stock_chart_widget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BarStyles", function() { return __WEBPACK_IMPORTED_MODULE_1__types__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "IntervalTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__types__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RangeTypes", function() { return __WEBPACK_IMPORTED_MODULE_1__types__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Themes", function() { return __WEBPACK_IMPORTED_MODULE_1__types__["d"]; });



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradingViewStockChartWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__types__ = __webpack_require__(5);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SCRIPT_ID = "tradingview-widget-script";
var CONTAINER_ID = "tradingview-widget";

var TradingViewStockChartWidget = function (_PureComponent) {
  _inherits(TradingViewStockChartWidget, _PureComponent);

  function TradingViewStockChartWidget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TradingViewStockChartWidget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TradingViewStockChartWidget.__proto__ || Object.getPrototypeOf(TradingViewStockChartWidget)).call.apply(_ref, [this].concat(args))), _this), _this.containerId = CONTAINER_ID + "-" + Math.random(), _this.componentDidMount = function () {
      return _this.appendScript(_this.initWidget);
    }, _this.componentDidUpdate = function () {
      _this.cleanWidget();
      _this.initWidget();
    }, _this.canUseDOM = function () {
      return !!(typeof window !== "undefined" && window.document && window.document.createElement);
    }, _this.appendScript = function (onload) {
      if (!_this.canUseDOM()) {
        onload();
        return;
      }

      if (_this.scriptExists()) {
        /* global TradingView */
        if (typeof TradingView === "undefined") {
          _this.updateOnloadListener(onload);
          return;
        }
        onload();
        return;
      }
      var script = document.createElement("script");
      script.id = SCRIPT_ID;
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://s3.tradingview.com/tv.js";
      script.onload = onload;
      document.getElementsByTagName("head")[0].appendChild(script);
    }, _this.getScriptElement = function () {
      return document.getElementById(SCRIPT_ID);
    }, _this.scriptExists = function () {
      return _this.getScriptElement() !== null;
    }, _this.updateOnloadListener = function (onload) {
      var script = _this.getScriptElement();
      var oldOnload = script.onload;
      return script.onload = function () {
        oldOnload();
        onload();
      };
    }, _this.initWidget = function () {
      /* global TradingView */
      if (typeof TradingView === "undefined" || !document.getElementById(_this.containerId)) return;

      var _this$props = _this.props,
          widgetType = _this$props.widgetType,
          widgetConfig = _objectWithoutProperties(_this$props, ["widgetType"]);

      var config = _extends({}, widgetConfig, { container_id: _this.containerId });

      if (config.autosize) {
        delete config.width;
        delete config.height;
      }

      if (typeof config.interval === "number") {
        config.interval = config.interval.toString();
      }

      if (config.popup_width && typeof config.popup_width === "number") {
        config.popup_width = config.popup_width.toString();
      }

      if (config.popup_height && typeof config.popup_height === "number") {
        config.popup_height = config.popup_height.toString();
      }

      /* global TradingView */
      new TradingView[widgetType](config);
    }, _this.cleanWidget = function () {
      if (!_this.canUseDOM()) return;
      document.getElementById(_this.containerId).innerHTML = "";
    }, _this.getStyle = function () {
      if (!_this.props.autosize) return {};
      return {
        width: "100%",
        height: "100%"
      };
    }, _this.render = function () {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("article", { id: _this.containerId, style: _this.getStyle() });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TradingViewStockChartWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
TradingViewStockChartWidget.propTypes = {
  allow_symbol_change: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  autosize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  calendar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  details: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  enable_publishing: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  hideideas: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hide_legend: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hide_side_toolbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hide_top_toolbar: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  hotlist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  interval: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([1, 3, 5, 15, 30, 60, 120, 180, "1", "3", "5", "15", "30", "60", "120", "180", __WEBPACK_IMPORTED_MODULE_2__types__["b" /* IntervalTypes */].D, __WEBPACK_IMPORTED_MODULE_2__types__["b" /* IntervalTypes */].W]),
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  news: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string),
  no_referral_id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  popup_height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  popup_width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  range: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(["1d", "5d", "1m", "3m", "6m", __WEBPACK_IMPORTED_MODULE_2__types__["c" /* RangeTypes */].YTD, "12m", "60m", __WEBPACK_IMPORTED_MODULE_2__types__["c" /* RangeTypes */].ALL]),
  referral_id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  save_image: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  show_popup_button: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  studies: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string),
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].BARS, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].CANDLES, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].HOLLOW_CANDLES, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].HEIKIN_ASHI, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].LINE, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].AREA, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].RENKO, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].LINE_BREAK, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].KAGI, __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].POINT_AND_FIGURE]),
  symbol: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_2__types__["d" /* Themes */].LIGHT, __WEBPACK_IMPORTED_MODULE_2__types__["d" /* Themes */].DARK]),
  timezone: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  toolbar_bg: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  watchlist: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string),
  widgetType: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  withdateranges: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
TradingViewStockChartWidget.defaultProps = {
  allow_symbol_change: true,
  autosize: false,
  enable_publishing: false,
  height: 610,
  hideideas: true,
  hide_legend: false,
  hide_side_toolbar: true,
  hide_top_toolbar: false,
  interval: __WEBPACK_IMPORTED_MODULE_2__types__["b" /* IntervalTypes */].D,
  locale: "en",
  save_image: true,
  show_popup_button: false,
  style: __WEBPACK_IMPORTED_MODULE_2__types__["a" /* BarStyles */].CANDLES,
  theme: __WEBPACK_IMPORTED_MODULE_2__types__["d" /* Themes */].LIGHT,
  timezone: "Etc/UTC",
  toolbar_bg: "#F1F3F6",
  widgetType: "widget",
  width: 980,
  withdateranges: false
};

/***/ })
],[6]);
});