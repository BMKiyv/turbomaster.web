import React from 'react';
import './style.scss';
// import ShowImage from './showImage';

const SendingDone = ({children}) => {
    return (
        <div className='success'>
            {/* <ShowImage img = './images/Error.svg' alt = 'Error'/> */}
            <h3 className='success-title'>Щось пішло не так!</h3>
            <p className='success-first'>Вам не вдалося відправити Ваш запит</p>
            <p className='success-fourth'>Спробуйте повторити пізніше</p>
            <div className='success-btn'>{children}</div>
        </div>
    )
}

export default SendingDone;