import React from 'react';


import { TradingViewEmbed, widgetType } from "react-tradingview-embed";
import TradingViewWidget, { Themes } from 'react-tradingview-widget';






/*

class StockChart extends React.Component {

  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }


  getChartData() {
    const symbolString = String(this.props.symbol)
    return (
      JSON.stringify({
        "colorTheme": 'light',
        "dateRange": "1d",
        "showChart": true,
        "locale": "en",
        "largeChartUrl": "",
        "isTransparent": true,
        "width": "100%",
        "height": "400",
        "plotLineColorGrowing": "rgb(47, 196, 141)",
        "plotLineColorFalling": "rgb(229, 64, 18)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(120, 123, 134, 1)",
        "belowLineFillColorGrowing": "rgba(87, 243, 144, 0.12)",
        "belowLineFillColorFalling": "rgba(243, 15, 15, 0.12)",
        "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
        "tabs": [
          {
            "title": "Stocks",
            "symbols": [
              {
                "s": "BABA"
              }
            ],
          }
        ]
      })
    )
  }


  render() {
    return (
      <div class="chart-widget" ref={this._ref}>
      <div class="tradingview-widget-container__widget"></div>

  </div>

    )
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
    script.async = true;
    script.innerHTML = this.getChartData()

    this._ref.current.appendChild(script);
  }
}
*/




const StockChart = (props) => (

  <div id="chart" >

    <div>
      {props.symbol &&
        <div>
          {props.toggle === "Y" ?
            <div className='chart-widget'>
              {props.mode === 'light' &&
              <TradingViewEmbed
                widgetType={widgetType.MARKET_OVERVIEW}
                widgetConfig={
                {
                  "colorTheme": 'light',
                  "dateRange": "1d",
                  "showChart": true,
                  "locale": "en",
                  "largeChartUrl": "",
                  "isTransparent": true,
                  "width": "100%",
                  "height": "400",
                  "plotLineColorGrowing": "rgb(47, 196, 141)",
                  "plotLineColorFalling": "rgb(229, 64, 18)",
                  "gridLineColor": "rgba(240, 243, 250, 0)",
                  "scaleFontColor": "rgba(120, 123, 134, 1)",
                  "belowLineFillColorGrowing": "rgba(87, 243, 144, 0.12)",
                  "belowLineFillColorFalling": "rgba(243, 15, 15, 0.12)",
                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
                  "tabs": [
                    {
                      "title": "Stocks",
                      "symbols": [
                        {
                          "s": props.symbol
                        }
                      ],
                    }
                  ]
                }
              }
              />
            }
            {props.mode === 'dark' &&
              <TradingViewEmbed
                widgetType={widgetType.MARKET_OVERVIEW}
                widgetConfig={
                {
                  "colorTheme": 'dark',
                  "dateRange": "1d",
                  "showChart": true,
                  "locale": "en",
                  "largeChartUrl": "",
                  "isTransparent": true,
                  "width": "100%",
                  "height": "400",
                  "plotLineColorGrowing": "rgb(47, 196, 141)",
                  "plotLineColorFalling": "rgb(229, 64, 18)",
                  "gridLineColor": "rgba(240, 243, 250, 0)",
                  "scaleFontColor": "rgba(120, 123, 134, 1)",
                  "belowLineFillColorGrowing": "rgba(87, 243, 144, 0.12)",
                  "belowLineFillColorFalling": "rgba(243, 15, 15, 0.12)",
                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
                  "tabs": [
                    {
                      "title": "Stocks",
                      "symbols": [
                        {
                          "s": props.symbol
                        }
                      ],
                    }
                  ]
                }
              }
              />
            }
            </div> : <div/>
          } 

          {props.toggle === "N" ?
            <div className='chart-widget'>
              {props.mode === 'light' &&
              <TradingViewEmbed
                widgetType={widgetType.MARKET_OVERVIEW}
                widgetConfig={
                {
                  "colorTheme": 'light',
                  "dateRange": "1d",
                  "showChart": true,
                  "locale": "en",
                  "largeChartUrl": "",
                  "isTransparent": true,
                  "width": "100%",
                  "height": "400",
                  "plotLineColorGrowing": "rgb(47, 196, 141)",
                  "plotLineColorFalling": "rgb(229, 64, 18)",
                  "gridLineColor": "rgba(240, 243, 250, 0)",
                  "scaleFontColor": "rgba(120, 123, 134, 1)",
                  "belowLineFillColorGrowing": "rgba(87, 243, 144, 0.12)",
                  "belowLineFillColorFalling": "rgba(243, 15, 15, 0.12)",
                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
                  "tabs": [
                    {
                      "title": "Stocks",
                      "symbols": [
                        {
                          "s": props.symbol
                        }
                      ],
                    }
                  ]
                }
              }
              />
            }
            {props.mode === 'dark' &&
              <TradingViewEmbed
                widgetType={widgetType.MARKET_OVERVIEW}
                widgetConfig={
                {
                  "colorTheme": 'dark',
                  "dateRange": "1d",
                  "showChart": true,
                  "locale": "en",
                  "largeChartUrl": "",
                  "isTransparent": true,
                  "width": "100%",
                  "height": "400",
                  "plotLineColorGrowing": "rgb(47, 196, 141)",
                  "plotLineColorFalling": "rgb(229, 64, 18)",
                  "gridLineColor": "rgba(240, 243, 250, 0)",
                  "scaleFontColor": "rgba(120, 123, 134, 1)",
                  "belowLineFillColorGrowing": "rgba(87, 243, 144, 0.12)",
                  "belowLineFillColorFalling": "rgba(243, 15, 15, 0.12)",
                  "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
                  "tabs": [
                    {
                      "title": "Stocks",
                      "symbols": [
                        {
                          "s": props.symbol
                        }
                      ],
                    }
                  ]
                }
              }
              />
            }
            </div> : <div/>
          } 








        </div>
        } 
    </div>
  </div>
);






