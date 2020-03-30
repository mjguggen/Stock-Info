import React from "react";




const Form = props => (

    <form onSubmit={props.getTicker} className='form-container'>
        
        <input type="text" name="ticker" placeholder="Enter Ticker (Ex: AAPL)" className="input-nav" id={"input-mode-"+props.mode}></input>
        <button className="button-nav">+</button>
    </form>
);

export default Form;