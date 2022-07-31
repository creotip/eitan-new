import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Logo from '../assets/ecp-logo.svg'

const NavBar = (props) => (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">

        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
                <li
                    className={props.pathname === '/' ? 'nav-item active' : 'nav-item'}
                >
                    <Link to="/" className="nav-link">
                        ראשי
                    </Link>
                </li>
                <li className={props.pathname === '/about/' ? 'nav-item active' : 'nav-item'}>
                    <Link to="/about/" className="nav-link">
                        אודות המשרד
                    </Link>
                </li>
                <li className={props.pathname === '/posts/' ? 'nav-item active' : 'nav-item'}>
                    <Link to="/posts/" className="nav-link">
                        מהתקשורת
                    </Link>
                </li>

                <li className={props.pathname === '/contact/' ? 'nav-item active' : 'nav-item'}>
                    <Link to="/contact/" className="nav-link">
                        צור קשר
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)

NavBar.propTypes = {
    pathname: PropTypes.any
}

export default NavBar