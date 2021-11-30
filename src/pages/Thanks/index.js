import React, {useState} from 'react';
import Modal from '../../components/modal/index';
import GeneralModal from '../../components/modal/generalModal';
import SendingDone from '../../components/modal/templatesModal/sendingDone';
import SendingError from '../../components/modal/templatesModal/sendingError'
import Button from '../../components/Button';


const Thanks = ({ success, onClick, fromModal, onClose,path}) => {
    const[modal,setModal] = useState(true);
    const closingModal = () => {
    setModal(false)
    path.replace('/')
    console.log(path.location.pathname);
    return path
}
    return(
    <Modal isModal = {modal} fromModal = {fromModal?fromModal:false} onClose = {fromModal?null:onClose?onClose:closingModal}>
    <GeneralModal success  onClose = {fromModal?null:onClose?onClose:closingModal}>
        {console.log(fromModal)}
        {success?
        <SendingDone>
            <Button to='/#home' message='Закрити' onClick={onClick?onClick:closingModal} />
        </SendingDone>:
        <SendingError >
            <Button to='/#home' message='Закрити' onClick={onClick?onClick:closingModal} />
        </SendingError>
        }
    </GeneralModal>
</Modal>
    )
}
export default Thanks;