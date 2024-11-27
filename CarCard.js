import React from 'react';
import { Link } from 'react-router-dom';

function CarCard({ car }) {
  return (
    <div className='car-card'>
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>${car.price} per day</p>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </div>
  );
}

export default CarCard;