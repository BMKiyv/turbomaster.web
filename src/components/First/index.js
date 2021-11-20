import React from 'react';
import Header from '../Header/index'
import './style.scss'

const First = () => {
    return (
        <div className = 'first-wrap' id = 'main'>
            <div className = 'container'>
                <Header />
                <div className = 'first-headers'>                
                <h1 className = 'first-header'>
                    <span className = 'first-span'>Научно-технические предприятия</span>
                    по ремонту и продаже турбокомпрессоров
                </h1>
                </div>
                
            </div>
        </div>
    )
}
export default First;