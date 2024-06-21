import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // Added for tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      {/* <Slider {...settings}> */}
       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
        {items.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.imageUrl} alt={item.title} />
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
        </div>
      {/* </Slider> */}
    </div>
  );
};

export default Carousel;
