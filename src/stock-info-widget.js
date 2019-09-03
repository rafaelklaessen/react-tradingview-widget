import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Themes } from "./types"

const SCRIPT_ID = "tradingview-info-widget-script"
const CONTAINER_ID = "tradingview-info-widget"

export class TradingViewStockInfoWidget extends PureComponent {
  static propTypes = {
    symbol: PropTypes.string,
    autosize: PropTypes.bool,
    width: PropTypes.string,
    colorTheme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
    isTransparent: PropTypes.bool,
    locale: PropTypes.string
  }

  static defaultProps = {
    autosize: false,
    width: "1000",
    locale: "en",
    colorTheme: Themes.LIGHT,
    isTransparent: false
  }

  containerId = `${CONTAINER_ID}-${Math.random()}`

  componentDidMount = () => setTimeout(this.appendScript, 100)

  appendScript = () => {
    const script = document.createElement("script")

    script.id = SCRIPT_ID
    script.type = "text/javascript"
    script.async = true
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js"
    script.onload = onload
    script.innerHTML = JSON.stringify({
      ...TradingViewStockInfoWidget.defaultProps,
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
