import React from 'react';

import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const Footer = (props) => (
    <div className="ticker-tape" >
        <div className={"ticker-tape-" + props.mode}>
            {props.mode === 'light' &&
            <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={{
            "symbols": [
                {
                "proName": "OANDA:SPX500USD",
                "title": "S&P 500"
                },
                {
                "proName": "OANDA:NAS100USD",
                "title": "Nasdaq 100"
                },
                {
                "proName": "FX_IDC:EURUSD",
                "title": "EUR/USD"
                },
                {
                "proName": "BITSTAMP:BTCUSD",
                "title": "BTC/USD"
                },
                {
                "proName": "BITSTAMP:ETHUSD",
                "title": "ETH/USD"
                }
            ],
            "colorTheme": "light",
            "dateRange": "1d",
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "width": "100%",
            "hide_legend": true,
            "displayMode": "regular"
            }}
          />
        }
        {props.mode === 'dark' &&
          <TradingViewEmbed
            widgetType={widgetType.TICKER_TAPE}
            widgetConfig={
                {
                    "symbols": [
                        {
                        "proName": "OANDA:SPX500USD",
                        "title": "S&P 500"
                        },
                        {
                        "proName": "OANDA:NAS100USD",
                        "title": "Nasdaq 100"
                        },
                        {
                        "proName": "FX_IDC:EURUSD",
                        "title": "EUR/USD"
                        },
                        {
                        "proName": "BITSTAMP:BTCUSD",
                        "title": "BTC/USD"
                        },
                        {
                        "proName": "BITSTAMP:ETHUSD",
                        "title": "ETH/USD"
                        }
                    ],
                    "colorTheme": "dark",
                    "isTransparent": true,
                    "displayMode": "regular",
                    "locale": "en",
                    "hide_legend": true,
                    "show_popup_button": false,
                    "hide_top_toolbar": true,
                    "largeChartUrl": "",
                    "height": "90"
                }
          }
          />
        }
  
  
  
        </div>
      
    </div>
  
  );



/*
class Footer extends React.Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js'
        script.async = true;
        script.innerHTML = JSON.stringify({ 
            "colorTheme": "light",
            "dateRange": "1d",
            "locale": "en",
            "largeChartUrl": "",
            "isTransparent": true,
            "width": "100%",
            "hide_legend": true,
            "displayMode": "regular"
        }) 

        document.getElementById("tickerContainer").appendChild(script);
    }

    render() {
        return(
            <div id="tickerContainer" className={"ticker-tape-" + this.props.mode}>
                <div className="tradingview-widget-container">
                    <div className="tradingview-widget-container__widget"></div>
                </div>
            </div>
        );
    }
}
*/


export default Footer;