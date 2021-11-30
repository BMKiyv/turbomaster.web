import React, {useState,useEffect} from 'react';
import Button from '../Button/index';
import isInvalid from '../../utils/isInvalid';
import axios from 'axios';
import Modal from '../modal/index';
import GeneralModal from '../modal/generalModal/index';
import SendingDone from '../modal/templatesModal/sendingDone';
import SendingError from '../modal/templatesModal/sendingError';
import './style.scss';

const Form = ({fromModal = false,title = 'Дізнатись ціну',path}) => {
const[sent,setSent] = useState(false);
const [disabling,setDisabling] = useState(false);
const[submit,setSubmit] = useState(false);
const[error,setError] = useState(false);
const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment:'',
    subject: title,
    nameInvalid:null,
    phoneInvalid:null,
});

const closeModal = () => {
    setSent(false)
}

let onChange = ({ target }) => {
    setDisabling(true)
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
     console.log(formData);
}
else {
    setSubmit(false)
     setDisabling(true)
}},[formData])

const resetInput = () => {
    setFormData({
        name: '',
        phone: '',
        comment: '',
        subject:title,
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
    newData.subject = formData.subject ==='Дізнатись ціну'? 'Просто дізнатись': formData.subject;

    if (!name && !phone) {
        const dataForSend = {
            name:newData.name,
            phone:newData.phone,
            comment:newData.comment,
            subject:newData.subject
        }
        console.log(dataForSend,'ready for sending');
          event.preventDefault();
        return  axios.post("https://turbomaster.if.ua/send.php", dataForSend)
        .then(res => {
            if(res.status===200){
                path.replace('thank-you-page')
                console.log(path);
                resetInput()
                setSent(true)
                setError(false)
                
            }
        })
        .catch(()=>{
            
            path.replace('error-page')
            console.log(path.location.pathname);
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
        <Modal isModal fromModal = {fromModal}onClose = {fromModal?null:closeModal}>
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
                    <SendingError >
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
                <span className = 'form-named'>{formData.nameInvalid?<span style = {{'color':'#E8363A'}}>{formData.nameInvalid}</span>:'Ім`я'}</span>
                <input className = 'form-input' name = 'name' type = 'text' onChange={onChange} placeholder='Ім`я' value={formData.name}/>
            </label>
            <label className = 'form-label'>
                <span className = 'form-named'>Телефон</span>
                <input className = 'form-input' name = 'phone' type = 'text' placeholder='+xx(xxx)xxx xx xx' onChange={onChange} value={formData.phone}/>
            </label>
            <span className = 'form-named'>Ваш коментар</span>
            <textarea className = 'form-area' type='text' name='comment' placeholder='Ваш коментар' onChange={onChange} value={formData.comment}></textarea>
            <div className = 'form-button'>
                <Button submit = {submit} disabling = {disabling} onClick={sendMail}/>
            </div>
            {renderModal()}
        </div>
    )
}

export default Form;