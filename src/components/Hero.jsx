import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img src="/deviser_orange-sky.png" alt="PowerOffice Go logo against an orange sky background" />
        </div>
        <div className="hero-content">
          <h1>Welcome to the PowerOffice Go API</h1>
          <p className="hero-subtitle">
            <strong>Hello Developers!</strong> We in the PowerOffice Go team aim to provide you with
            a simple to use, yet powerful API to interface your application with PowerOffice Go.
          </p>
          <p>
            This site is the starting point and the hub for finding information about developing
            third party applications that interact with PowerOffice Go.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
