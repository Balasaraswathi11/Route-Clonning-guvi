import React from 'react';
import Card from '../Card'; // Assuming Card component is correctly imported

const Fullstack = ({ cards }) => {
  return (
    <div className='m-5 ' >
      
      <div className="card-container fullstackdiv">
        {cards.map(card => (
          <Card key={card.id} image={card.image} heading={card.heading} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default Fullstack;
