// src/components/Navbar.js

import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';
import { connect } from 'react-redux';

const Navbar = ({ cart }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  let itemsCount = 0;
  let totalAmount = 0.00;

  if (Array.isArray(cart.items)) {
    itemsCount = cart.items.reduce((acc, item) => acc + item.quantity, 0);
    totalAmount = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0.00);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <h2>𝖣𝖠𝖫𝖫𝖸'𝖲</h2>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fw-bold fs-5">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
                onClick={handleNavCollapse}
              >
                <span>Home</span>
                <span className="hover-underline"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="active"
                onClick={handleNavCollapse}
              >
                <span>About</span>
                <span className="hover-underline"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/menu"
                activeClassName="active"
                onClick={handleNavCollapse}
              >
                <span>Menu</span>
                <span className="hover-underline"></span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                activeClassName="active"
                onClick={handleNavCollapse}
              >
                <span>Contact</span>
                <span className="hover-underline"></span>
              </NavLink>
            </li>
          </ul>
          <DarkModeToggle />
          <div className="ms-lg-3 mt-3 mt-lg-0 d-flex">
            <Link to="/reservation">
              <button className="btn btn-outline-info text-white me-3" onClick={handleNavCollapse}>
                RESERVATION
              </button>
            </Link>
            <Link to="/cart">
              <button className="btn btn-outline-info text-white">
                <span className="fw-bold me-2">Items: {itemsCount}</span>
                <span className="fw-bold">Total: ${totalAmount.toFixed(2)}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
