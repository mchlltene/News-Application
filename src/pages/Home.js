import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import News from '../components/News';

const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <News/>
      <Footer />
    </>
  );
}

export default Home;
