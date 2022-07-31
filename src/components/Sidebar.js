import React from 'react'
// import PropTypes from 'prop-types'
// import Link from 'gatsby-link'
import piskeiDin from '../assets/piske2.png'
import contactText from '../assets/contact2.png'

class Sidebar extends React.Component {
    render() {
        return (
            <aside className={`sidebar`}>
                <div className='top-block'>
                    <p className='mb5'>
                        ז'בוטינסקי 35 רמת גן - התאומים 2
                    </p>
                    <h2>
                        <p className='mb5'>משרד : 03-5289222</p>
                        <p>נייד : 054-3986802</p>
                    </h2>
                </div>
                <div className="bottom-block">

                    <h3 className={'sidebar-title f24 fw600'}>תחומי עיסוק</h3>

                    <ul className="piskei-list line-icon mt30 mb40 pb40">
                        <li>
                            <span className="separator level2"><span>עבירות סמים </span></span></li>
                        <li>
                            <span className="separator level2"><span>אלימות במשפחה</span></span></li>
                        <li>
                            <span className="separator level2"><span>אלימות</span></span></li>
                        <li>
                            <span className="separator level2"><span>עבירות רכוש</span></span></li>
                        <li>
                            <span className="separator level2"><span>עבירות מין</span></span></li>
                        <li>
                            <span>עבירות המתה</span></li>
                        <li>
                            <span>נוער</span></li>
                        <li>
                            <span>עבירות כלכליות</span></li>
                        <li>
                            <span>ארגוני פשיעה</span></li>
                        <li>
                            <span>הסגרה</span></li>
                        <li><span>מוסר</span></li>
                        <li><span>עבירות צבאיות</span></li>

                    </ul>

                    {/*<img src={contactText} alt=""/>*/}
                </div>
            </aside>
        )
    }
}

export default Sidebar