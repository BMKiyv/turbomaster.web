import React from 'react';
import './style.scss';

const Contacts = () => {
    return(
        <div className = 'contacts' id='contacts'>
            <div className = 'container contacts-wrap'>
                <div className = 'contacts-adress'>
                    <h2 className = 'contacts-header'>Наші контакти</h2>
                    <div className = 'contacts-group'>
                        <div><a href = 'tel:+380503751785' className = 'contacts-tel'><img className = 'contacts-img' src = './images/tel.svg' alt = '+380962657550'/>+380962657550</a></div>
                        <div><a href = 'tel:+380950970673' className = 'contacts-tel'><img className = 'contacts-img' src = './images/tel.svg' alt = '+380950970673'/>+380950970673</a></div>
                        <div><a href = 'mailto:turbomasster@gmail.com' className = 'contacts-tel'><img className = 'contacts-img' src = './images/mail.svg' alt = 'turbomasster@gmail.com'/>turbomasster@gmail.com</a></div>
                        <div><span className = 'contacts-tel contacts-point'><img className = 'contacts-img' src = 'images/gps3.svg' alt = 'adress'/>м. Івано-Франківськ, вул. Надрічна 46 В <span className='contacts-hidden'>(теритрія Sun Lit)</span></span></div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2620.6461805438903!2d24.7150488!3d48.9411806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730c16c3bfdd797%3A0xb5aca4e0a49139eb!2sFors%20Master!5e0!3m2!1suk!2sua!4v1635796441342!5m2!1suk!2sua" className = 'contacts-map' allowFullScreen="" title='map' loading="lazy"></iframe>
            </div>
        </div>
    )
}
export default Contacts;