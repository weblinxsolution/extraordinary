import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import Banner from './Components/Banner';
import NftInformation from './Components/NftInformation';
import Stacking from './Components/Stacking';
import Table from './Components/Table';

function App() {

  return (
    <>
      <Header/>
      <Banner/>
      <Table/>
      <NftInformation/>
      <Stacking/>
      <Footer/>
    </>
  )
}

export default App
