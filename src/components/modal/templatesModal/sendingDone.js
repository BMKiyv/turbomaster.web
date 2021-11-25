import React from 'react';
import './style.scss';

const SendingDone = ({children}) => {
    return (
        <div className='success'>
            <h2 className='success-title'>Дякуємо за Ваше питання!</h2>
            <p className='success-second-mess'>Найближчим часом ми Вам зателефонуємо!</p>
            <div className='success-btn'>{children}</div>
        </div>
    )
}

export default SendingDone;