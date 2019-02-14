import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.css"

const Header = ({ siteTitle }) => (
    <header className="header">
        <img className="header__image"/>
        <section className="header__intro">
        <h1 style={{ margin: 0 }}>
            {siteTitle}
        </h1>
        </section>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
