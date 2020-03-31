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


const WORLDTRADINGDATA_API_KEY = "2HhczAOftfU2TiYMAJepZcz5JrUVOVGlpLleKt9ZnGlyKvokZniHKmmBDvYD";
const WORLDTRADINGDATA_API_KEY2 = "C7pRFbXZRf9nVgqvcoGzdKfsR0zex2TsoR9tJ1Qlimo6NbYitsBOrOjJU4DS";
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
    const ticker = e.target.elements.ticker.value;
    const api_call = await fetch(`https://api.worldtradingdata.com/api/v1/stock?symbol=${ticker}&api_token=${WORLDTRADINGDATA_API_KEY}`);
    const api_call2 = await fetch(`https://newsapi.org/v2/everything?q=${ticker}&apiKey=${NEWS_API_KEY}`);
    const data = await api_call.json();
    const data2 = await api_call2.json();

    if (ticker) {
      if (data["Message"] == "Error! The requested stock(s) could not be found.") {
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
          open: undefined,
          dayHigh: undefined,
          dayLow: undefined,
          mktCap:undefined,
          avgVol:undefined,
          eps:undefined,
          error: "invalid"
        });
    } else {
        this.setState({
          name: data.data[0].name,
          symbol: data.data[0].symbol,
          price: data.data[0].price,
          closeYesterday: data.data[0]["close_yesterday"],
          pe: data.data[0].pe,
          yearHigh: data.data[0]["52_week_high"],
          yearLow: data.data[0]["52_week_low"],
          exchange: data.data[0]["stock_exchange_short"],
          daychange: data.data[0]["day_change"],
          changepct: data.data[0]["change_pct"],
          open: data.data[0]["price_open"],
          dayHigh: data.data[0]["day_high"],
          dayLow: data.data[0]["day_low"],
          mktCap: data.data[0]["market_cap"],
          avgVol: data.data[0]["volume_avg"],
          eps: data.data[0]["eps"],
          error: "valid"
        });
      }
    }

    if (ticker) {
      if (data["Message"] == "Error! The requested stock(s) could not be found.") {
        this.setState({
          articles: undefined,
        });
    } else {
        this.setState({
          articles: data2.articles.map((i,index) => (               
            <div className='news-container'>
                <a className='article-container' id={'article-container-'+this.state.mode} key={index} href={i.url } target="_blank">
                    <p className="article-source"> { i.source.name } </p> 
                    <p className="article-title"> { i.title } </p> 
                    <div className='article-info'>
                        <p className="article"> { i.description } </p> 
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

    if (data["Message"] == "Error! The requested stock(s) could not be found.") {
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

        <div className='wrapper' id={'wrapper-'+this.state.mode}>

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
