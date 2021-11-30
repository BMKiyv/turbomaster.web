import React from 'react';
import First from '../First/index';
import Offer from '../Offer/index';
import Contacts from '../Contacts/index';
import Footer from '../Footer/index';
import WhyWe from '../WhyWE/index';
import AboutUs from '../AboutUs';
import PhotoGalerry from '../Photogalerry';


  const Home = ({path}) => {
    return(
      <div className="App">
        <First path = {path}/>
        <WhyWe />
        <Offer path = {path}/>
        <AboutUs />
        <PhotoGalerry />
        <Contacts />
        <Footer />
      </div>
    )
  }

  export default Home;