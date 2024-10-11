import React from 'react';

const SchoolCard = ({ logo, name, years, major, city }) => {
  return (
    <div className="school-container">
        <div className='logo-container'>
            <div className="school-logo">
                <img src={logo} alt={`${name} logo`} />
            </div>
        </div>
        <div className='info-container'>
            <div className="school-name">
                <h2>{name}</h2>
                <h3>{years}</h3>
                <h5>{major}</h5>
                <h5>{city}</h5>
            </div>
        </div>  
    </div>
  );
};

export default SchoolCard;


