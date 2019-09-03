import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { RangeTypes, Themes } from "./types"

const SCRIPT_ID = "tradingview-chart-mini-widget-script"
const CONTAINER_ID = "tradingview-chart-mini-widget"

export class TradingViewStockChartMiniWidget extends PureComponent {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    locale: PropTypes.string,
    dateRange: PropTypes.oneOf([
      "1d",
      "5d",
      "1m",
      "3m",
      "6m",
      RangeTypes.YTD,
      "12m",
      "60m",
      RangeTypes.ALL
    ]),
    colorTheme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
    trendLineColor: PropTypes.string,
    underLineColor: PropTypes.string,
    isTransparent: PropTypes.bool,
    autosize: PropTypes.bool,
    largeChartUrl: PropTypes.string
  }

  static defaultProps = {
    width: "350",
    height: "220",
    locale: "en",
    dateRange: "1d",
    colorTheme: Themes.LIGHT,
    trendLineColor: "#37a6ef",
    underLineColor: "#e3f2fd",
    isTransparent: false,
    autosize: false,
    largeChartUrl: ""
  }

  containerId = `${CONTAINER_ID}-${Math.random()}`

  componentDidMount = () => setTimeout(this.appendScript, 100)

  appendScript = () => {
    const script = document.createElement("script")

    script.id = SCRIPT_ID
    script.type = "text/javascript"
    script.async = true
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js"
    script.onload = onload
    script.innerHTML = JSON.stringify({
      ...TradingViewStockChartMiniWidget.defaultProps,
      ...this.props
    })

    document.getElementById(this.containerId).appendChild(script)
  }

  getStyle = () => {
    if (!this.props.autosize) return {}
    return {
      width: "100%",
      height: "100%"
    }
  }

  render = () => (
    <article id={this.containerId} style={this.getStyle()}></article>
  )
}
