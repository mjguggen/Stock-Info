import React from 'react';



import { TradingViewEmbed, widgetType } from "react-tradingview-embed";

const Profile = (props) => (


    <div className='profile-wrapper'>
        { props.name && <h2 className='section-title' id={'section-title-'+props.mode}>Profile</h2>}

        {props.name &&
            <div id="profile" className="profile">
            {props.symbol &&
            <div className='profile-widget'>
                {props.mode === 'light' &&
                <TradingViewEmbed
                widgetType={widgetType.COMPANY_PROFILE}
                widgetConfig={
                    {
                        "symbol": props.symbol,
                        "width": "100%",
                        "height": "350",
                        "colorTheme": "light",
                        "isTransparent": true,
                        "locale": "en"
                    }
                }
                />
            }
            {props.mode === 'dark' &&
                <div className='profile-widget'>

                <TradingViewEmbed
                widgetType={widgetType.COMPANY_PROFILE}
                widgetConfig={
                    {
                        "symbol": props.symbol,
                        "width": "100%",
                        "height": "350",
                        "colorTheme": "dark",
                        "isTransparent": true,
                        "locale": "en"
                    }

                }
                />
                </div>
            }
            </div>
            } 
            </div>
        }

    </div>
);


export default Profile