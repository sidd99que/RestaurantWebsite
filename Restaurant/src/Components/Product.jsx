// src/components/Menu.js

import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import axios from 'axios';
import bgproductInn from '../assets/Images/bgproductInn.jpg';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';

const Menu = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        setCategories(response.data.categories);
      })
      .catch(error => {
        console.error('There was an error fetching the categories!', error);
      });
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${bgproductInn})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '60vh',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  const handleHover = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '1';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleLeave = (e) => {
    e.currentTarget.querySelector('.overlay').style.opacity = '0';
    e.currentTarget.style.transform = 'scale(1)';
  };

  const handleAddToCart = (category) => {
    dispatch(addToCart(category));
  };

  const renderCard = (category) => (
    <div
      key={category.idCategory}
      className="col-lg-3 col-md-4 col-sm-6 mb-4"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      style={{
        overflow: 'hidden',
        position: 'relative',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
      }}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          color: 'white',
        }}
      >
        <h2>{category.strCategory}</h2>
        <p>$10.00</p> {/* Placeholder price */}
        <button className="btn btn-outline-light" onClick={() => handleAddToCart(category)}>Add to Cart</button>
      </div>
      <LazyLoadImage
        src={category.strCategoryThumb}
        alt={category.strCategory}
        effect="opacity"
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
    </div>
  );

  return (
    <>
      <Navbar cart={cart} />
      <div style={sectionStyle}>
        <h1 className="text-warning mt-5">𝘛𝘖𝘋𝘈𝘠'𝘚 𝘚𝘗𝘌𝘊𝘐𝘈𝘓𝘐𝘛𝘠</h1>
        <h3>Oven Roasted duck with special sausage</h3>
        <h2>DESERT DAILY MENU</h2>
        <p>$25.00</p>
      </div>

      <div className="container mt-4">
        <div className="row gx-3">
          {categories.map(category => renderCard(category))}
        </div>
      </div>
    </>
  );
};

export default Menu;
