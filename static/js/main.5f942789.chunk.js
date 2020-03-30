(this["webpackJsonpstock-info"]=this["webpackJsonpstock-info"]||[]).push([[0],{14:function(e,a,t){e.exports=t(31)},19:function(e,a,t){},20:function(e,a,t){},31:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),i=t(11),n=t.n(i),o=(t(10),t(19),t(20),t(12)),s=t(8),c=t.n(s),d=t(13),m=t(3),g=t(4),h=t(6),p=t(5),v=t(2),E=t(7),b=t(1),y=function(e){return Math.abs(Number(e))>=1e9?Math.round(Math.abs(Number(e))/1e9*10)/10+"B":Math.abs(Number(e))>=1e6?Math.round(Math.abs(Number(e))/1e6*10)/10+"M":Math.abs(Number(e))>=1e3?Math.round(Math.abs(Number(e))/1e3*10)/10+"K":Math.abs(Number(e))},u=function(e){return l.a.createElement("div",{id:"info"},e.name&&l.a.createElement("div",{className:"stock-data"},l.a.createElement("div",{className:"stock-data-text-"+e.mode,id:"stock-data-text"},l.a.createElement("p",null," Open "),l.a.createElement("p",null," High "),l.a.createElement("p",null," Low ")),l.a.createElement("div",{className:"stock-data-values-"+e.mode,id:"stock-data-values"},l.a.createElement("p",null," ",e.open," "),l.a.createElement("p",null," ",e.dayHigh," "),l.a.createElement("p",null," ",e.dayLow," ")),l.a.createElement("div",{className:"stock-data-border-"+e.mode,id:"stock-data-border"}),l.a.createElement("div",{className:"stock-data-text-"+e.mode,id:"stock-data-text"},l.a.createElement("p",null," P/E "),l.a.createElement("p",null," EPS "),l.a.createElement("p",null," Mkt Cap ")),l.a.createElement("div",{className:"stock-data-values-"+e.mode,id:"stock-data-values"},l.a.createElement("p",null," ",e.pe," "),l.a.createElement("p",null," ",e.eps," "),l.a.createElement("p",null," ",y(e.mktCap)," ")),l.a.createElement("div",{className:"border-wrapper"},l.a.createElement("div",{className:"stock-data-border-"+e.mode,id:"stock-data-border"})),l.a.createElement("div",{className:"stock-data-text-"+e.mode,id:"stock-data-text"},l.a.createElement("p",null," 52 Wk H"),l.a.createElement("p",null," 52 Wk L"),l.a.createElement("p",null," Avg Vol ")),l.a.createElement("div",{className:"stock-data-values-"+e.mode,id:"stock-data-values"},l.a.createElement("p",null," ",e.yearHigh," "),l.a.createElement("p",null," ",e.yearLow," "),l.a.createElement("p",null," ",y(e.avgVol)," ")),l.a.createElement("div",{className:"stock-data-border-"+e.mode,id:"stock-data-border"}),l.a.createElement("div",{id:"technical-analysis",className:"technical-analysis"},e.symbol&&l.a.createElement("div",null,"Y"===e.toggle?l.a.createElement("div",{className:"technical-analysis-widget"},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TECHNICAL_ANALYSIS,widgetConfig:{interval:"1M",width:"100%",colorTheme:"light",isTransparent:!0,height:"400",symbol:e.symbol,showIntervalTabs:!0,locale:"en"}}),"dark"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TECHNICAL_ANALYSIS,widgetConfig:{interval:"1M",width:"100%",colorTheme:"dark",isTransparent:!0,height:"400",symbol:e.symbol,showIntervalTabs:!0,locale:"en"}})):l.a.createElement("div",null),"N"===e.toggle?l.a.createElement("div",{className:"technical-analysis-widget"},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TECHNICAL_ANALYSIS,widgetConfig:{interval:"1M",width:"100%",colorTheme:"light",isTransparent:!0,height:"400",symbol:e.symbol,showIntervalTabs:!0,locale:"en"}}),"dark"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TECHNICAL_ANALYSIS,widgetConfig:{interval:"1M",width:"100%",colorTheme:"dark",isTransparent:!0,height:"400",symbol:e.symbol,showIntervalTabs:!0,locale:"en"}})):l.a.createElement("div",null)))))},w=(t(26),function(e){return l.a.createElement("div",{id:"chart"},l.a.createElement("div",null,e.symbol&&l.a.createElement("div",null,"Y"===e.toggle?l.a.createElement("div",{className:"chart-widget"},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.MARKET_OVERVIEW,widgetConfig:{colorTheme:"light",dateRange:"1d",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!0,width:"100%",height:"400",plotLineColorGrowing:"rgb(47, 196, 141)",plotLineColorFalling:"rgb(229, 64, 18)",gridLineColor:"rgba(240, 243, 250, 0)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(87, 243, 144, 0.12)",belowLineFillColorFalling:"rgba(243, 15, 15, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)",tabs:[{title:"Stocks",symbols:[{s:e.symbol}]}]}}),"dark"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.MARKET_OVERVIEW,widgetConfig:{colorTheme:"dark",dateRange:"1d",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!0,width:"100%",height:"400",plotLineColorGrowing:"rgb(47, 196, 141)",plotLineColorFalling:"rgb(229, 64, 18)",gridLineColor:"rgba(240, 243, 250, 0)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(87, 243, 144, 0.12)",belowLineFillColorFalling:"rgba(243, 15, 15, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)",tabs:[{title:"Stocks",symbols:[{s:e.symbol}]}]}})):l.a.createElement("div",null),"N"===e.toggle?l.a.createElement("div",{className:"chart-widget"},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.MARKET_OVERVIEW,widgetConfig:{colorTheme:"light",dateRange:"1d",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!0,width:"100%",height:"400",plotLineColorGrowing:"rgb(47, 196, 141)",plotLineColorFalling:"rgb(229, 64, 18)",gridLineColor:"rgba(240, 243, 250, 0)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(87, 243, 144, 0.12)",belowLineFillColorFalling:"rgba(243, 15, 15, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)",tabs:[{title:"Stocks",symbols:[{s:e.symbol}]}]}}),"dark"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.MARKET_OVERVIEW,widgetConfig:{colorTheme:"dark",dateRange:"1d",showChart:!0,locale:"en",largeChartUrl:"",isTransparent:!0,width:"100%",height:"400",plotLineColorGrowing:"rgb(47, 196, 141)",plotLineColorFalling:"rgb(229, 64, 18)",gridLineColor:"rgba(240, 243, 250, 0)",scaleFontColor:"rgba(120, 123, 134, 1)",belowLineFillColorGrowing:"rgba(87, 243, 144, 0.12)",belowLineFillColorFalling:"rgba(243, 15, 15, 0.12)",symbolActiveColor:"rgba(33, 150, 243, 0.12)",tabs:[{title:"Stocks",symbols:[{s:e.symbol}]}]}})):l.a.createElement("div",null))))}),k=function(e){return l.a.createElement("form",{onSubmit:e.getTicker,className:"form-container"},l.a.createElement("input",{type:"text",name:"ticker",placeholder:"Enter Ticker (Ex: AAPL)",className:"input-nav",id:"input-mode-"+e.mode}),l.a.createElement("button",{className:"button-nav"},"+"))},N={display:"block"},T={display:"none"},C=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={navState:T},t.navToggler=l.a.createRef(),t.navToggle=t.navToggle.bind(Object(v.a)(t)),t}return Object(E.a)(a,e),Object(g.a)(a,[{key:"navToggle",value:function(){this.state.navState===T?this.setState({navState:N}):this.setState({navState:T}),console.log("toggle")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar",id:"nav-"+this.props.mode},l.a.createElement("div",{className:"nav-links"},l.a.createElement("header",{id:"top",className:"header"},l.a.createElement("a",{href:"#article-container-darktop",className:"page-title"}," Stock Info   ")),l.a.createElement("a",{id:"nav-link",href:"#chart"}," Chart "),l.a.createElement("a",{id:"nav-link",href:"#info"}," Info "),l.a.createElement("a",{id:"nav-link",href:"#news"}," News ")),l.a.createElement("input",{type:"checkbox",id:"nav-check",onClick:this.navToggle,ref:this.navToggler}),l.a.createElement("label",{className:"burger-label",for:"nav-check",id:"burger-label"},l.a.createElement("img",{src:"https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png",className:"burger",id:"burger-"+this.props.mode})),l.a.createElement(k,{getTicker:this.props.getTicker,mode:this.props.mode})),l.a.createElement("div",{className:"navlinksmobilewrapper",style:this.state.navState,id:"navlinksmobilewrapper-"+this.props.mode},l.a.createElement("div",{className:"nav-links-mobile"},l.a.createElement("header",{id:"top",className:"header"},l.a.createElement("a",{href:"#article-container-darktop",className:"page-title"}," Stock Info   ")),l.a.createElement("a",{id:"nav-link",href:"#chart"}," Chart "),l.a.createElement("a",{id:"nav-link",href:"#info"}," Info "),l.a.createElement("a",{id:"nav-link",href:"#news"}," News "))))}}]),a}(l.a.Component),f=function(e){return l.a.createElement("div",null,e.articles&&l.a.createElement("div",{id:"news"},l.a.createElement("div",{className:"news",id:"news-"+e.mode},l.a.createElement("h2",{className:"section-title",id:"section-title-"+e.mode},"News"),e.articles)))},S=function(e){return l.a.createElement("div",null,e.symbol&&l.a.createElement("div",{className:"price-bar",id:"price-bar-"+e.mode},e.symbol&&l.a.createElement("div",null,l.a.createElement("div",{className:"tickerMain",id:"tickerMain-"+e.mode}," ",e.symbol," "),l.a.createElement("div",{className:"stock-name",id:"stock-name-"+e.mode}," ",e.name),l.a.createElement("div",{className:e.price>e.closeYesterday?"stock_price_postiive":"stock_price_negative"}," ",e.price&&l.a.createElement("span",null,"$"),e.price," "),l.a.createElement("div",{className:"todayPrice",id:"todayPrice-"+e.mode},e.daychange&&l.a.createElement("p",null," Today:  ",l.a.createElement("span",{className:e.changepct>0?"smallpos":"smallneg"},e.daychange>0?"+$":"$",e.daychange)," (",l.a.createElement("span",{className:e.changepct>0?"smallpos":"smallneg"},e.changepct>0?"+":"",e.changepct,"%"),")")))))},L=function(e){return l.a.createElement("div",{className:"checkbox-container"},l.a.createElement("div",{className:"mode-switch-container-desktop"},l.a.createElement("input",{type:"checkbox",id:"mode-switch",onChange:e.changeMode,ref:e.modeChanger}),l.a.createElement("label",{for:"mode-switch",className:"toggle"},l.a.createElement("div",{className:"toggle-image"}),l.a.createElement("div",{className:"toggle-text"},l.a.createElement("div",{className:"toggle-image-dark"}),l.a.createElement("p",{className:"toggle-text-dark"},"Light"),l.a.createElement("p",{className:"toggle-text-light"},"Dark")))),l.a.createElement("div",{className:"mode-switch-container-mobile"},l.a.createElement("input",{type:"checkbox",id:"mode-switch-mobile",onChange:e.changeMode,ref:e.modeChanger}),l.a.createElement("label",{for:"mode-switch-mobile",className:"toggle-mobile"},l.a.createElement("img",{src:"https://simpleicon.com/wp-content/uploads/sun.png",id:"img-sun"}),l.a.createElement("img",{src:"https://static.thenounproject.com/png/595-200.png",id:"img-moon"}))))},A=function(e){return l.a.createElement("div",{className:"ticker-tape"},l.a.createElement("div",{className:"ticker-tape-"+e.mode},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TICKER_TAPE,widgetConfig:{symbols:[{proName:"OANDA:SPX500USD",title:"S&P 500"},{proName:"OANDA:NAS100USD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],colorTheme:"light",dateRange:"1d",locale:"en",largeChartUrl:"",isTransparent:!0,width:"100%",hide_legend:!0,displayMode:"regular"}}),"dark"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.TICKER_TAPE,widgetConfig:{symbols:[{proName:"OANDA:SPX500USD",title:"S&P 500"},{proName:"OANDA:NAS100USD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],colorTheme:"dark",isTransparent:!0,displayMode:"regular",locale:"en",hide_legend:!0,show_popup_button:!1,hide_top_toolbar:!0,largeChartUrl:"",height:"90"}})))},M=function(e){return l.a.createElement("div",null,"valid"!==e.error?l.a.createElement("div",{className:"enter-wrapper"},void 0===e.error&&l.a.createElement("div",{className:"enter"},l.a.createElement("div",{className:"enter-"+e.mode},l.a.createElement("form",{onSubmit:e.getTicker},l.a.createElement("input",{type:"text",name:"ticker",placeholder:"Enter Ticker",className:"enter-input",id:"enter-input-"+e.mode,onFocus:function(e){e.target.placeholder="",console.log(e.target)},onBlur:function(e){e.target.placeholder="Enter Ticker",console.log(e.target)}})))),"valid"!==e.error?l.a.createElement("div",{className:"enter"},l.a.createElement("div",{className:"enter-"+e.mode},l.a.createElement("h2",null," ",e.error," "))):l.a.createElement("div",null)):l.a.createElement("div",null))},_=function(e){return l.a.createElement("div",{className:"profile-wrapper"},e.name&&l.a.createElement("h2",{className:"section-title",id:"section-title-"+e.mode},"Profile"),e.name&&l.a.createElement("div",{id:"profile",className:"profile"},e.symbol&&l.a.createElement("div",{className:"profile-widget"},"light"===e.mode&&l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.COMPANY_PROFILE,widgetConfig:{symbol:e.symbol,width:"100%",height:"350",colorTheme:"light",isTransparent:!0,locale:"en"}}),"dark"===e.mode&&l.a.createElement("div",{className:"profile-widget"},l.a.createElement(b.TradingViewEmbed,{widgetType:b.widgetType.COMPANY_PROFILE,widgetConfig:{symbol:e.symbol,width:"100%",height:"350",colorTheme:"dark",isTransparent:!0,locale:"en"}})))))},x=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={name:void 0,symbol:void 0,price:void 0,closeYesterday:void 0,pe:void 0,yearHigh:void 0,yearLow:void 0,exchange:void 0,daychange:void 0,changepct:void 0,open:void 0,dayHigh:void 0,dayLow:void 0,mktCap:void 0,avgVol:void 0,eps:void 0,error:void 0,articles:void 0,mode:"light",bg:{backgroundColor:"white"},toggle:"N"},t.getTicker=function(){var e=Object(d.a)(c.a.mark((function e(a){var r,i,n,o,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),r=a.target.elements.ticker.value,e.next=4,fetch("https://api.worldtradingdata.com/api/v1/stock?symbol=".concat(r,"&api_token=").concat("2HhczAOftfU2TiYMAJepZcz5JrUVOVGlpLleKt9ZnGlyKvokZniHKmmBDvYD"));case 4:return i=e.sent,e.next=7,fetch("https://newsapi.org/v2/everything?q=".concat(r,"&apiKey=").concat("51cbba44e78c467ba6c8352767d4e971"));case 7:return n=e.sent,e.next=10,i.json();case 10:return o=e.sent,e.next=13,n.json();case 13:s=e.sent,r&&("Error! The requested stock(s) could not be found."==o.Message?t.setState({name:void 0,symbol:void 0,price:void 0,closeYesterday:void 0,pe:void 0,yearHigh:void 0,yearLow:void 0,exchange:void 0,daychange:void 0,changepct:void 0,open:void 0,dayHigh:void 0,dayLow:void 0,mktCap:void 0,avgVol:void 0,eps:void 0,error:"Enter valid ticker"}):t.setState({name:o.data[0].name,symbol:o.data[0].symbol,price:o.data[0].price,closeYesterday:o.data[0].close_yesterday,pe:o.data[0].pe,yearHigh:o.data[0]["52_week_high"],yearLow:o.data[0]["52_week_low"],exchange:o.data[0].stock_exchange_short,daychange:o.data[0].day_change,changepct:o.data[0].change_pct,open:o.data[0].price_open,dayHigh:o.data[0].day_high,dayLow:o.data[0].day_low,mktCap:o.data[0].market_cap,avgVol:o.data[0].volume_avg,eps:o.data[0].eps,error:"valid"})),r?"Error! The requested stock(s) could not be found."==o.Message?t.setState({articles:void 0}):t.setState({articles:s.articles.map((function(e,a){return l.a.createElement("div",{className:"news-container"},l.a.createElement("a",{className:"article-container",id:"article-container-"+t.state.mode,key:a,href:e.url,target:"_blank"},l.a.createElement("p",{className:"article-source"}," ",e.source.name," "),l.a.createElement("p",{className:"article-title"}," ",e.title," "),l.a.createElement("div",{className:"article-info"},l.a.createElement("p",{className:"article"}," ",e.description," "))))}))}):t.setState({articles:void 0}),"Error! The requested stock(s) could not be found."==o.Message&&t.setState({name:void 0,symbol:void 0,price:void 0,closeYesterday:void 0,pe:void 0,yearHigh:void 0,yearLow:void 0,exchange:void 0,daychange:void 0,changepct:void 0,error:"Enter valid ticker"}),"N"===t.state.toggle?t.setState({toggle:"Y"}):t.setState({toggle:"N"});case 18:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),t.modeChanger=l.a.createRef(),t.changeMode=t.changeMode.bind(Object(v.a)(t)),t}return Object(E.a)(a,e),Object(g.a)(a,[{key:"changeMode",value:function(e){var a=e.target,t=a.checked?"dark":"light";this.setState({mode:t});var r=a.checked?{backgroundColor:"#1B1B1D"}:{backgroundColor:"white"};this.setState({bg:r})}},{key:"render",value:function(){return l.a.createElement("div",{className:"app",style:this.state.bg},l.a.createElement(C,Object(o.a)({changeMode:this.changeMode,modeChanger:this.modeChanger,mode:this.state.mode,getTicker:this.getTicker},"mode",this.state.mode)),l.a.createElement("div",{className:"wrapper",id:"wrapper-"+this.state.mode},l.a.createElement("div",{className:"main"},l.a.createElement(L,{changeMode:this.changeMode,modeChanger:this.modeChanger,mode:this.state.mode}),l.a.createElement(A,{mode:this.state.mode}),l.a.createElement(M,{name:this.state.name,mode:this.state.mode,getTicker:this.getTicker,error:this.state.error}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(S,{mode:this.state.mode,getTicker:this.getTicker,name:this.state.name,symbol:this.state.symbol,price:this.state.price,closeYesterday:this.state.closeYesterday,pe:this.state.pe,yearHigh:this.state.yearHigh,yearLow:this.state.yearLow,exchange:this.state.exchange,daychange:this.state.daychange,changepct:this.state.changepct,error:this.state.error})))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(w,{mode:this.state.mode,getTicker:this.getTicker,symbol:this.state.symbol,toggle:this.state.toggle})))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(u,{mode:this.state.mode,getTicker:this.getTicker,name:this.state.name,symbol:this.state.symbol,price:this.state.price,closeYesterday:this.state.closeYesterday,pe:this.state.pe,yearHigh:this.state.yearHigh,yearLow:this.state.yearLow,exchange:this.state.exchange,daychange:this.state.daychange,changepct:this.state.changepct,open:this.state.open,dayHigh:this.state.dayHigh,dayLow:this.state.dayLow,mktCap:this.state.mktCap,avgVol:this.state.avgVol,eps:this.state.eps,toggle:this.state.toggle})))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(_,{mode:this.state.mode,getTicker:this.getTicker,name:this.state.name,symbol:this.state.symbol,price:this.state.price,closeYesterday:this.state.closeYesterday,pe:this.state.pe,yearHigh:this.state.yearHigh,yearLow:this.state.yearLow,exchange:this.state.exchange,daychange:this.state.daychange,changepct:this.state.changepct,open:this.state.open,dayHigh:this.state.dayHigh,dayLow:this.state.dayLow,mktCap:this.state.mktCap,avgVol:this.state.avgVol,eps:this.state.eps})))),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement(f,{mode:this.state.mode,getTicker:this.getTicker,articles:this.state.articles})))))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5f942789.chunk.js.map