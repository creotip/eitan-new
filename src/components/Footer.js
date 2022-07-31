import React from 'react'
import twinImage from '../assets/twin-ramat-gan.jpg'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer text-center pt20">
                <div className="footer-contact">
                    <div className="row">
                        <div className="col-sm-6 d-none d-sm-block">
                            <div className="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.464811568101!2d34.8037444155449!3d32.08372112631676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4bc7f36baccd%3A0x136254f277ec42da!2sTwin+Towers!5e0!3m2!1sen!2sil!4v1512073279037"
                                    width="600" height="400" frameBorder="0" style={{border: "0"}} allowFullScreen/>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-7 text-right">
                                    <h3 className={`mb20`}>צור קשר</h3>
                                    <p className={`white mb10`}>ז'בוטינסקי 35 רמת גן - התאומים 2</p>
                                    <p className={`white mb10`}>נייד : 054-3986802</p>
                                    <p className={`white mb10`}>משרד: 03-5289222</p>
                                    <p className={`white mb10`}>פקס: 03-5757034</p>
                                </div>
                                <div className="col-sm-5">
                                    <div className={`mt40`}>
                                        <img src={twinImage} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="wrap-footer">
                        <span className="text-muted">
                    כל הזכויות שמורות © משרד עורכי דין איתן כבריאן
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer