import React from 'react';
import './style.scss';
import imagesTitles from '../../jsons/offer.json';
import Button from '../Button/index';

const Offer = () => {
    const renderOffer = () => {
        const handlingRender = (item,index) => {
            const handlingList = (list,i) => {
                return(
                    <li className = 'offer-list-li' key = {i}><span className = 'offer-list-item'>{list}</span></li>
                )
            } 
            return (
                <div key = {index} className = 'offer-wrap'>
                    <img className = 'offer-img' src = {item.src} alt = {item.src} />
                    <h3 className = 'offer-header'>{item.phrase}</h3>
                    <ul className = 'offer-list'>{item.list.map(handlingList)}</ul>
                    <div className = 'offer-button'>
                        <Button />
                        <span className = 'offer-button-span'>от 2500 грн.</span>
                    </div>
                </div>
            )
        }
        return imagesTitles.map(handlingRender)
    }
    return (
        <div className = 'container' id = 'offer'>
            <h2>Ми пропонуємо</h2>
            <div className = 'offer'>
                {renderOffer()}
            </div>
        </div>
    )
}

export default Offer;