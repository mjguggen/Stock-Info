import React from 'react';


const Enter = (props) => {

    const hidePlaceholder = (event) => {
        event.target.placeholder = ""
        console.log(event.target)
    }

    const showPlaceholder = (event) => {
        event.target.placeholder = "Enter Ticker"
        console.log(event.target)
    }


    return (
        <div>
            {props.error !== "valid" ? (
                <div className="enter-wrapper">
                    {props.error === undefined &&
                    <div className="enter"> 
                        <div className={"enter-"+props.mode}>
                            {/* 
                            <h1 > Enter a Ticker </h1>  
                            */}
                            <form onSubmit={props.getTicker}>
                            <input type="text" name="ticker" placeholder="Enter Ticker" className="enter-input" id={"enter-input-"+props.mode} onFocus={hidePlaceholder} onBlur={showPlaceholder}></input>
                            </form>
                        </div>
                    </div>
                    }

                    {props.error !== "valid" ? (
                    <div className="enter"> 
                        <div className={"enter-"+props.mode}>
                            <h2> {props.error} </h2>  
                        </div>
                    </div> ) : (
                        <div /> 
                    )
                    }
                </div>
            ) : <div/>
            }
        </div>  
    )  
}



export default Enter;