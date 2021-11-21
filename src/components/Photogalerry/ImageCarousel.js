import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

export default function ImageCarousel({ images }) {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true
  };
  console.log(images);
  return (
    <div>
      <Slider {...settings}>
      {images.map((item) => (
        <div key={item.id}>
          <img className = 'carousel-photo' src={item.src}  alt={item.alt} />
        </div>
      ))}
      </Slider>
    </div>
  );
}