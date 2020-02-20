import React from "react";
import { TradingViewEmbed, widgetType } from "react-tradingview-embed";


const makeNumNormal = (labelValue) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e+9 *10 )/10 + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e+6 * 10)/10 + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3
    ? Math.round(Math.abs(Number(labelValue)) / 1.0e+3 *10)/10 + "K"
    : Math.abs(Number(labelValue));
}

const StockData = (props) => (

    <div id="info">
        {props.name &&
        <div className="stock-data">
            <div className={"stock-data-text-"+props.mode} id="stock-data-text">
                <p> Open </p>
                <p> High </p>
                <p> Low </p>
            </div>


            <div className={"stock-data-values-"+props.mode} id="stock-data-values">
                <p> {props.open} </p>
                <p> {props.dayHigh} </p>
                <p> {props.dayLow} </p>
            </div>

            <div className={"stock-data-border-"+props.mode} id="stock-data-border" />

            <div className={"stock-data-text-"+props.mode} id="stock-data-text">
                <p> P/E </p>
                <p> EPS </p>
                <p> Mkt Cap </p>
            </div>

            <div className={"stock-data-values-"+props.mode} id="stock-data-values">
                <p> {props.pe} </p>
                <p> {props.eps} </p>
                <p> {makeNumNormal(props.mktCap)} </p>
            </div>

            <div className='border-wrapper'>
                <div className={"stock-data-border-"+props.mode} id="stock-data-border"/>
            </div>

            <div className={"stock-data-text-"+props.mode} id="stock-data-text">
                <p> 52 Wk H</p>
                <p> 52 Wk L</p>
                <p> Avg Vol </p>
            </div>

            <div className={"stock-data-values-"+props.mode} id="stock-data-values">
                <p> {props.yearHigh} </p>
                <p> {props.yearLow} </p>
                <p> {makeNumNormal(props.avgVol)} </p>
            </div>

            <div className={"stock-data-border-"+props.mode} id="stock-data-border"/>


            <div id="technical-analysis" className="technical-analysis">
                {props.symbol &&
                <div>

                    {props.toggle === "Y" ?
                    <div className='technical-analysis-widget'>
                        {props.mode === 'light' &&
                        <TradingViewEmbed
                        widgetType={widgetType.TECHNICAL_ANALYSIS}
                        widgetConfig={
                            {
                                "interval": "1M",
                                "width": "100%",
                                "colorTheme": "light",
                                "isTransparent": true,
                                "height": "400",
                                "symbol": props.symbol,
                                "showIntervalTabs": true,
                                "locale": "en"
                            }
                        }
                        />
                    }
                    {props.mode === 'dark' &&
                        <TradingViewEmbed
                        widgetType={widgetType.TECHNICAL_ANALYSIS}
                        widgetConfig={
                            {
                                "interval": "1M",
                                "width": "100%",
                                "colorTheme": "dark",
                                "isTransparent": true,
                                "height": "400",
                                "symbol": props.symbol,
                                "showIntervalTabs": true,
                                "locale": "en"
                            }
                        }
                        />
                    }
                    </div>: <div/>
                    } 

                    {props.toggle === "N" ?
                    <div className='technical-analysis-widget'>
                        {props.mode === 'light' &&
                        <TradingViewEmbed
                        widgetType={widgetType.TECHNICAL_ANALYSIS}
                        widgetConfig={
                            {
                                "interval": "1M",
                                "width": "100%",
                                "colorTheme": "light",
                                "isTransparent": true,
                                "height": "400",
                                "symbol": props.symbol,
                                "showIntervalTabs": true,
                                "locale": "en"
                            }
                        }
                        />
                    }
                    {props.mode === 'dark' &&
                        <TradingViewEmbed
                        widgetType={widgetType.TECHNICAL_ANALYSIS}
                        widgetConfig={
                            {
                                "interval": "1M",
                                "width": "100%",
                                "colorTheme": "dark",
                                "isTransparent": true,
                                "height": "400",
                                "symbol": props.symbol,
                                "showIntervalTabs": true,
                                "locale": "en"
                            }
                        }
                        />
                    }
                    </div>: <div/>
                    } 
                </div>
                } 
            </div>
        </div>

        }
    </div>



)


/*

class StockData extends React.Component {
    render() {
        return (
            <div id='info'>
            {this.props.name && <h2 className="section-title" id={'section-title-'+this.props.mode}>Company Information </h2>}


                <div className="stock-key-container">
                    <div>
                        {this.props.name &&    
                        <div>
                            <div className="stock-key" id={'stock-key-'+this.props.mode}>
                                <p> Company: { this.props.name } </p> 
                                <p> Price: ${ this.props.price} </p> 
                                <p> PE: {this.props.pe}</p>
                                <p> 52 Week High: {this.props.yearHigh}</p>
                                <p> 52 Week Low: {this.props.yearLow}</p>
                                <p> Exchange: {this.props.exchange}</p>
                                <p> {this.props.error} </p> 
                            </div>
                        </div>
                        }
                    </div>

                </div>

            </div>
        ); 
    }
}

*/


export default StockData;