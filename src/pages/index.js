import React from 'react'
import Helmet from 'react-helmet'
import EitanImage from '../assets/eitan.jpg'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => (
	<Layout>
		<div className='content'>
			<Helmet title={`משרד עו"ד איתן כבריאן`}></Helmet>
			<div className='row'>
				<div className='col-sm'>
					<h1 className='home-title mt20 mb20'>עורך דין פלילי איתן כבריאן</h1>
					<p>
						עו"ד איתן כבריאן הינו בוגר תואר למשפטים (LL.B) אשר סיים את לימודיו בהצטיינות ייתרה. עו"ד
						איתן כבריאן החל את דרכו בשנת 2004 כשכיר במשרד מן השורה הראשונה בת"א, תחילה כמתמחה ולאחר
						מכן כעורך דין פלילי. לעו"ד איתן כבריאן הצלחות רבות לאורך הקריירה בתיקים פליליים מורכבים
						ומתוקשרים לרבות זיכויים בתיקי רצח, הישגים מרשימים בתיקי פשע חמור וכן בתיקים שהתנהלו
						בערכאות הגבוהות של בתי המשפט לרבות בבתי משפט מחוזיים ובבית המשפט העליון.
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

			<div className='row'>
				<div className='col-sm'>
					<p>
						<br />
						במהלך השנים זכה עו"ד איתן כבריאן להוקרה רבה וצבר מוניטין מכובד בזכות הצלחותיו ובשל אופי
						העבודה והרצינות שמשרדו משדר הן בבתי המשפט והן מול הגופים השונים איתם הוא במגע במהלך
						העבודה השוטפת. מעבר לתוצאות המוצלחות, שביעות רצון לקוחות המשרד נובעת בעיקר מתפיסת עולם
						הגורסת כי יש להתייחס מבחינה מקצועית בכובד ראש לכל תיק ותיק תוך שימת הדגש לפרטים הקטנים
						והענקת טיפול יסודי ואישי ללקוח, מתוך נאמנות לשירות מסור ולמאבק בלתי מתפשר עבורו ועבור
						האינטרסים החשובים לו.
					</p>
					<p>עורך דין פלילי איתן כבריאן, הינו סגן יו"ר הפורום הפלילי מטעם לשכת עורכי הדין.</p>
				</div>
			</div>
		</div>
	</Layout>
)

export default IndexPage
