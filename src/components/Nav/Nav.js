import React, { useState } from "react"
import { Link } from "gatsby"

import './Nav.scss';

const Nav = () => {
    const [menuActive, setMenuState] = useState(false);
    let isActive;

    if(!menuActive) {
        isActive = 'navTrigger';
    } else {
        isActive = 'navTrigger active'
    }
    
    return (
        <nav className="nav">
            <div className={isActive} onClick={() => setMenuState((prevMenuActive) => !prevMenuActive)}>
                <i></i>
                <i></i>
                <i></i>
            </div>
            <div id="myNav" className="overlay">
            <i className="material-icons closebtn">close</i>
                <div className="overlay-content">
                    <div className="logo"></div>
                    <Link to="/o-mnie">O mnie</Link> 
                    <Link to="/faq">FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/oferta">Oferta</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
