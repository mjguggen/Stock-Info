import React from 'react'
import Form from '../Components/Form'




const navOn = {
    display: 'block'
}

const navOff = {
    display: 'none',
}


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.navToggler = React.createRef();
        this.navToggle = this.navToggle.bind(this);
      }
    
    state = {
        navState : navOff
    }

    navToggle() {
        if (this.state.navState === navOff){
            this.setState({
            navState : navOn
            })
        } else {
            this.setState({
                navState: navOff
            })
        }
    }

    scroll() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        return (
            <div>
                <nav className={"navbar"} id={'nav-'+this.props.mode}> 
                    <div className='nav-links'>
                        <a href="#" className="header"> Stock Info   </a>
                        <a id="nav-link" href="#StockTitle" > Chart </a>
                        <a id="nav-link" href="#info" > Info </a>
                        <a id="nav-link" href="#news" > News </a>
                    </div>
        
                    <input type="checkbox" id="nav-check" onClick={this.navToggle} ref={this.navToggler}/> 
        
                    <label className="burger-label" for="nav-check" id="burger-label">
                        <img src='https://www.stickpng.com/assets/images/588a6507d06f6719692a2d15.png' className="burger" id={"burger-"+this.props.mode} />
                    </label>
        
                    <Form
                        getTicker={this.props.getTicker} 
                        mode={this.props.mode}
                    />
        
                </nav>
    
            <div className='navlinksmobilewrapper' style={this.state.navState} id={"navlinksmobilewrapper-"+this.props.mode}>
                <div className='nav-links-mobile'>
                    <header id="top"  className='header'> 
                        <a href="#article-container-darktop" className="page-title"> Stock Info   </a>
                    </header> 
                    <a id="nav-link" href="#chart" > Chart </a>
                    <a id="nav-link" href="#info" > Info </a>
                    <a id="nav-link" href="#news" > News </a>
                </div>
            </div>
        </div>
        )
    }
}

export default Navbar;