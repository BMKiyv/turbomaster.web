import React from 'react';
import First from '../../components/First/index';
import Offer from '../../components/Offer/index';
import Contacts from '../../components/Contacts/index';
import Footer from '../Footer/index';
import WhyWe from '../../components/WhyWE/index';
import AboutUs from '../../components/AboutUs';
import PhotoGalerry from '../../components/Photogalerry';


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