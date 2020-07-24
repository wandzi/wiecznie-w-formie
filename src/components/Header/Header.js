import React from "react"
import PropTypes from "prop-types"

import Nav from '../Nav/Nav'
import './Header.scss';

function Header({ siteTitle }){
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
