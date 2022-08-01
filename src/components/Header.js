import React from 'react'
import NavBar from './NavBar'
import Logo from '../assets/logo.png'
import { useLocation } from '@reach/router'
import { StaticImage } from 'gatsby-plugin-image'

const Header = (props) => {
	const location = useLocation()
	return (
		<header className={`header ${location.pathname === '/' ? 'home' : 'inner-pages'}`}>
			{/*<img className={'logo'} src={Logo} alt='' />*/}
			<StaticImage
				className={'logo'}
				src='../assets/logo.png'
				layout='constrained'
				alt='איתן כבריאן'
				placeholder='none'
				quality={90}
			/>
			<NavBar pathname={location.pathname} />
		</header>
	)
}

export default Header
