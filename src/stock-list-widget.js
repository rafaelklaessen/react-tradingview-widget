import React, { PureComponent } from "react"
import PropTypes from "prop-types"

const SCRIPT_ID = "tradingview-list-widget-script"
const CONTAINER_ID = "tradingview-list-widget"

export class TradingViewStockListWidget extends PureComponent {
  static propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    symbolsGroups: PropTypes.array,
    locale: PropTypes.string,
    largeChartUrl: PropTypes.string
  }

  static defaultProps = {
    width: "100%",
    height: "100%",
    symbolsGroups: [
      {
        originalName: "Indices",
        symbols: [
          {
            name: "NASDAQ:AAPL",
            displayName: "AAPL"
          }
        ],
        name: "Stocks"
      }
    ],
    locale: "en",
    largeChartUrl: "http://localhost/symbol/"
  }

  containerId = `${CONTAINER_ID}-${Math.random()}`

  componentDidMount = () => setTimeout(this.appendScript, 100)

  appendScript = () => {
    const script = document.createElement("script")

    script.id = SCRIPT_ID
    script.type = "text/javascript"
    script.async = true
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
    script.onload = onload
    script.innerHTML = JSON.stringify({
      ...TradingViewStockListWidget.defaultProps,
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
