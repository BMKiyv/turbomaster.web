import React from 'react';
import './style.scss';

const Button = ({message, submit, disabling, onClick}) => {
    
    return (
        <div className = 'button-wrap'>{
            <button
             className = 'button'
             submit={submit? 'submit':null} 
             disabled={disabling?'disabled':null}
             onClick={onClick}
             >{message?message:'Дізнатися вартість'}</button>
        }
        </div>
    )
}

export default Button