import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Features from './components/Features';
import Testimonial from './components/Testimonial';
import FeaturesSection from './components/FeaturesSection';
import FAQs from './components/FAQs';
import BlogPosts from './components/BlogPosts';
import FreeTrial from './components/FreeTrial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Companies />
      <Features />
      <Testimonial />
      <FeaturesSection />
      <FAQs />
      <BlogPosts />
      <FreeTrial />
      <Footer />
    </div>
  );
}

export default App;
