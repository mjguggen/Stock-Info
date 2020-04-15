import React from "react";

import StockData from "./Components/StockData";
import StockChart from "./Components/StockChart";
import Navbar from "./Components/NavBar";
import News from "./Components/News";
import StockTitle from "./Components/StockTitle";
import ModeChanger from './Components/ModeChange';
import Footer from './Components/Footer';
import Enter from './Components/Enter';
import Profile from './Components/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';


//const WORLDTRADINGDATA_API_KEY = "2HhczAOftfU2TiYMAJepZcz5JrUVOVGlpLleKt9ZnGlyKvokZniHKmmBDvYD";
//const WORLDTRADINGDATA_API_KEY2 = "C7pRFbXZRf9nVgqvcoGzdKfsR0zex2TsoR9tJ1Qlimo6NbYitsBOrOjJU4DS";
const FINNHUB_KEY = "bojkqfvrh5rcji5m3e2g"
const NEWS_API_KEY = "51cbba44e78c467ba6c8352767d4e971"


class App extends React.Component {

  constructor(props) {
    super(props);
    this.modeChanger = React.createRef();
    this.changeMode = this.changeMode.bind(this);
  }

  state = {
    name: undefined,
    symbol: undefined,
    price: undefined,
    closeYesterday: undefined,
    pe: undefined,
    yearHigh: undefined,
    yearLow: undefined,
    exchange: undefined,
    daychange: undefined,
    changepct: undefined,
    open: undefined,
    dayHigh: undefined,
    dayLow: undefined,
    mktCap:undefined,
    avgVol:undefined,
    eps:undefined,
    dividendYield: undefined,
    beta: undefined,



    error: undefined,

    articles: undefined,

    mode: 'light',
    bg: {
      backgroundColor: "white"
    },

    toggle: 'N'
  }


  getTicker = async (e) => {
    e.preventDefault();
    const ticker = e.target.elements.ticker.value.toUpperCase();
//    const api_call = await fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=${ticker}&api_token=${WORLDTRADINGDATA_API_KEY}`);

    const companyCall = await fetch(`https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bojkqfvrh5rcji5m3e2g`);
    const companyCallData = await companyCall.json()

    const companyName = () => {
      for(let i = 0; i < companyCallData.length; i++) {
        if (ticker === companyCallData[i].symbol) {
          return companyCallData[i].description
        }
      }
    }


    const priceCall = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${FINNHUB_KEY}`)
    const priceData = await priceCall.json();

    const yearCall = await fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=price&token=${FINNHUB_KEY}`)
    const yearData = await yearCall.json()

