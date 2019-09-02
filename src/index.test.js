import React from "react"
import ReactDOM from "react-dom"
import {
  TradingViewStockChartWidget,
  BarStyles,
  IntervalTypes,
  RangeTypes,
  Themes
} from "./index"

describe("<TradingViewStockChartWidget />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TradingViewStockChartWidget symbol="NASDAQ:AAPL" />, div)
  })

  it("Exports Constants", () => {
    expect(typeof BarStyles).toBe("object")
    expect(typeof IntervalTypes).toBe("object")
    expect(typeof RangeTypes).toBe("object")
    expect(typeof Themes).toBe("object")
  })
})
