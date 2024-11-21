import React from "react";
import featuredicon1 from '../assets/featured_icon1.png';
import featuredicon2 from '../assets/featured_icon2.png';
import featuredicon3 from '../assets/featured_icon3.png';
import featuredicon4 from '../assets/featured_icon4.png';
import featuredicon5 from '../assets/featured_icon5.png';
import featuredicon6 from '../assets/featured_icon6.png';
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: featuredicon1,
      title: "Share team inboxes",
      description:
        "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    },
    {
      icon: featuredicon2,
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      icon: featuredicon3,
      title: "Manage your team with reports",
      description:
        "Measure what matters with easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.",
    },
    {
      icon: featuredicon4,
      title: "Connect with customers",
      description:
        "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email.",
    },
    {
      icon: featuredicon5,
      title: "Connect the tools you already use",
      description:
        "Explore 100+ integrations that make your workflow more efficient and familiar. Plus, our extensive developer tools.",
    },
    {
      icon: featuredicon6,
      title: "Our people make the difference",
      description:
        "We’re an extension of your customer service team, and all of our resources are free. Chat to our team 24/7 for help.",
    },
  ];

  return (
    <div className="features-container">
      <div className="features-header">
        <h1 className="features-tagline">Features</h1>
        <h1 className="features-title">Analytics that feels like it’s from the future</h1>
        <p className="features-description">
          Powerful, self-serve product and growth analytics to help you convert, engage, 
          and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img className="feature-icon" src={feature.icon} alt="feature icons"/>
            <h2 className="feature-title">{feature.title}</h2>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
