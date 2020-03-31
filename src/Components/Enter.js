import React from 'react';


const Enter = (props) => {

    const hidePlaceholder = (event) => {
        event.target.placeholder = ""
    }

    const showPlaceholder = (event) => {
        event.target.placeholder = "Enter Ticker"
    }


    return (
        <div>
            {props.error !== "valid" ? (
                <div className="enter-wrapper">
                    {props.error === undefined &&
                    <div className="enter"> 
                        <div className={"enter-"+props.mode}>
                            <form onSubmit={props.getTicker}>
                            <input type="text" name="ticker" placeholder="Enter Ticker" className="enter-input" id={"enter-input-"+props.mode} onFocus={hidePlaceholder} onBlur={showPlaceholder}></input>
                            </form>
                        </div>
                    </div>
                    }

                    {props.error === "invalid" ? 
                    <div className="enter"> 
                        <div className={"enter-"+props.mode}>
                            <form onSubmit={props.getTicker}>
                            <input type="text" name="ticker" placeholder="Ticker Not Valid" className="enter-input" id={"enter-input-"+props.mode} onFocus={hidePlaceholder} onBlur={showPlaceholder}></input>
                            </form>
                        </div>
                    </div> : (<div /> )
                    }
                </div>
            ) : <div/>
            }
        </div>  
    )  
}



export default Enter;