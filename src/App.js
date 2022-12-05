
import HomePage from './pages/HomePage';
import { BrowserRouter as Router ,Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import {  CartCheck, HouseExclamation, Shop } from 'react-bootstrap-icons';
import TopDetails from './components/TopDetails';

function App() {
  return (
    
    <Router>
<TopDetails />
<Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
      <Container>
        <Navbar.Brand to="/" className = "" >
        <Image
              alt=""
              src="\images\Jatranlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              roundedCircle
            />{' '}
           <b color='black'>Jatrana Stainless Steel</b> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to = "/">Home <HouseExclamation /> </Link>
            <Link to = "/productpage">Products <Shop /> </Link>
            <Link to = "/cart">Cart <CartCheck /> </Link>
            <NavDropdown title="More of Jatrana" id="collasible-nav-dropdown">
              <NavDropdown.Item href="">Categories</NavDropdown.Item>
              <NavDropdown.Item href="www.e.com">Catalogue </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Account
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/productpage' element={<ProductsPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/cart' element={<CartPage />} />
        

      </Routes>
    </Router>
      
  );
}

export default App;
