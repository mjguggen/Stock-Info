import React from 'react'


const StockTitle = props => (




    <div id="StockTitle" name="StockTitle">
        {props.symbol &&
        <div className='price-bar' id={'price-bar-'+props.mode}>
            {props.symbol && <div>
                <div className="tickerMain" id={'tickerMain-'+props.mode}> {props.symbol} </div>
                <div className='stock-name' id={"stock-name-"+props.mode}> {props.name}</div>
                <div className={ props.price > props.closeYesterday ? 'stock_price_postiive' : 'stock_price_negative' }> {props.price && <span>$</span>}{props.price} </div>

                <div className="todayPrice" id={'todayPrice-'+props.mode}>
                    {props.daychange && 
                    <p > Today:  <span className={props.changepct > 0 ? 'smallpos' : 'smallneg'}>{props.daychange > 0 ? "+$": "$"} 
                    {props.daychange}</span> (
                    <span className={props.changepct > 0 ? 'smallpos' : 'smallneg'}>{props.changepct > 0 ?"+": ""}{props.changepct}%</span>)</p> 
                    }
                </div>
            </div> }
        </div>
        }
    </div>



)

export default StockTitle