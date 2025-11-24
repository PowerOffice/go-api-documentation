import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GettingStarted from './components/GettingStarted';
import ResourceCards from './components/ResourceCards';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <GettingStarted />
      <ResourceCards />
      <div className="skybox" />
    </div>
  );
}

export default App;