    const valuationCall = await fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=valuation&token=${FINNHUB_KEY}`)
    const valuationData = await valuationCall.json()

    const perShareCall = await fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${ticker}&metric=perShare&token=${FINNHUB_KEY}`)
    const perShareData = await perShareCall.json()

    const newsCall = await fetch(`https://newsapi.org/v2/everything?q=${ticker}&apiKey=${NEWS_API_KEY}`);
    const newsData = await newsCall.json();

    if (ticker) {
      if (ticker === false) {
        await this.setState({
          name: undefined,
          symbol: undefined,
          price: undefined,
          closeYesterday: undefined,
          pe: undefined,
          yearHigh: undefined,
          yearLow: undefined,
          exchange: undefined,
          daychange: undefined,
          changepct: undefined,
          open: undefined,
          dayHigh: undefined,
          dayLow: undefined,
          mktCap:undefined,
          avgVol:undefined,
          eps:undefined,
          error: "invalid"
        });
    } else {
        await this.setState({
          name: companyName(),
          symbol: ticker,
          price: priceData.c,
          closeYesterday: priceData.pc,
          pe: valuationData.metric.peBasicExclExtraTTM,
          yearHigh: yearData.metric["52WeekHigh"],
          yearLow: yearData.metric["52WeekLow"],
//          exchange: data.data[0]["stock_exchange_short"],
          daychange: (priceData.c - priceData.pc).toFixed(2),
          changepct: (((priceData.c - priceData.pc)/priceData.pc)*100).toFixed(2),
          open: priceData.o,
          dayHigh: priceData.h,
          dayLow: priceData.l,
          mktCap: (yearData.metric.marketCapitalization)*1000000,
          avgVol: yearData.metric["10DayAverageTradingVolume"]*1000000,
          eps: perShareData.metric.epsInclExtraItemsTTM,
          dividendYield: yearData.metric.currentDividendYieldTTM,
          beta: yearData.metric.beta,

          error: "valid"
        });
      }
    }

    if (ticker) {
      if (ticker === false) {
        this.setState({
          articles: undefined,
        });
    } else {
        this.setState({
          articles: newsData.articles.map((i,index) => (               
            <div className='news-container' key={index}>
                <a className='article-container' id={'article-container-'+this.state.mode} key={i.url} href={i.url } target="_blank">
                    <p className="article-source" key={i.source.name}> { i.source.name } </p> 
                    <p className="article-title" key={i.title}> { i.title } </p> 
                    <div className='article-info'>
                        <p className="article" key={i.description}> { i.description } </p> 
                    </div>
                </a>
            </div>)
          )

        });
      }
    } else {
      this.setState({
        articles: undefined,
      });
    }

    if (ticker === false) {
      this.setState({
        name: undefined,
        symbol: undefined,
        price: undefined,
        closeYesterday: undefined,
        pe: undefined,
        yearHigh: undefined,
        yearLow: undefined,
        exchange: undefined,
        daychange: undefined,
        changepct: undefined,
        error: "invalid"
      });
    }

    if (this.state.toggle === "N") {
      this.setState({
        toggle: "Y"
      })
    } else {
      this.setState({
        toggle: "N"
      })
    }
  }

  changeMode({ target }) {
    const mode= target.checked ? 'dark' : 'light';

    this.setState({
      mode : mode
    });

    const background = target.checked ? {backgroundColor: "#1B1B1D"} : {backgroundColor: "white"};

    this.setState ({
      bg: background
    });
  }

  render() {
    return (
      <div className="app" style={this.state.bg}>

        <div className='wrapper' id={'wrapper-'+this.state.mode} name="top">

            <Navbar
              changeMode={this.changeMode}
              modeChanger={this.modeChanger}
              mode={this.state.mode}
              getTicker={this.getTicker} 
              mode={this.state.mode}
            />
            <Footer
              mode={this.state.mode}
            />

          <div className="main">
            <ModeChanger
              changeMode={this.changeMode}
              modeChanger={this.modeChanger}
              mode={this.state.mode}
            />



            <Enter
              name={this.state.name}
              mode={this.state.mode}
              getTicker={this.getTicker}
              error={this.state.error}
            />
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <StockTitle 
  
                  mode={this.state.mode}
                  getTicker={this.getTicker}
                  name={this.state.name} 
                  symbol={this.state.symbol}
                  price={this.state.price}
                  closeYesterday={this.state.closeYesterday}
                  pe={this.state.pe}
                  yearHigh={this.state.yearHigh}
                  yearLow={this.state.yearLow}
                  exchange={this.state.exchange}
                  daychange={this.state.daychange}
                  changepct={this.state.changepct}
                  error={this.state.error}
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <StockChart
                  mode={this.state.mode}
                  getTicker={this.getTicker}
                  symbol={this.state.symbol}
                  toggle={this.state.toggle}
                />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <StockData
                  mode={this.state.mode}
                  getTicker={this.getTicker}
                  name={this.state.name} 
                  symbol={this.state.symbol}
                  price={this.state.price}
                  closeYesterday={this.state.closeYesterday}
                  pe={this.state.pe}
                  yearHigh={this.state.yearHigh}
                  yearLow={this.state.yearLow}
                  exchange={this.state.exchange}
                  daychange={this.state.daychange}
                  changepct={this.state.changepct}
                  open= {this.state.open}
                  dayHigh= {this.state.dayHigh}
                  dayLow= {this.state.dayLow}
                  mktCap= {this.state.mktCap}
                  avgVol= {this.state.avgVol}
                  eps= {this.state.eps}
                  toggle={this.state.toggle}
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <Profile
                  mode={this.state.mode}
                  getTicker={this.getTicker}
                  name={this.state.name} 
                  symbol={this.state.symbol}
                  price={this.state.price}
                  closeYesterday={this.state.closeYesterday}
                  pe={this.state.pe}
                  yearHigh={this.state.yearHigh}
                  yearLow={this.state.yearLow}
                  exchange={this.state.exchange}
                  daychange={this.state.daychange}
                  changepct={this.state.changepct}
                  open= {this.state.open}
                  dayHigh= {this.state.dayHigh}
                  dayLow= {this.state.dayLow}
                  mktCap= {this.state.mktCap}
                  avgVol= {this.state.avgVol}
                  eps= {this.state.eps}
                  />
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col">
                <News
                  mode={this.state.mode}
                  getTicker={this.getTicker}
                  articles={this.state.articles}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
