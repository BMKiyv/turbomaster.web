import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';

const Header = () => {
    return(
        <div className = 'header-wrap'>
            <img className = 'header-img' src = './images/logo.svg' alt = 'logo'/>
            <ul className = 'header-list'>
                <HashLink to ='/#main' smooth className = 'header-list-item'>Головна</HashLink>
                <HashLink to ='/#whywe' smooth className = 'header-list-item'>Чому ми</HashLink>
                <HashLink to ='/#offer' smooth className = 'header-list-item'>Ми пропонуємо</HashLink>
                <HashLink to ='/#about' smooth className = 'header-list-item'>Хто ми</HashLink>
                <li className = 'header-list-item'>галерея</li>
                <HashLink to = '/#contacts' smooth className = {'header-list-item'}>Контакти</HashLink>
            </ul>
            <div className = 'header-phones'>
                <a href = 'tel:+380676481631' className = 'header-phone'>067 648-16-31</a>
                <a href = 'tel:+380503751785' className = 'header-phone'>050 375-17-85</a>
            </div>
        </div>
    )
}
export default Header;