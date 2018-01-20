# react-tradingview-widget
React component for rendering TradingView Advanced Real-Time Chart Widget.

## Install
`yarn add react-tradingview-widget`
or
`npm install --save react-tradingview-widget`

## Usage
### Basic example
```javascript
import TradingViewWidget from 'react-tradingview-widget';

const App = () => (
  <TradingViewWidget symbol="NASDAQ:AAPL" />
);
```

All given props are passed on to the widget config.

### Advanced example
```javascript
import TradingViewWidget from 'react-tradingview-widget';

const App = () => (
  <TradingViewWidget
    symbol="NASDAQ:AAPL"
    theme="Dark"
    locale="fr"
    autosize
  />
);

```
