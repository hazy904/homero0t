import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Home Root
          </a>
          <input
            type="text"
            id="text"
            placeholder="..............search products__________"
            required
          ></input>
          <button>search</button>
      </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen}></Route>
     <Route path="/" component={HomeScreen} exact></Route>
     <Route path="/cart/:id?" component={CartScreen}></Route>
     <Route path="/signin" component={SigninScreen}></Route>
     <Route path="/profile" component={ProfileScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
      </BrowserRouter>
    );
  }
  export default App;