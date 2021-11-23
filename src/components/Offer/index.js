import React,{useState} from 'react';
import './style.scss';
import imagesTitles from '../../jsons/offer.json';
import Button from '../Button/index';
import Form from '../Form/index';
import Modal from '../modal/index';
import GeneralModal from '../modal/generalModal';

const Offer = () => {
    const [isModal, setIsModal] = useState(false);
    const [title,setTitle] = useState('')
    const renderForm = () => {
        setIsModal(true)
        console.log('clicked',isModal);

    }
    const closeModal = () => {
        setIsModal(false)
    }
    const hundlingForm = () => {
        return (
            <>
            <Modal isModal = {isModal} classSuccess>
                <GeneralModal onClose = {closeModal}>
                <Form fromModal = {true} title ={title}/>
                </GeneralModal>
            </Modal>    
            </>
        )

    }
    const renderOffer = () => {
        const handlingRender = (item,index) => {
            const theTitle = () => {
                setTitle(item.phrase)
                console.log(title);
            }
            const handlingList = (list,i) => {
                return(
                    <li className = 'offer-list-li' key = {i}><span className = 'offer-list-item'>{list}</span></li>
                )
            } 
            return (
                <div key = {index} className = 'offer-wrap'>
                    <img className = 'offer-img' src = {item.src} alt = {item.src} />
                    <h3 className = 'offer-header'>{item.phrase}</h3>
                    <ul className = 'offer-list'>{item.list.map(handlingList)}</ul>
                    <div className = 'offer-button' onClick = {theTitle}>
                        <Button onClick = {renderForm} />
                        <span className = 'offer-button-span'>от 2500 грн.</span>
                    </div>
                </div>
            )
        }
        return imagesTitles.map(handlingRender)
    }
    return (
        <div className = 'container' id = 'offer'>
            <h2>Ми пропонуємо</h2>
            <div className = 'offer'>
                {renderOffer()}
                { hundlingForm() }
            </div>
        </div>
    )
}

export default Offer;