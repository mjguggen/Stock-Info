import React from "react";

const hidePlaceholder = (event) => {
    event.target.placeholder = ""
}

const showPlaceholder = (event) => {
    event.target.placeholder = "Enter Ticker"
}


const Form = props => (



    <form onSubmit={props.getTicker} className='form-container'>
        
        <input type="text" name="ticker" placeholder="Enter Ticker (Ex: AAPL)" className="input-nav" id={"input-mode-"+props.mode} onFocus={hidePlaceholder} onBlur={showPlaceholder}></input>
        <button className="button-nav">+</button>
    </form>
);

export default Form;