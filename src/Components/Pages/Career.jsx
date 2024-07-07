import React from 'react'
import Card from '../Card';

const Career = ({cards}) => {
  return (
    <div className='m-5 '>
    
    <div className="card-container careerdiv ">
      {cards.map(card => (
        <Card key={card.id} image={card.image} heading={card.heading} link={card.link}/>
      ))}
    </div>
  </div>
  )
}

export default Career