import React from 'react';
import './style.scss';

const AboutUs = () => {
    return(
        <div className = 'container' id = 'about'>
            <div className = 'about'>
            <div className = 'about-text'>
                <h2 className = 'about-header'>ХТО МИ</h2>
                <p className = 'about-p'>Підприємство по ремонту і продажу турбокомпресорів і комплектуючих до них!</p>
                <p className = 'about-p'>Проводимо ремонт на власних виробничих потужностях, фахівцями з великим досвідом роботи. Ремонт проводиться на високоточному обладнанні в найкоротші терміни. Після ремонту всі турбокомпресори проходять налаштування і випробування на стендах, що імітують роботу двигуна.</p>
                <p className = 'about-p'>Великий склад нових турбокомпресорів, б / у і після реставрації, а також комплектуючих до них (картриджі, актуатори, сервоприводи, ремкомплекти).</p>
            </div>
            <div>
                <img src = './images/photoabout.png' style = {{'width': '100%'}} alt = 'about us'/>
            </div>
            </div>
        </div>
    )
}

export default AboutUs;