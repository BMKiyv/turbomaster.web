import React from 'react';
import Header from '../../layout/Header/index'
import Form from '../Form/index'
import './style.scss'

const First = ({path}) => {
    return (
        <div className = 'first-wrap' id = 'main'>
            <div className = 'container first-position'>
                <header><Header /></header>
                <div className = 'first-headers'>                
                <h1 className = 'first-header'>
                    {/* <span className = 'first-span'>Ремонт</span>
                    та діагностика <span className = 'first-span-second'>турбін</span> */}
                    ремонт та діагностика турбін будь-якої складності, на професійному обладнанні<span className='first-city'>в м. Івано-Франківськ</span><a href = 'tel:+380962657550' className = 'first-link'>096 265-75-50</a>
                <a href = 'tel:+380950970673' className = 'first-link'>095 097-06-73</a> <span className = 'first-span'> всього за один день!  </span>
                  
                </h1>
                </div>
                <Form path = {path}/>
            </div>
        </div>
    )
}
export default First;