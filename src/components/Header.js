import React from 'react'
import NavBar from './NavBar'
import Logo from '../assets/logo.png'
import { useLocation } from '@reach/router'

const Header = (props) => {
	const location = useLocation()
	return (
		<header className={`header ${location.pathname === '/' ? 'home' : 'inner-pages'}`}>
			<img className={'logo'} src={Logo} alt='' />
			<NavBar pathname={location.pathname} />
		</header>
	)
}

export default Header
