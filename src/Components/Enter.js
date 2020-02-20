import React from 'react';

const Enter = (props) => (

    <div>
        {props.error !== "valid" ? (
            <div className="enter-wrapper">
                {props.error === undefined &&
                <div className="enter"> 
                    <div className={"enter-"+props.mode}>
                        <h1 > Enter a Ticker </h1>  
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



export default Enter;