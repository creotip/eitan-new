import React, { useState } from 'react'
import config from '../../SiteConfig'
import Helmet from 'react-helmet'
import navIcon from '../assets/nav-icon.svg'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import './main.scss'
import { Link } from 'gatsby'

const Layout = ({ children, ...props }) => {
	const [open, setOpen] = useState(false)

	const handleNav = (e) => {
		setOpen(!open)
	}

	return (
		<div dir={'rtl'}>
			<Helmet>
				<title>{`${config.siteTitle}`}</title>
				<meta name='description' content={config.siteDescription} />
			</Helmet>
			<div className='app-wrap container-fluid relative'>
				<Header {...props} />
				<div className='main-sidebar'>
					<Sidebar />
				</div>

				<div className='row'>
					<div className='col-sm-12'>
						<div className={'main-content p20'}>{children}</div>
					</div>
				</div>

				<Footer />

				<div onClick={handleNav} className={`nav-touch d-sm-none`}>
					<img src={navIcon} alt='' />
				</div>

				<div className={`nav-touch-content ${open ? 'open' : 'closed'}`}>
					<ul>
						<li onClick={handleNav}>
							<Link to={`/`}>ראשי</Link>
						</li>
						<li onClick={handleNav}>
							<Link to={`/about`}>אודות המשרד</Link>
						</li>
						<li onClick={handleNav}>
							<Link to={`/posts`}>מהתקשורת</Link>
						</li>
						<li onClick={handleNav}>
							<Link to={`/contact`}>צור קשר</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Layout
