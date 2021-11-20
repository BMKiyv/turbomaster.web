import React from 'react';
import './style.scss';

const Contacts = () => {
    return(
        <div className = 'contacts' id='contacts'>
            <div className = 'container contacts-wrap'>
                <div className = 'contacts-adress'>
                    <h2 className = 'contacts-header'>Наші контакти</h2>

                    <div className = 'contacts-tel'><img className = 'contacts-img' src = './images/tel.svg' alt = '+380962657550'/>+380962657550</div>
                    <div className = 'contacts-tel'><img className = 'contacts-img' src = './images/tel.svg' alt = '+380950970673'/>+380950970673</div>
                    <div className = 'contacts-tel'><img className = 'contacts-img' src = './images/mail.svg' alt = 'turboinvest6116@gmail.com'/>turboinvest6116@gmail.com</div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2620.6461805438903!2d24.7150488!3d48.9411806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c3bfdd797%3A0xb5aca4e0a49139eb!2sFors%20Master!5e0!3m2!1suk!2sua!4v1635796441342!5m2!1suk!2sua" className = 'contacts-map' allowFullScreen="" title='map' loading="lazy"></iframe>
            </div>
        </div>
    )
}
export default Contacts;