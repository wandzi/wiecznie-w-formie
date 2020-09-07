import React from "react"

import Logo from '../../images/logo.svg'
import phoneIcon from '../../images/icons/phone-icon.svg'
import mailIcon from '../../images/icons/mail-icon.svg'
import facebookIcon from '../../images/icons/facebook-icon.svg'
import instagramIcon from '../../images/icons/instagram-icon.svg'
import './ContactMe.scss'


const ContactMe = () => (
    <section className="contact-me">
        <h1 className="contact-me__kicker">Kontakt</h1>
        <img src={Logo} alt="logo" className="contact-me__logo"/>
        <div className="contact-me__info">
            <a href="tel:723-518-059" className="info__detail">
                <img src={phoneIcon} alt="phone-icon" className="info__icon"></img>
                <p>723-518-059</p>
            </a>
            <a href="mailto:kontakt@wiecznie-w-formie.pl" className="info__detail">
                <img src={mailIcon} alt="mail-icon" className="info__icon"></img>
                <p>kontakt@wiecznie-w-formie.pl</p>
            </a>
            <div className="info__social-container">
                <a href="https://www.instagram.com/wiecznie_w_formie/" target="_blank" className="social-container_instagram"><img src={facebookIcon} alt="logo" className="info__icon"/></a>
                <a href="https://www.facebook.com/Wiecznie.W.Formie" target="_blank" className="social-container_facebook"><img src={instagramIcon} alt="logo" className="info__icon"/></a>
            </div>
        </div>
    </section>  
)

    


export default ContactMe
