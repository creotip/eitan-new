import React from 'react'
import aboutBanner from '../assets/amro.jpg'
import eitanImage from '../assets/eitan.jpg'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const About = () => (
	<Layout>
		<div className='content'>
			<Helmet title={`אודות | עו"ד איתן כבריאן`}>
				<meta
					name='description'
					content={
						'משרד עורך דין פלילי איתן כבריאן מעניק לכלל לקוחותיו שירותים משפטיים מקצועיים ובלתי מתפשרים ברמה הגבוהה ביותר'
					}
				/>
			</Helmet>
			<div className='row'>
				<div className='col-sm-12'>
					<img src='../assets/amro.jpg' alt='' />
					<StaticImage
						src='../assets/amro.jpg'
						layout='constrained'
						alt='איתן כבריאן'
						placeholder='tracedSVG'
						quality={80}
					/>
					<h1 className='home-title mt20 mb20'>משרד עורך דין פלילי איתן כבריאן</h1>
				</div>
				<div className='col-sm-7'>
					<p>
						משרד עורך דין פלילי איתן כבריאן מעניק לכלל לקוחותיו שירותים משפטיים מקצועיים ובלתי
						מתפשרים ברמה הגבוהה ביותר החל משלב הייעוץ ללקוח טרם החקירה במשטרה, ייצוג בבתי המשפט
						בהליכי מעצר ושחרור, ניהול תיקים פליליים, הופעה מול ערכאת הערעור, ניהול הליכי שימוע טרם
						הגשת כתב אישום מול גופי התביעה השונים, טיפול בעתירות אסירים , הופעה בפני וועדות שחרורים
						בבתי הסוהר, מחיקת רישום פלילי והגשת בקשות חנינה. בנוסף, מטפל המשרד בתיקים מתחום המשפט
						הצבאי (פלילי) ומייצג חיילים אשר הסתבכו בפלילים במסגרת הצבאית ועניינם נדון בבתי הדין
						הצבאיים. כמו כן, משרד עורך דין פלילי איתן כבריאן מתמחה בתחום דיני הסגרה בארץ ובחו"ל.
					</p>
					<p>
						משרד עורך דין פלילי איתן כבריאן מאמין בהענקת טיפול יסודי ואישי ללקוחותיו, מתוך נאמנות
						לשירות מסור ולמאבק מקצועי ובלתי מתפשר.
					</p>
				</div>
				<div className='col-sm-5'>
					<StaticImage
						src='../assets/eitan.jpg'
						layout='constrained'
						width={220}
						alt='איתן כבריאן'
						placeholder='tracedSVG'
						quality={80}
					/>
				</div>
			</div>
		</div>
	</Layout>
)

export default About
