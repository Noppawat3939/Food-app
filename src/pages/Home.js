import React from 'react';
import { useGlobalContext } from '../context';
import Navbar from '../components/Navbar';
import FoodList from '../components/FoodList';
import SearchForm from '../components/SearchForm';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <FoodList />
        <Footer />
    </>
  )
}

export default Home;