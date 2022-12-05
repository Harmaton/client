import React from 'react'
import About from '../components/About';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Topbar from '../components/Topbar';
import TopDetails from '../components/TopDetails';
import TopNavbar from '../components/TopNavbar';
import Feedback from '../components/Feedback';
import '../styles/HomePage.css';

export default function 
() {
  return (
    <div className='Homepage'>
        <>
     <Topbar />
     <About />
     <ProductList />
     <Feedback />
     <Footer />
     
     </>
    </div>
  )
}
