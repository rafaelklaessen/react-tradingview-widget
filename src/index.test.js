import React from 'react';
import ReactDOM from 'react-dom';
import TradingViewWidget from 'index';

describe('<TradingViewWidget />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TradingViewWidget symbol="NASDAQ:AAPL" />, div);
  });
});
