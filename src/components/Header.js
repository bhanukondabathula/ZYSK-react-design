import React, { useState } from "react";
import logomark from '../assets/Logomark.png'
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <header className="header">
      <div className="desktop-header">
          <div className="head-logomark">
              <img src={logomark} alt="logomark" />
              <h1>Untitled UI</h1>
          </div>
          <button
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hamburger-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <nav className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link">
              Home
            </a>

        
            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => setProductsOpen(!isProductsOpen)}
              >
                Products <span className="dropdown-icon">&#x25BC;</span>
              </button>
              {isProductsOpen && (
                <div className="dropdown-menu">
                  <a href="#product1" className="dropdown-item">
                    Product 1
                  </a>
                  <a href="#product2" className="dropdown-item">
                    Product 2
                  </a>
                </div>
              )}
            </div>

            <div className="dropdown">
              <button
                className="dropdown-button"
                onClick={() => setResourcesOpen(!isResourcesOpen)}
              >
                Resources <span className="dropdown-icon">&#x25BC;</span>
              </button>
              {isResourcesOpen && (
                <div className="dropdown-menu">
                  <a href="#blog" className="dropdown-item">
                    Blog
                  </a>
                  <a href="#guides" className="dropdown-item">
                    Guides
                  </a>
                </div>
              )}
            </div>

            <a href="#pricing" className="nav-link">
              Pricing
            </a>
          </nav>

      </div>
      <div className="profile">
        <img
          src='https://s3-alpha-sig.figma.com/img/6c1f/e88a/3b9e8dfddf4a065581b04df49638ca9c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N-Rvo9KTT9peDF34ZjXAFsCmViEPt6~ShOTlYZ2aVIlOzuaUQUjatnqmAomM2wTrCV6Q-~9AROnL25BQTq4oBgfpq7lVckGxk1Pmh7Urp3FZ2i9f5HAJ8mbhk~VTC~hj~EQd8pN~9fLaTnjLQWQEUjA0BbC0soI2aP5e0sSquvyVYsdTMdKtCuxYiPT7q3ofDmLNy2t1NpGonxllTQiOvrzTUkidzzbJyYV6Zh6HsgesUl~63jNabEb6sVJK5299p5hbkmo0PRBctmVQrq3cyQLH1HbniWfP55TiraL3KqIYf5P~fnTqF-CPQpdvTcmTdMFDuXXjQqkEScX3HXqHHg__'
          alt="User Profile"
          className="profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
