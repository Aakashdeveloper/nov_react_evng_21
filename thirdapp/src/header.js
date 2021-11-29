import React from 'react';
import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <div id="brand">
                Developer Funnel
            </div>
            <div id="social">
                <a href="https://facebook.com/">
                    <img src="images/facebook.png" alt="facebook" className="socialImg"/>
                </a>
                <a href="https://Instagram.com/">
                    <img src="images/insta.png" alt="instagram" className="socialImg"/>
                </a>
            </div>
        </div>
    )
}

export default Header

