import React from 'react';
import './style.scss';

const AboutUs = () => {
    return(
        <div className = 'container' id = 'about'>
            <div className = 'about'>
            <div className = 'about-text'>
                <h2>ХТО МИ</h2>
                <p className = 'about-p'>Науково-технічне підприємство по ремонту і продажу турбокомпресорів і комплектуючих до них!</p>
                <p className = 'about-p'>Проводимо ремонт на власних виробничих потужностях, фахівцями з великим досвідом роботи. Ремонт проводиться на високоточному обладнанні в найкоротші терміни. Після ремонту все турбокомпресора проходять настройку і випробування на стендах імітують роботу двигуна.</p>
                <p className = 'about-p'>Великий склад нових турбокомпресорів, б / у і після реставрації, а також комплектуючих до них (картриджі, актуатори, сервоприводу, ремкомплекти).</p>
            </div>
            <div>
                <img src = './images/details.png' style = {{'width': '100%'}} alt = 'about us'/>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;