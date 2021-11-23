import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({ isModal, children, classSuccess,fromModal }) => {

    if (!isModal) {
        return null;
    }

    return (
        <div className = {classSuccess?'modalW-second':fromModal?'modalW-third':'modalW'}>
            {children}
        </div>
    );

};

Modal.propTypes = {
    isModal: PropTypes.bool.isRequired,
};

export default Modal;