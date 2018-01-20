import React from 'react';
import ReactDOM from 'react-dom';
import TradingViewWidget, { IntervalTypes, Themes, BarStyles } from './index';

describe('<TradingViewWidget />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingViewWidget symbol="NASDAQ:AAPL" />, div);
  });

  it('exports constants', () => {
    expect(typeof IntervalTypes).toBe('object');
    expect(typeof Themes).toBe('object');
    expect(typeof BarStyles).toBe('object');
  });
});
