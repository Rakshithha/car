import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', email: '', car: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Confirmed! ' + JSON.stringify(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Your Name'
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type='email'
        name='email'
        placeholder='Your Email'
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type='text'
        name='car'
        placeholder='Car Name'
        value={formData.car}
        onChange={handleChange}
      />
      <button type='submit'>Book</button>
    </form>
  );
}

export default BookingForm;