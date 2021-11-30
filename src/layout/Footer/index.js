import React from 'react';
import './style.scss';
import Header from '../Header';

const Footer = () => {
    return (
        <footer className = 'footer'>
            <div className = 'container footer-wrap'>
                <Header fromFooter/>
            </div>
        </footer>

    )
}
export default Footer;