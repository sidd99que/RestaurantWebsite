import React, { useState } from 'react';
import image2 from '../assets/Images/image2.jpg';
import image1 from '../assets/Images/image1.jpg';
import image3 from '../assets/Images/image3.jpg';
import image4 from '../assets/Images/image4.jpeg';

import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const images = [image2, image1, image3, image4];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToImage = index => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          height: '100vh',
          marginTop: '0',
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: '20px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          <h1>Welcome to Feast-Urban</h1>
          <p>Discover the best dining experience with us</p>
          <Link to="/Menu">
        <button className="btn btn-outline-light mt-3">Explore Menu</button>
      </Link>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            width: '40px',
            height: '40px',
          }}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ width: '20px', height: '20px' }}
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            border: 'none',
            width: '40px',
            height: '40px',
          }}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ width: '20px', height: '20px' }}
          ></span>
          <span className="visually-hidden">Next</span>
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => goToImage(index)}
              style={{
                width: '30px',
                height: '5px',
                backgroundColor:
                  currentImageIndex === index ? 'yellow' : 'rgba(255, 255, 255, 0.5)',
                margin: '0 5px',
                cursor: 'pointer',
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
