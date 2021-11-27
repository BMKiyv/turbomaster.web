import React from 'react';
import Header from '../Header/index'
import Form from '../Form/index'
import './style.scss'

const First = () => {
    return (
        <div className = 'first-wrap' id = 'main'>
            <div className = 'container first-position'>
                <Header />
                <div className = 'first-headers'>                
                <h1 className = 'first-header'>
                    {/* <span className = 'first-span'>Ремонт</span>
                    та діагностика <span className = 'first-span-second'>турбін</span> */}
                    Провідне підприємство з ремонту турбін на сертифікованому обладнанні <span className = 'first-span'> всього за один день!</span>
                </h1>
                </div>
                <Form />
            </div>
        </div>
    )
}
export default First;