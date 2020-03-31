import React from 'react';
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";




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

export default StockChart;