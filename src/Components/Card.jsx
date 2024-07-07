// Card.jsx

import React from 'react';

const Card = ({ image, heading ,link}) => {
  return (<><div className="carddivs ">
    <div className="card" style={{ width: '23rem', height:"350px" }}>
     
      
      <a href={link} className='text-decoration-none text-black' style={{borderRadius:"10px"}} > <img src={image} className="card-img-top image  " alt="Card" />
      <div className="card-body ">
        <h5 className="card-title ">{heading}</h5>
       
      </div></a>
    </div>
    </div>
    </>);
};

export default Card;
