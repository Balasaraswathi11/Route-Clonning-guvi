import React from 'react';
import Card from '../Card'; // Import the Card component

const All = ({ cards }) => {
  return (
    <div className='m-5 '>
     
      <div className="card-container  carddiv">
        {cards.map(card => (
          <Card key={card.id} image={card.image} heading={card.heading} link={card.link} />
        ))}
      </div>
    </div>
  );
};

export default All;