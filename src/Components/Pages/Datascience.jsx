import React from 'react'
import Card from '../Card'; 
const Datascience = ({cards}) => {
  return (
    <div className='m-5'>
    
    <div className="card-container datascidiv">
      {cards.map(card => (
        <Card key={card.id} image={card.image} heading={card.heading} link={card.link} />
      ))}
    </div>
  </div>
  )
}

export default Datascience