import React from 'react';
import logo1 from '../assets/boltshiftlogo.png';
import logo2 from '../assets/lightboxlogo.png';
import logo3 from '../assets/featherDevlogo.png';
import logo4 from '../assets/spherulelogo.png';
import logo5 from '../assets/globalbanklogo.png';
import logo6 from '../assets/nietzschelogo.png';
import './Companies.css';

const Companies = () => {
  const companies = [
    { name: 'Boltshift', logo: logo1},
    { name: 'Lightbox', logo: logo2},
    { name: 'FeatherDev', logo: logo3 },
    { name: 'Spherule', logo: logo4},
    { name: 'GlobalBank', logo: logo5 },
    { name: 'Nietzsche', logo: logo6},
  ];

  return (
    <div className="companies-container">
      <p>Join 4,000+ companies already growing</p>
      <div className="companies-logos">
        {companies.map((company, index) => (
          <div className="company-logo" key={index}>
            <img src={company.logo} alt={company.name} />
            <h1>{company.name}</h1>
          </div>
        ))}
      </div>
      <hr className='hr-line' />
    </div>
  );
};

export default Companies;
