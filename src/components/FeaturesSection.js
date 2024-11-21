import React from 'react';
import desktopImg from '../assets/desktop-img.png';
import mobileImg from '../assets/mobile-img.png';
import featuredicon1 from '../assets/featured_icon1.png';
import featuredicon2 from '../assets/featured_icon2.png';
import featuredicon3 from '../assets/featured_icon3.png';
import './FeaturesSection.css'; 

const FeaturesSection = () => {
  return (
    <section className="unique-features-section">
      
      <div className="unique-features-header">
        <span className="unique-features-badge">Features</span>
        <h1>Cutting-edge features for advanced analytics</h1>
        <p>
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>

    
      <div className='features-image'>
        <img src={desktopImg} alt="desktop" className='features-desktop-image'/>
        <img src={mobileImg} alt="mobile" className='features-mobile-image'/>
      </div>
     

      <div className="unique-features-list">
        <div className="unique-feature-item">
        <img className="feature-icon" src={featuredicon1} alt="feature icons"/>
          <h3>Share team inboxes</h3>
          <p>
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone 
            on the same page and in the loop.
          </p>
          <a href="#learn-more" className="unique-learn-more">Learn more →</a>
        </div>

        <div className="unique-feature-item">
        <img className="feature-icon" src={featuredicon2} alt="feature icons"/>
          <h3>Deliver instant answers</h3>
          <p>
            An all-in-one customer service platform that helps you balance everything 
            your customers need to be happy.
          </p>
          <a href="#learn-more" className="unique-learn-more">Learn more →</a>
        </div>

        <div className="unique-feature-item">
        <img className="feature-icon" src={featuredicon3} alt="feature icons"/>
          <h3>Manage your team with reports</h3>
          <p>
            Measure what matters with Untitled’s easy-to-use reports. You can filter, 
            export, and drill down on the data in a couple of clicks.
          </p>
          <a href="#learn-more" className="unique-learn-more">Learn more →</a>
        </div>
      </div>

      <hr className='hr-line'/>
    </section>
  );
};

export default FeaturesSection;
