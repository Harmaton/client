import React from 'react'
import About from '../components/About';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Topbar from '../components/Topbar';
import Feedback from '../components/Feedback';
import '../styles/HomePage.css';
import ScrolltoTopButton from '../components/ScrolltoTopButton';

export default function HomePage() {
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
