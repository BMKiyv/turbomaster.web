import React from 'react';
import './style.scss';
import whywe from '../../jsons/whywe.json'

const WhyWE = () => {
    const renderWhy = () => {
        const hundlingWhy = (item,index) => {
            return (
                <div className = 'whywe-card' key = {index}>
                    <figure className = 'whywe-figure'>
                        <img className = 'whywe-img' src = {item.src} alt = {item.phrase}/>
                    </figure>
                    <p className = 'whywe-phrase'>{item.phrase}</p>
                </div>
            )
        }
        return whywe.map(hundlingWhy)
    }
    return(
        <div className = 'container whywe' id = 'whywe'>
            <h2>Чому ми</h2>
            <div className = 'whywe-list'>{renderWhy()}</div>
            
        </div>
    )
}

export default WhyWE;