/*

const StockChart = (props) => (

  <div id="chart" >
    {props.symbol &&
      <div className='chart-widget'>
          <TradingViewWidget
            symbol={props.symbol}
            locale="en"
            autosize
            theme={Themes.DARK}
            interval="D"
            style="0"
            enable_publishing="false"
            hide_legend='true'
            isTransparent= "true"
            color="#1B1B1D"
            plotLineColorGrowing= "rgba(47, 196, 141, 1)"
            plotLineColorFalling= "rgba(25, 118, 210, 1)"
            gridLineColor= "rgba(42, 46, 57, 1)"
            scaleFontColor= "rgba(120, 123, 134, 1)"
            belowLineFillColorGrowing= "rgba(33, 150, 243,0.12)"
            belowLineFillColorFalling= "rgba(33, 150, 243, 0.12)"
            symbolActiveColor= "rgba(33, 150, 243, 0.12)"
          />
      </div>
    } 
  </div>

);

*/



/*

class StockChart extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
      }


      componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        script.async = true;
        
        
        script.innerHTML = JSON.stringify({ 
            "colorTheme": "dark",
            "dateRange": "1d",
            "showChart": true,
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "width": "100%",
            "height": "400",
            "plotLineColorGrowing": "rgba(47, 196, 141, 1)",
            "plotLineColorFalling": "rgba(25, 118, 210, 1)",
            "gridLineColor": "rgba(42, 46, 57, 1)",
            "scaleFontColor": "rgba(120, 123, 134, 1)",
            "belowLineFillColorGrowing": "rgba(33, 150, 243, 0.12)",
            "belowLineFillColorFalling": "rgba(33, 150, 243, 0.12)",
            "symbolActiveColor": "rgba(33, 150, 243, 0.12)",
            "tabs": [
                {
                  "title": "Indices",
                  "symbols": [
                    {
                      "s": "NYSE:BABA",
                      "d": "Alibaba"
                    }
                  ],
                  "originalTitle": "Indices"
                }
              ]
        }) 
        document.getElementById("myContainer").appendChild(script);
    }
    render() {
        return(
      <div id="myContainer" className="stockChart-container">
        <div className="tradingview-widget-container">
          <div className="tradingview-widget-container__widget">
          </div>
        </div>
     </div>
        );
    }
    }

*/




export default StockChart;