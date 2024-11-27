import React from 'react';
import cars from '../data/cars.json';
import CarCard from '../components/CarCard';

function Home() {
  return (
    <div className='home'>
      <h1>Available Cars</h1>
      <div className='car-list'>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;