import React, { useState } from "react"
import { Link } from "gatsby"

import './Nav.scss';

const Nav = () => {
    const [menuActive, setMenuState] = useState(false);
    let isActive, isOpened, isColored, isHidden;

    if(!menuActive) {
        isActive = 'navTrigger';
        isOpened = {height:'0%'}
    } else {
        isActive = 'navTrigger active'
        isOpened = {height:'100%'}
        isColored = {backgroundColor: '#FFFFFF'}
    }
    
    return (
        <nav className="nav">
            <div className={isActive} role="button" onClick={() => setMenuState((prevMenuActive) => !prevMenuActive)}>
                <i style={isColored}></i>
                <i style={isColored}></i>
                <i style={isColored}></i>
            </div>
            <div id="myNav" className="overlay" style={isOpened}>
                <div className="overlay-content">
                    <Link to="/"><div className="logo"></div></Link>
                    <Link to="/o-mnie">O mnie</Link> 
                    <Link to="/FAQ">FAQ</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/oferta">Oferta</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
