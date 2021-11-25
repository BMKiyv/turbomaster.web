import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const GeneralModal = ({children, onClose, success, img }) => {
    const [styled, setStyled] = useState(350)
    useEffect(()=>setStyled(window.innerWidth),[])
    let width = styled>550? null:window.innerWidth;
    //console.log(styled);
    return (
        <div className = 'generalModal' >
                <div className={onClose?'generalModal__fromModal':'generalModal__container'}>
                {onClose?
                <div style = {{'width':`${width}`}} className = {success?'generalModal__close-wrap-success':img?'generalModal__close-wrap-img':'generalModal__close-wrap'} >
                    <button className = 'generalModal__close' onClick = { onClose }></button>
                </div>: null}
                    <div className = 'text'>{children}</div>
                </div>
        </div>
    );

};

GeneralModal.propTypes = {
    onClose:      PropTypes.func,
};

export default GeneralModal;