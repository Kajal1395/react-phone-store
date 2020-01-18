import React from 'react';
import {Route , Link , Switch} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import  Details from './components/Details';
import  Default from './components/Default';
import  ProductDetails from './components/ProductDetails';
import  Carts from './components/Carts';
import Modal from './components/modal';

class App extends React.Component{
  render(){
    return(
    <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductDetails}/>
          <Route  path="/details" component={Details}/>
          <Route  path="/cart" component={Carts}/>
          <Route component={Default}/>
        </Switch>   
        <Modal/>   
    </React.Fragment>

    );
  }
}

export default App;
