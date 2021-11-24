import React, {useState,useEffect} from 'react';
import Button from '../Button/index';
import isInvalid from '../../utils/isInvalid';
import axios from 'axios';
import Modal from '../modal/index';
import GeneralModal from '../modal/generalModal/index';
import SendingDone from '../modal/templatesModal/sendingDone';
import SendingError from '../modal/templatesModal/sendingError';
import './style.scss';

const Form = ({fromModal = false,title}) => {
const[sent,setSent] = useState(false);
const [disabling,setDisabling] = useState(true);
const[submit,setSubmit] = useState(false);
const[error,setError] = useState(false);
const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment:'',
    nameInvalid:null,
    phoneInvalid:null,
});

const closeModal = () => {
    setSent(false)
}

// const closeFromModal = () => {
//     if(toggleModal) return toggleModal
//     else return null
// }

let onChange = ({ target }) => {
    let targetName = target.name,
        targetValue = target.value;
        let name,phone;
        if(targetName==="name"){
            name = targetValue
            name = isInvalid("name", name);
            formData.nameInvalid = name;
        }
        if(targetName==="phone"){
            phone = targetValue
            phone = isInvalid("phone", phone);
            formData.phoneInvalid = phone;
        }


    setFormData(prevState => ({
        ...prevState,
        [targetName]:targetValue
    })
    )
}

useEffect(()=> {
    setFormData(formData)
if(formData.name && formData.phone && !formData.nameInvalid && !formData.phoneInvalid){
    setSubmit(true)
     setDisabling(false)
}
else {
    setSubmit(false)
     setDisabling(true)
}},[formData])

//console.log(formData);

const resetInput = () => {
    setFormData({
        name: '',
        phone: '',
        comment: '',
        nameInvalid:null,
        phoneInvalid:null,
    })
}

let sendMail = (event) =>{
    const newData = { ...formData };

    const name =  isInvalid("name", newData.name);
    const phone = isInvalid("phone", newData.phone);

    newData.nameInvalid = name;
    newData.phoneInvalid = phone;

    if (!name && !phone) {
        const dataForSend = {
            name:newData.name,
            phone:newData.phone,
            comment:newData.comment
        }
        console.log(dataForSend,'ready for sending');
          event.preventDefault();
        return  axios.post("https://turbomaster.if.ua/send.php", dataForSend)
        .then(res => {
            if(res.status===200){
                //closeFromModal()
                resetInput()
                setSent(true)
                setError(false)
                
            }
        })
        .catch(()=>{
            //closeFromModal()
            resetInput()
            setError(true)
            setSent(true)
           
        })
    } else {
        setFormData(newData);
    }
    
}

const renderModal = () =>{
    if(sent && !error){
    return (
        <Modal isModal fromModal = {fromModal}>
            <GeneralModal success>
                <SendingDone>
                    <Button to='/#home' message='Закрити' onClick={closeModal} />
                </SendingDone>
            </GeneralModal>
        </Modal>
    )}
    if(sent && error){
        return (
            <Modal isModal fromModal = {fromModal}>
                <GeneralModal success onClose = {fromModal?null:closeModal}>
                    <SendingError  title={title?title:'Заявку'}>
                        <Button to='/#home' message='Закрити' onClick={closeModal} />
                    </SendingError>
                </GeneralModal>
            </Modal>
        )
    }
}

    return (
        <div className = {fromModal?'form-modal':'form'} id = 'form'>
            <div className = 'form-header'><span>{title?title:'Дізнатися ціну'}</span></div>
            <label className = 'form-label'>
                <span className = 'form-named'>Ім`я</span>
                <input className = 'form-input' name = 'name' type = 'text' onChange={onChange} value={formData.name}/>
            </label>
            <label className = 'form-label'>
                <span className = 'form-named'>Телефон</span>
                <input className = 'form-input' name = 'phone' type = 'text' onChange={onChange} value={formData.phone}/>
            </label>
            <span className = 'form-named'>Ваш коментар</span>
            <textarea className = 'form-area' type='text' name='comment' onChange={onChange} value={formData.comment}></textarea>
            <div className = 'form-button'>
                <Button submit = {submit} disabling = {disabling} onClick={sendMail}/>
            </div>
            {renderModal()}
        </div>
    )
}

export default Form;