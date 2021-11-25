import React from 'react';
import './style.scss';
import ShowImage from './showImage';

const SendingDone = ({children}) => {
    return (
        <div className='success'>
            <ShowImage img = './images/sendOk.svg' alt = 'sentOk'/>
            <h2 className='success-title'>Дякуємо за Ваше питання!</h2>
            <p className='success-second-mess'>Найближчим часом ми Вам зателефонуємо!</p>
            <div className='success-btn'>{children}</div>
        </div>
    )
}

export default SendingDone;