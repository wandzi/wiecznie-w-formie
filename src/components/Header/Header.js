import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import Nav from '../Nav/Nav'
import './Header.scss';

function Header({ siteTitle }){
  
  const [ height, setHeight ] = useState(0);

  function toggleNav() {
    
  }

  return (
    <header className="header">
      <Nav />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
