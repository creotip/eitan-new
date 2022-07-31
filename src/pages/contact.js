import React from 'react'
import Helmet from 'react-helmet'
import twinImage from '../assets/twin-ramat-gan.jpg'
import Layout from '../components/layout'

const Contact = () => (
	<Layout>
		<div className='content'>
			<Helmet title={`צור קשר | משרד עו"ד איתן כבריאן`}>
				<meta
					name='description'
					content={
						'אתם מוזמנים ליצור קשר עם עו״ד איתן כבריאן, לבוא למשרד לכוס קפה ולקבל יעוץ ושירות אדיב'
					}
				/>
			</Helmet>
			<div className='row'>
				<div className='col-sm'>
					<h1 className='home-title mt20 mb20'>צור קשר</h1>
				</div>
			</div>
			<div className='row mb30'>
				<div className='col-sm-6'>
					<p className='f19'>ז'בוטינסקי 35 רמת גן - התאומים 2</p>
					<p>נייד : 054-3986802</p>

					<p>משרד: 03-5289222</p>
					<p>פקס: 03-5757034</p>
				</div>
				<div className='col-sm-6'>
					<img src={twinImage} alt='' />
				</div>
			</div>

			<div className='row'>
				<div className='col-sm'>
					<h3 className='mb20'>מפת הגעה</h3>
					<div className='map'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.464811568101!2d34.8037444155449!3d32.08372112631676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bc7f36baccd%3A0x136254f277ec42da!2sTwin+Towers!5e0!3m2!1sen!2sil!4v1512073279037'
							width='600'
							height='400'
							frameBorder='0'
							style={{ border: '0' }}
							allowFullScreen
						/>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default Contact
