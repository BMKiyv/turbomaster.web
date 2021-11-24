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
                    <span className = 'first-span'>Науково-технічні підприємства</span>
                    по ремонту та продажу турбокомпресорів
                </h1>
                </div>
                <Form />
            </div>
        </div>
    )
}
export default First;