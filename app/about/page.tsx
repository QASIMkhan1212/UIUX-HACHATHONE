import React from 'react'
import AboutHero from '../components/aboutHero'
import AboutSection from '../components/aboutsection'
import AboutPopularProduct from '../components/aboutpopularproducts';

const page = () => {
    return (
      <div>
        <AboutHero />
            <AboutSection />
            <AboutPopularProduct />
            
      </div>
    );
}

export default page