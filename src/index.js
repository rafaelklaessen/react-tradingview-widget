import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TradingViewWidget extends Component {
  static propTypes = {
    widgetType: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    symbol: PropTypes.string.isRequired,
    interval: PropTypes.string,
    timezone: PropTypes.string,
    theme: PropTypes.string,
    style: PropTypes.string,
    locale: PropTypes.string,
    toolbar_bg: PropTypes.string,
    enable_publishing: PropTypes.bool,
    allow_symbol_change: PropTypes.bool,
    hideideas: PropTypes.bool,
    autosize: PropTypes.bool
  };

  static defaultProps = {
    widgetType: 'widget',
    width: 980,
    height: 610,
    interval: 'D',
    timezone: 'Etc/UTC',
    theme: 'Light',
    style: '1',
    locale: 'en',
    toolbar_bg: '#F1F3F6',
    enable_publishing: false,
    allow_symbol_change: true,
    hideideas: true,
    autosize: false
  };

  componentDidMount = () => {
    this.appendScript(this.initWidget);
  };

  appendScript = (onload) => {
    if (this.scriptExists()) {
      onload();
      return;
    }
    const script = document.createElement('script');
    script.id = 'widget-script';
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/tv.js';
    script.onload = onload;
    document.getElementsByTagName('head')[0].appendChild(script);
  };

  scriptExists = () => document.getElementById('widget-script') !== null;

  initWidget = () => {
    const { widgetType, ...widgetConfig } = this.props;
    const config = { ...widgetConfig, container_id: 'widget-container'};
    if (config.autosize) {
      delete config.width;
      delete config.height;
    }
    /* global TradingView */
    new TradingView[widgetType](config);
  };

  render = () => <div id="widget-container" />;
}
