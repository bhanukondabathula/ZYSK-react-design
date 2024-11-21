import React from "react";
import playcircle from '../assets/play-circle.png';
import container from '../assets/Container.png';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
     
      <div className="announcement-bar">
        <div className="announcement-content">
          <span>New feature</span>
          <a href="#dashboard" className="announcement-link">
            Check out the team dashboard →
          </a>
        </div>
      </div>

     
      <div className="hero-content">
     
        <div className="hero-text">
          <h1 className="hero-title">Beautiful analytics to grow smarter</h1>
          <p className="hero-description">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          <div className="hero-buttons">
          <button className="button-signup-small">Sign up</button>
            <button className="button-demo"><img src={playcircle} alt="playcircle" />Demo</button>
            <button className="button-signup-large">Sign up</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"
            alt="Dashboard Preview"
            className="dashboard-preview"
          />
        </div>
        <img
            src={container}
            alt="Dashboard Preview desktop"
            className="desktop-dashboard"
          />
      </div>
    </section>
  );
};

export default Hero;
