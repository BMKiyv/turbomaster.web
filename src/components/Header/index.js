import React,{useState} from 'react';
import {HashLink} from 'react-router-hash-link';
import Button from '../Button/index';
import './style.scss';

const Header = ({fromFooter}) => {
    const [mobileNav, setMobileNav] = useState(false);

    const activateMobileNav = () => {
            setMobileNav((prev)=>!prev)
        }
        const closeMobileNav = ()=> {
            setMobileNav(false)
            const burger = document.querySelector('#checkbox4')
            burger.checked = false
        }
    return(
        <div className = {mobileNav?'header-wrap-mobile':fromFooter?'header-wrap-down':'header-wrap'}>
            <HashLink to ='/#main' style={{'display':'inlineBlock'}} onClick={mobileNav?closeMobileNav:null}><img className = {mobileNav?'header-img-mobile':fromFooter?'header-img-down':'header-img'} src = './images/logo.svg' alt = 'logo'/></HashLink>
            <nav className = {mobileNav?'header-list-mobile':'header-list'}>
                <HashLink to ='/#main' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>Головна</HashLink>
                <HashLink to ='/#whywe' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>Чому ми</HashLink>
                <HashLink to ='/#offer' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>Ми пропонуємо</HashLink>
                <HashLink to ='/#about' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>Хто ми</HashLink>
                <HashLink to = '/#gallery' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>галерея</HashLink>
                <HashLink to = '/#contacts' smooth onClick={closeMobileNav} className = {mobileNav?'header-list-item-mobile':'header-list-item'}>Контакти</HashLink>
            </nav>
           {mobileNav?<div className = 'navigation-but'><Button nav message = 'Задати питання' onClick={closeMobileNav}/></div>:null}
            <div className = {mobileNav?'header-phones-mobile':fromFooter?'header-phones-down':'header-phones'}>
                <a href = 'tel:+380676481631' className = {fromFooter?'header-phone-down':'header-phone'}>067 648-16-31</a>
                <a href = 'tel:+380503751785' className = {fromFooter?'header-phone-down':'header-phone'}>050 375-17-85</a>
            </div>

            <div className={mobileNav?'navigation':fromFooter?'navigation-nonVisible':'navigation-mobileButton'}>
                <input type="checkbox" id="checkbox4" onClick={activateMobileNav} className="checkbox4 visuallyHidden" />
                <label htmlFor="checkbox4">
                <div className="hamburger hamburger4">
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                    <span className="bar bar4"></span>
                    <span className="bar bar5"></span>
                </div>
            </label>
            </div>
        </div>
    )
}
export default Header;