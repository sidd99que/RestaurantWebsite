import React, { useState } from 'react';
import ReservationImage from '../assets/Images/ReservationIn.jpg'; // Import your hero image

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server or perform validation)
    console.log('Form submitted:', formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      partySize: '',
      date: '',
      time: ''
    });
  };

  return (
    <div className="container-fluid p-0">
      <div className="hero-section" style={{ backgroundImage: `url(${ReservationImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '50vh' }}>
        <div className="container text-center py-5">
          <h1 className="text-white mb-4">Make a Reservation</h1>
          <p className="text-white">Book your table now for a wonderful dining experience.</p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-4 text-center">Reservation Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control bg-transparent" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control bg-transparent" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" className="form-control bg-transparent" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="partySize" className="form-label">Party Size</label>
                  <input type="number" className="form-control bg-transparent" id="partySize" name="partySize" value={formData.partySize} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="date" className="form-label">Date</label>
                  <input type="date" className="form-control bg-transparent" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="col-md-4">
                  <label htmlFor="time" className="form-label">Time</label>
                  <input type="time" className="form-control bg-transparent" id="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">Submit Reservation</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;