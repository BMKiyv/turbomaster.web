import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

export default function ImageCarousel({ images }) {
  const settings = {
    className :'carousel-slick',
    infinite: true,
    dots: true,
    slidesToShow:3,
    arrows: true,
    slidesToScroll: 3,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1249,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  };
  
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