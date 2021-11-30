import React from 'react';
import Modal from '../components/modal/index';
import GeneralModal from '../components/modal/generalModal';
import SendingDone from '../components/modal/templatesModal/sendingDone';
import Button from '../components/Button';


const Thanks = ({fromModal, closeModal}) => {
    <Modal isModal fromModal = {fromModal}onClose = {fromModal?null:closeModal}>
    <GeneralModal success>
        <SendingDone>
            <Button to='/#home' message='Закрити' onClick={closeModal} />
        </SendingDone>
    </GeneralModal>
</Modal>
}
export default Thanks;