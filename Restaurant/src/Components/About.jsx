import React from 'react';
import About1 from '../assets/Images/About1.jpeg';
import About2 from '../assets/Images/About2.jpeg';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
    <Navbar/>

    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative">
            <img
              src={About2}
              alt="About 2"
              className="img-fluid"
              style={{ borderRadius: '10px', zIndex: 1 }}
            />
            <img
              src={About1}
              alt="About 1"
              className="img-fluid position-absolute"
              style={{ borderRadius: '10px', zIndex: 2, width: '75%', top: '82%', left: '24%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column mt-5">
          <h1 className="" style={{ color: 'gray',  }}>𝒲𝑒𝓁𝒸𝑜𝓂𝑒 𝒶𝓉</h1>
          <h2 className='text-warning'>𝖣𝖠𝖭𝖭𝖸'𝖲 𝖱𝖤𝖲𝖳𝖠𝖴𝖱𝖠𝖭𝖳</h2>
       
          
          <p className="fs-5 ">
            Welcome to our restaurant! We offer a variety of delicious dishes made from the freshest ingredients. Our chefs are dedicated to providing you with an exceptional dining experience. Whether you're here for a casual meal or a special occasion, we strive to make every visit memorable.
          </p>
          <p className="">
          𝒪𝓊𝓇 𝓂𝑒𝓃𝓊 𝒻𝑒𝒶𝓉𝓊𝓇𝑒𝓈 𝒶 𝓇𝒶𝓃𝑔𝑒 𝑜𝒻 𝒸𝓊𝒾𝓈𝒾𝓃𝑒𝓈 𝓉𝑜 𝓈𝒶𝓉𝒾𝓈𝒻𝓎 𝒶𝓁𝓁 𝓉𝒶𝓈𝓉𝑒𝓈. 𝐹𝓇𝑜𝓂 𝒶𝓅𝓅𝑒𝓉𝒾𝓏𝑒𝓇𝓈 𝓉𝑜 𝒹𝑒𝓈𝓈𝑒𝓇𝓉𝓈, 𝓌𝑒 𝒽𝒶𝓋𝑒 𝓈𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔 𝒻𝑜𝓇 𝑒𝓋𝑒𝓇𝓎𝑜𝓃𝑒. 𝒲𝑒 𝒶𝓁𝓈𝑜 𝑜𝒻𝒻𝑒𝓇 𝒶 𝓈𝑒𝓁𝑒𝒸𝓉𝒾𝑜𝓃 𝑜𝒻 𝒻𝒾𝓃𝑒 𝓌𝒾𝓃𝑒𝓈 𝒶𝓃𝒹 𝒷𝑒𝓋𝑒𝓇𝒶𝑔𝑒𝓈 𝓉𝑜 𝒸𝑜𝓂𝓅𝓁𝑒𝓂𝑒𝓃𝓉 𝓎𝑜𝓊𝓇 𝓂𝑒𝒶𝓁. 𝒞𝑜𝓂𝑒 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝒶 𝒹𝑒𝓁𝒾𝑔𝒽𝓉𝒻𝓊𝓁 𝒹𝒾𝓃𝒾𝓃𝑔 𝑒𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒 𝓌𝒾𝓉𝒽 𝓊𝓈!          </p>
       
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
