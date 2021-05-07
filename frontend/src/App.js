import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

// screens 
import HomeScreen from './screens/HomeScreen/HomeScreen'; 
import CartScreen from './screens/CartScreen/CartScreen';
import ProductScreen from './screens/ProductScreen/ProductScreen';

// components
import Navbar from './components/Navbar/Navbar'
import Backdrop from './components/Backdrop/Backdrop';
import SideDrawer from './components/SideDrawer/SideDrawer';


function App() {
  const [sideToggle, setSideToggle] = useState(false)
  return (
    <Router> 
      <div className="app">
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen}/>
            <Route exact path='/product/:id' component={ProductScreen}/>
            <Route exact path='/cart' component={CartScreen}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
