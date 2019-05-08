import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './pages/HomePage'
import About from './pages/AboutPage'
import Products from './pages/ProductsPage'
import Contact from './pages/ContactPage';
import SingleProduct from './pages/SingleProductPage'
import Cart from './pages/CartPage'
import Login from './pages/LoginPage'
import SignUp from './pages/SignUpPage'
import ResetPassword from './pages/ResetPasswordPage'
import Default from './pages/Default'

import {Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'

function App() {
  return (
  <>
    {/* navbar,sidebar,cart,footer */}
    <Navbar/>
    <Sidebar/>
    <SideCart/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" exact component={Products} />
      <Route path="/product/:id" component={SingleProduct} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route component={Default} />
    </Switch>
    <Footer/>
  </>
  );
}

export default App;
