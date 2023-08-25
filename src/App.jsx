import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Banner from './Components/Banner';
import NftInformation from './Components/NftInformation';
import Stacking from './Components/Stacking';
import Table from './Components/Table';
import StackCards from './Components/StackCards';
import Cards from './Components/Cards';
import React from 'react';
import { Dots } from 'react-preloaders';

function App() {

  return (
    <>
      {/* <Dots /> */}
      <Header />
      <Banner />
      <Cards />
      <NftInformation />
      <Stacking />
      {/* <Table/> */}
      <StackCards />
      <Footer />
    </>
  )
}

export default App
