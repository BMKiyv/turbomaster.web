import React from 'react';
import './style.scss';
import Button from '../../components/Button';

const NotFound = () => {
    return (
        <div className = 'notFound'>
            <div className = 'notFound-wrap'>
                <figure className = 'notFound-figure'><img className = 'notFound-img' src='./images/Error.svg' alt='wrong-adress'/></figure>
                <div className = 'notFound-text'>
                    Сторінку не знайдено. Перевірте, чи правильно набрали адресу
                </div>
                <div className = 'notFound-button'>
                    <Button nav message = 'На головну' to = '/#main' />
                </div>
            </div>
        </div>
    )
}
export default NotFound;