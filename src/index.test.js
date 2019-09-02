import React from "react"
import ReactDOM from "react-dom"
import {
  TradingViewStockChartWidget,
  TradingViewIndicesWidget,
  BarStyles,
  IntervalTypes,
  RangeTypes,
  Themes
} from "./index"

describe("Types", () => {
  it("Exports Constants", () => {
    expect(typeof BarStyles).toBe("object")
    expect(typeof IntervalTypes).toBe("object")
    expect(typeof RangeTypes).toBe("object")
    expect(typeof Themes).toBe("object")
  })
})

describe("<TradingViewStockChartWidget />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TradingViewStockChartWidget symbol="NASDAQ:AAPL" />, div)
  })
})

describe("<TradingViewIndicesWidget />", () => {
  it("Renders without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<TradingViewIndicesWidget />, div)
  })
})
