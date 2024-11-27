import React from 'react';
import { useParams } from 'react-router-dom';
import cars from '../data/cars.json';

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id));

  return (
    <div className='car-details'>
      {car ? (
        <div>
          <h1>{car.name}</h1>
          <img src={car.image} alt={car.name} />
          <p>{car.description}</p>
          <p>Price: ${car.price} per day</p>
        </div>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
}

export default CarDetails;