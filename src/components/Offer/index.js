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
        //console.log('clicked',isModal);

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
                //console.log(title);
            }
            const addingClasses=() => {
                //console.log(window.innerWidth);
                let theWidth = window.innerWidth>1024? window.innerWidth>1250?'612px':'470px':'100vw';
                let theHeight = window.innerWidth>1024? '366px':'343px';
                //console.log(theWidth,theHeight);
                return {
                    "backgroundImage":`url(./images/turbins${index+1}.png)`,
                    'width':theWidth,
                    'height': theHeight,
                    'backgroundSize': 'cover' ,
                    'backgroundRepeat': 'no-repeat'
                }

            }
            const handlingList = (list,i) => {
                return(
                    <li className = 'offer-list-li' key = {i}><span className = 'offer-list-item'>{list}</span></li>
                )
            } 
            return (
                <div key = {index} className = 'offer-wrap'>
                    <div style = {addingClasses()}>
                    <h3 className = 'offer-header'>{item.phrase}</h3>
                    <ul className = 'offer-list'>{item.list.map(handlingList)}</ul>
                    <div className = 'offer-button' onClick = {theTitle}>
                        <Button onClick = {renderForm} />
                        <span className = 'offer-button-span'>від 2500 грн.</span>
                    </div>
                    </div>
                    {/* <img className = 'offer-img' src = {item.src} alt = {item.src} /> */}

                </div>
            )
        }
        return imagesTitles.map(handlingRender)
    }
    return (
        <div className = 'container offer-top' id = 'offer'>
            <h2>Ми пропонуємо</h2>
            <div className = 'offer'>
                {renderOffer()}
                { hundlingForm() }
            </div>
        </div>
    )
}

export default Offer;