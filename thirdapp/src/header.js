import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="header">
            <div id="brand">
                Developer Funnel
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div id="social">
                <a href="https://facebook.com/">
                    <img src="https://i.ibb.co/wyH9JxS/facebook.png" alt="facebook" className="socialImg"/>
                </a>
                <a href="https://Instagram.com/">
                    <img src="https://i.ibb.co/w0kZ5Hf/insta.png" alt="instagram" className="socialImg"/>
                </a>
            </div>
        </div>
    )
}

export default Header

