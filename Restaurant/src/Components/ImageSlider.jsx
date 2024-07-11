// ImageSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        <div style={{ position: 'relative' }}>
          <img
            src="https://via.placeholder.com/1200x600"
            alt="Slide 1"
            style={{ width: '100%', height: 'auto' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h2>Welcome to Our Store</h2>
            <p>Explore our exclusive collection</p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src="https://via.placeholder.com/1200x600"
            alt="Slide 2"
            style={{ width: '100%', height: 'auto' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '20%',
              left: '5%',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '20px',
              borderRadius: '10px',
            }}
          >
            <h2>Latest Trends</h2>
            <p>Stay ahead with our latest arrivals</p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
