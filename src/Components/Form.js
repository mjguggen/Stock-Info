import React from "react";


const currentTicker = null



const Form = props => (

    <form onSubmit={props.getTicker} className='form-container'>
        
        <input type="text" name="ticker" placeholder="Enter Ticker (Ex: AAPL)" className="input-sm" id={"input-mode-"+props.mode}></input>
        <button>+</button>
    </form>
);

export default Form;