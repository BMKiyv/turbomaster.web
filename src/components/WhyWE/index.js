import React,{useState,useEffect,useCallback} from 'react';
import './style.scss';
import whywe from '../../jsons/whywe.json'
import { useOnScreen } from '../../utils/useOnscreen';

const WhyWE = () => {
    const [myRef,visible] = useOnScreen({})
    const[cards,setCards] = useState([])
    useEffect(()=>{
        const hundlingWhy = (item,index) => {
            return (<>    
                    <figure className = {visible?'whywe-figure':'whywe-visiblity'}>
                        {visible?<img className = 'whywe-img' src = {item.src} alt = {item.phrase}/>:null}
                    </figure>
                    <p className = 'whywe-phrase'>{item.phrase}</p>
                    </>
            )
        }
         setCards(whywe.map(hundlingWhy))
    },[setCards,visible])
    //console.log(cards);
    const renderWhy = useCallback(()=>{
        const loop = (item,index) =>{
            return (
                    <div className = 'whywe-card' key = {index}>{item}</div>
            )
        }
        return cards.map(loop)
    },[cards])
    return(
        <div className = 'container whywe' id = 'whywe'>
            <h2>Чому ми</h2>
            <div className = 'whywe-list'ref = {myRef}>{renderWhy()}</div>
            
        </div>
    )
}

export default WhyWE;