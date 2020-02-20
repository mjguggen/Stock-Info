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
const ALPHAVANTAGE_API_Key = "O11EQ8J01EQY0UZ1"



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

    source: undefined,
    title: undefined,
    url: undefined,
    image: undefined,
    description: undefined,

    source1: undefined,
    title1: undefined,
    url1: undefined,
    image1: undefined,
    description1: undefined,

    source2: undefined,
    title2: undefined,
    url2: undefined,
    image2: undefined,
    description2: undefined,

    source3: undefined,
    title3: undefined,
    url3: undefined,
    image3: undefined,
    description3: undefined,

    source4: undefined,
    title4: undefined,
    url4: undefined,
    image4: undefined,
    description4: undefined,

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
          error: "Enter valid ticker"
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

          source: undefined,
          title: undefined,
          url: undefined,
          image: undefined,
          description: undefined,
          content: undefined,
          source1: undefined,
          title1: undefined,
          url1: undefined,
          image1: undefined,
          description1: undefined,
          source2: undefined,
          title2: undefined,
          url2: undefined,
          image2: undefined,
          description2: undefined,
      
          source3: undefined,
          title3: undefined,
          url3: undefined,
          image3: undefined,
          description3: undefined,
      
          source4: undefined,
          title4: undefined,
          url4: undefined,
          image4: undefined,
          description4: undefined,
        });
    } else {
        this.setState({
            source: data2.articles[0]["source"].name,
            title: data2.articles[0].title,
            url: data2.articles[0].url,
            image: data2.articles[0].urlToImage,
            description: data2.articles[0].description,
            source1: data2.articles[1]["source"].name,
            title1: data2.articles[1].title,
            url1: data2.articles[1].url,
            image1: data2.articles[1].urlToImage,
            description1: data2.articles[1].description,
            source2: data2.articles[2]["source"].name,
            title2: data2.articles[2].title,
            url2: data2.articles[2].url,
            image2: data2.articles[2].urlToImage,
            description2: data2.articles[2].description,
            source3: data2.articles[3]["source"].name,
            title3: data2.articles[3].title,
            url3: data2.articles[3].url,
            image3: data2.articles[3].urlToImage,
            description3: data2.articles[3].description,
            source4: data2.articles[4]["source"].name,
            title4: data2.articles[4].title,
            url4: data2.articles[4].url,
            image4: data2.articles[4].urlToImage,
            description4: data2.articles[4].description,
        });
      }
    } else {
      this.setState({
        source: undefined,
        title: undefined,
        url: undefined,
        image: undefined,
        description: undefined,
        content: undefined,
        source1: undefined,
        title1: undefined,
        url1: undefined,
        image1: undefined,
        description1: undefined,
        source2: undefined,
        title2: undefined,
        url2: undefined,
        image2: undefined,
        description2: undefined,
    
        source3: undefined,
        title3: undefined,
        url3: undefined,
        image3: undefined,
        description3: undefined,
    
        source4: undefined,
        title4: undefined,
        url4: undefined,
        image4: undefined,
        description4: undefined,
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
        error: "Please enter valid ticker"
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
          
          <ModeChanger
            changeMode={this.changeMode}
            modeChanger={this.modeChanger}
            mode={this.state.mode}
          />

          <Footer
            mode={this.state.mode}
          />

          <div className="main">
            <Enter
              name={this.state.name}
              mode={this.state.mode}
              ticker={this.getTicker}
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
                  source={this.state.source}
                  title={this.state.title}
                  url={this.state.url}
                  image={this.state.image}
                  description={this.state.description}
                  source1={this.state.source1}
                  title1={this.state.title1}
                  url1={this.state.url1}
                  image1={this.state.image1}
                  description1={this.state.description1}
                  source2={this.state.source2}
                  title2={this.state.title2}
                  url2={this.state.url2}
                  image2={this.state.image2}
                  description2={this.state.description2}
                  source3={this.state.source3}
                  title3={this.state.title3}
                  url3={this.state.url3}
                  image3={this.state.image3}
                  description3={this.state.description3}
                  source4={this.state.source4}
                  title4={this.state.title4}
                  url4={this.state.url4}
                  image4={this.state.image4}
                  description4={this.state.description4}
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
