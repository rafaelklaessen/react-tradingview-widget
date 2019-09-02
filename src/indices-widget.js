import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { BarStyles, RangeTypes, Themes } from "./types"

const SCRIPT_ID = "tradingview-indices-widget-script"
const CONTAINER_ID = "tradingview-indices-widget"

export class TradingViewIndicesWidget extends PureComponent {
  static propTypes = {
    colorTheme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
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
    showChart: PropTypes.bool,
    locale: PropTypes.string,
    largeChartUrl: PropTypes.string,
    isTransparent: PropTypes.bool,
    plotLineColorGrowing: PropTypes.string,
    plotLineColorFalling: PropTypes.string,
    gridLineColor: PropTypes.string,
    scaleFontColor: PropTypes.string,
    belowLineFillColorGrowing: PropTypes.string,
    belowLineFillColorFalling: PropTypes.string,
    symbolActiveColor: PropTypes.string,
    tabs: PropTypes.array
  }

  static defaultProps = {
    colorTheme: "Light",
    dateRange: "12m",
    showChart: true,
    locale: "en",
    largeChartUrl: "",
    isTransparent: false,
    width: 400,
    height: 660,
    style: BarStyles.AREA,
    plotLineColorGrowing: "rgba(33, 150, 243, 1)",
    plotLineColorFalling: "rgba(33, 150, 243, 1)",
    gridLineColor: "rgba(233, 233, 234, 1)",
    scaleFontColor: "rgba(120, 123, 134, 1)",
    belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
    belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
    symbolActiveColor: "rgba(33, 150, 243, 0.12)",
    tabs: [
      {
        title: "Indices",
        symbols: [
          {
            s: "OANDA:SPX500USD",
            d: "S&P 500"
          },
          {
            s: "OANDA:NAS100USD",
            d: "Nasdaq 100"
          },
          {
            s: "FOREXCOM:DJI",
            d: "Dow 30"
          },
          {
            s: "INDEX:NKY",
            d: "Nikkei 225"
          },
          {
            s: "INDEX:DEU30",
            d: "DAX Index"
          },
          {
            s: "OANDA:UK100GBP",
            d: "FTSE 100"
          }
        ],
        originalTitle: "Indices"
      },
      {
        title: "Bonds",
        symbols: [
          {
            s: "CME:GE1!",
            d: "Eurodollar"
          },
          {
            s: "CBOT:ZB1!",
            d: "T-Bond"
          },
          {
            s: "CBOT:UB1!",
            d: "Ultra T-Bond"
          },
          {
            s: "EUREX:FGBL1!",
            d: "Euro Bund"
          },
          {
            s: "EUREX:FBTP1!",
            d: "Euro BTP"
          },
          {
            s: "EUREX:FGBM1!",
            d: "Euro BOBL"
          }
        ],
        originalTitle: "Bonds"
      }
    ]
  }

  containerId = `${CONTAINER_ID}-${Math.random()}`

  componentDidMount = () => this.appendScript(this.initWidget)

  componentDidUpdate = () => {
    this.cleanWidget()
    this.initWidget()
  }

  canUseDOM = () => {
    !!(
      typeof window !== "undefined" &&
      window.document &&
      window.document.createElement
    )
  }

  appendScript = onload => {
    if (!this.canUseDOM()) {
      onload()
      return
    }

    if (this.scriptExists()) {
      /* global TradingView */
      if (typeof TradingView === "undefined") {
        this.updateOnloadListener(onload)
        return
      }
      onload()
      return
    }

    const script = document.createElement("script")

    script.id = SCRIPT_ID
    script.type = "text/javascript"
    script.async = true
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
    script.onload = onload
    script.innerHTML = JSON.stringify({ ...defaultProps, ...this.props })

    document.getElementsByTagName("head")[0].appendChild(script)
  }

  getScriptElement = () => document.getElementById(SCRIPT_ID)

  scriptExists = () => this.getScriptElement() !== null

  updateOnloadListener = onload => {
    const script = this.getScriptElement()
    const oldOnload = script.onload
    return (script.onload = () => {
      oldOnload()
      onload()
    })
  }

  initWidget = () => {
    /* global TradingView */
    if (
      typeof TradingView === "undefined" ||
      !document.getElementById(this.containerId)
    )
      return

    const { widgetType, ...widgetConfig } = this.props
    const config = { ...widgetConfig, container_id: this.containerId }

    if (config.autosize) {
      delete config.width
      delete config.height
    }

    if (typeof config.interval === "number") {
      config.interval = config.interval.toString()
    }

    if (config.popup_width && typeof config.popup_width === "number") {
      config.popup_width = config.popup_width.toString()
    }

    if (config.popup_height && typeof config.popup_height === "number") {
      config.popup_height = config.popup_height.toString()
    }

    /* global TradingView */
    new TradingView[widgetType](config)
  }

  cleanWidget = () => {
    if (!this.canUseDOM()) return
    document.getElementById(this.containerId).innerHTML = ""
  }

  getStyle = () => {
    if (!this.props.autosize) return {}
    return {
      width: "100%",
      height: "100%"
    }
  }

  render = () => <article id={this.containerId} style={this.getStyle()} />
}
