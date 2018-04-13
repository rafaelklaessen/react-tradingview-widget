import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export const IntervalTypes = {
  D: 'D',
  W: 'W'
};

export const Themes = {
  LIGHT: 'Light',
  DARK: 'Dark'
};

export const BarStyles = {
  BARS: '0',
  CANDLES: '1',
  HOLLOW_CANDLES: '9',
  HEIKIN_ASHI: '8',
  LINE: '2',
  AREA: '3',
  RENKO: '4',
  LINE_BREAK: '7',
  KAGI: '5',
  POINT_AND_FIGURE: '6'
};

const SCRIPT_ID = 'tradingview-widget-script';
const CONTAINER_ID = 'tradingview-widget';

export default class TradingViewWidget extends PureComponent {
  static propTypes = {
    widgetType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    autosize: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
    interval: PropTypes.oneOf([
      1,
      3,
      5,
      15,
      30,
      60,
      120,
      180,
      '1',
      '3',
      '5',
      '15',
      '30',
      '60',
      '120',
      '180',
      IntervalTypes.D,
      IntervalTypes.W
    ]),
    timezone: PropTypes.string,
    theme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
    style: PropTypes.oneOf([
      BarStyles.BARS,
      BarStyles.CANDLES,
      BarStyles.HOLLOW_CANDLES,
      BarStyles.HEIKIN_ASHI,
      BarStyles.LINE,
      BarStyles.AREA,
      BarStyles.RENKO,
      BarStyles.LINE_BREAK,
      BarStyles.KAGI,
      BarStyles.POINT_AND_FIGURE
    ]),
    locale: PropTypes.string,
    toolbar_bg: PropTypes.string,
    enable_publishing: PropTypes.bool,
    allow_symbol_change: PropTypes.bool,
    withdateranges: PropTypes.bool,
    hide_side_toolbar: PropTypes.bool,
    hideideas: PropTypes.bool,
    watchlist: PropTypes.arrayOf(PropTypes.string),
    details: PropTypes.bool,
    hotlist: PropTypes.bool,
    calendar: PropTypes.bool,
    news: PropTypes.arrayOf(PropTypes.string),
    studies: PropTypes.arrayOf(PropTypes.string),
    show_popup_button: PropTypes.bool,
    popup_width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    popup_height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    no_referral_id: PropTypes.bool,
    referral_id: PropTypes.string
  };

  static defaultProps = {
    widgetType: 'widget',
    width: 980,
    height: 610,
    autosize: false,
    interval: IntervalTypes.D,
    timezone: 'Etc/UTC',
    theme: Themes.LIGHT,
    style: BarStyles.CANDLES,
    locale: 'en',
    toolbar_bg: '#F1F3F6',
    enable_publishing: false,
    allow_symbol_change: true,
    hideideas: true
  };

  containerId = `${CONTAINER_ID}-${Math.random()}`;

  componentDidMount = () => this.appendScript(this.initWidget);

  componentDidUpdate = () => {
    this.cleanWidget();
    this.initWidget();
  };

  canUseDOM = () => !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );

  appendScript = (onload) => {
    if (!this.canUseDOM()) {
      onload();
      return;
    }

    if (this.scriptExists()) {
      /* global TradingView */
      if (typeof TradingView === 'undefined') {
        this.updateOnloadListener(onload);
        return;
      }
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  getScriptElement = () =>
    document.getElementById(SCRIPT_ID);

  scriptExists = () =>
    this.getScriptElement() !== null;

  updateOnloadListener = (onload) => {
    const script = this.getScriptElement();
    const oldOnload = script.onload;
    return script.onload = () => {
      oldOnload();
      onload();
    };
  };

  initWidget = () => {
    /* global TradingView */
    if (typeof TradingView === 'undefined') return;

    const { widgetType, ...widgetConfig } = this.props;
    const config = { ...widgetConfig, container_id: this.containerId };

    if (config.autosize) {
      delete config.width;
      delete config.height;
    }

    if (typeof config.interval === 'number') {
      config.interval = config.interval.toString();
    }

    if (config.popup_width && typeof config.popup_width === 'number') {
      config.popup_width = config.popup_width.toString();
    }

    if (config.popup_height && typeof config.popup_height === 'number') {
      config.popup_height = config.popup_height.toString();
    }

    /* global TradingView */
    new TradingView[widgetType](config);
  };

  cleanWidget = () => {
    if (!this.canUseDOM()) return;
    document.getElementById(this.containerId).innerHTML = '';
  };

  getStyle = () => {
    if (!this.props.autosize) return {};
    return {
      width: '100%',
      height: '100%'
    };
  };

  render = () => <article id={this.containerId} style={this.getStyle()} />
}
