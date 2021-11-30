import React from 'react';
import './style.scss';
// import ShowImage from './showImage';

const SendingDone = ({children}) => {
    return (
        <div className='success'>
            {/* <ShowImage img = './images/sendOk.svg' alt = 'sentOk'/> */}
            <h3 className='success-title'>Дякуємо, Вашу заявку прийнято!</h3>
            <p className='success-fourth'>Наш менеджер зв`яжеться з Вами найближчим часом!</p>
            <div className='success-btn'>{children}</div>
        </div>
    )
}

export default SendingDone;