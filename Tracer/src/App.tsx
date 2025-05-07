import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
// import { ProductShowcase } from './components/ProductShowcase';
import { Subscription } from './components/Subscription';
// import { Stats } from './components/Stats';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        {/* <ProductShowcase /> */}
        {/* <Stats /> */}
        <Subscription />
      </main>
      <Footer />
    </div>
  );
}

export default App;