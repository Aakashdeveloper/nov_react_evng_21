import React,{Fragment,Component} from 'react';
import './header.css'

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">React App</div>
                    <center>
                        <input/>
                        <div style={{color:'white',fontSize:'16px'}}>User Input here</div>
                    </center>
                </header>
                <hr/>
            </Fragment>
        )
    }
}


export default Header;