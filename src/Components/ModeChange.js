import React from 'react';



const ModeChanger = (props) => (
    <div className='checkbox-container'>
        <div className="mode-switch-container-desktop">
            <input type='checkbox' id='mode-switch' onChange={props.changeMode} ref={props.modeChanger}/> 
            <label for='mode-switch' className='toggle'>
                <div className='toggle-image'></div>
                <div className='toggle-text'>
                    <div className='toggle-image-dark'></div>
                    <p className='toggle-text-dark'>Light</p>
                    <p className='toggle-text-light'>Dark</p>
                </div>
            </label>
        </div>

        <div className="mode-switch-container-mobile" >
            <input type='checkbox' id='mode-switch-mobile' onChange={props.changeMode} ref={props.modeChanger}/> 
            <label for='mode-switch-mobile' className='toggle-mobile'>
                <img src='https://simpleicon.com/wp-content/uploads/sun.png' id='img-sun'/>
                <img src='https://static.thenounproject.com/png/595-200.png' id='img-moon' />
            </label>

        </div>

    </div>
)


export default ModeChanger