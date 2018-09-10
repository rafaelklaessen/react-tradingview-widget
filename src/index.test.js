import React from 'react';
import ReactDOM from 'react-dom';
import TradingViewWidget, {
  BarStyles,
  IntervalTypes,
  RangeTypes,
  Themes
} from './index';

describe('<TradingViewWidget />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingViewWidget symbol="NASDAQ:AAPL" />, div);
  });

  it('exports constants', () => {
    expect(typeof BarStyles).toBe('object');
    expect(typeof IntervalTypes).toBe('object');
    expect(typeof RangeTypes).toBe('object');
    expect(typeof Themes).toBe('object');
  });
});
