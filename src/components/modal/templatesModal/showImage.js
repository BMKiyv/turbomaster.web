import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';


const ShowImage = ({img,alt}) => {
    //console.log(img);
    return (
        <div className='image'>
            <figure>
                <img className='image-img' src={img} alt={alt}/>
            </figure>
        </div>
    )
}
ShowImage.propTypes = {
    img: PropTypes.string
}

export default ShowImage;