import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'; // Import the Redux store
import Reservation from './Components/Reservation';
import Menu from './Components/Product';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'; // Import the Navbar component
import Cart from './Components/Cart';

function App() {
  return (
    <Provider store={store}>
      
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div>
              <Home />
              <About />
              <Menu />
              <Contact />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/reservation' element={ <Reservation />}/>
        </Routes>
  
    </Provider>
  );
}

export default App;