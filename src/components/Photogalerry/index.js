import React from 'react';
import ImageCarousel from "./ImageCarousel";
import images from '../../jsons/galerry.json';
import './style.scss';

const PhotoGalerry = () => {
    return(
        <div className = 'container carousel' id = 'gallery'>
            <h2 className = 'carousel-header'>Фотогалерея</h2>
            <ImageCarousel images={images} />
        </div>
    )
}

export default PhotoGalerry;