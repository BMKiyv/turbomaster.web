import React from 'react';
import {HashLink} from 'react-router-hash-link';
import './style.scss';

const Button = ({message, submit, disabling, onClick, nav}) => {
    
    return (nav?
        <div className = 'button-wrap'>
            <HashLink to = '/#form' className = 'button button-link' onClick={onClick}>{message}</HashLink>
        </div>
        :
        <div className = 'button-wrap'>{
            <button
             className = {disabling?'button button-disabled':'button'}
             submit={submit? 'submit':null} 
             disabled={disabling?'disabled':null}
             onClick={onClick}
             >{message?message:'Дізнатися вартість'}</button>
        }
        </div>
    )
}

export default Button