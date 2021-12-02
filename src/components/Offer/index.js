import React,{useState, useEffect, useCallback } from 'react';
import './style.scss';
import imagesTitles from '../../jsons/offer.json';
import Button from '../Button/index';
import Form from '../Form/index';
import Modal from '../modal/index';
import GeneralModal from '../modal/generalModal';
import { useOnScreen } from '../../utils/useOnscreen';

const Offer = ({path}) => {
    const [isModal, setIsModal] = useState(false);
    const [title,setTitle] = useState('')
    const[width,setWidth] = useState(window.innerWidth)
    const [myRef,visible] = useOnScreen({})
    const [cards,setCards] = useState([])


    const renderForm = () => {
        setIsModal(true)
    }

    const closeModal = () => {
        setIsModal(false)
    }

    const hundlingForm = () => {
        return (
            <>
            <Modal isModal = {isModal} classSuccess>
                <GeneralModal onClose = {closeModal}>
                    <Form path = {path} fromModal = {true} title ={title}/>
                </GeneralModal>
            </Modal>    
            </>
        )

    }

    const getWidth = useCallback(
        event => setWidth(window.innerWidth)
    ,[])

    useEffect(() => {
         window.addEventListener('resize', getWidth);
        return ( ()=> window.removeEventListener('resize',getWidth))},[getWidth])
         //console.log(width);
    useEffect( () => {

        const handlingRender = (item,index) => {
            const theTitle = () => {
                setTitle(item.phrase)
            }

            const addingClasses=(i) => {
                let theWidth = width>1024? window.innerWidth>1250?'612px':'470px':'100vw';
                let theHeight = width>1024? '366px':i===1?'382px':i===3?'367px':'343px';
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
                <>
                    <div style = {visible?addingClasses(index):null} className={visible?'offer-div':'offer-visiblity'}>
                        <h3 className = 'offer-header'>{item.phrase}</h3>
                        <ul className = 'offer-list'>{item.list.map(handlingList)}</ul>
                        <div className = 'offer-button' onClick = {theTitle}>
                            <Button onClick = {renderForm} />
                        </div>
                    </div>
                </>
            )
        }
        setCards(imagesTitles.map(handlingRender))
    },[visible,setCards,width])
    const renderOffer = useCallback(()=>{
        const loop = (item,index) => {
            return(
                <div key = {index} className = 'offer-wrap'>
                    {item}
                </div>
            )
        }
        return cards.map(loop)
    },[cards])
    return (
        <div className = 'container offer-top' id = 'offer'>
            <h2>Ми пропонуємо</h2>
            <div className = 'offer' ref = {myRef}>
                {renderOffer()}
                { hundlingForm() }
            </div>
        </div>
    )
}

export default Offer;