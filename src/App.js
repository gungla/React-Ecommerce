import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SlideHome from './components/SlideHome/SlideHome'
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {CartContextProvider} from './Context/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
            <NavBar/>
            <SlideHome/>
            <Switch>
              <Route exact path='/'>
                <ItemListContainer greeting="Catálogo de Produtos"/>
              </Route>
              <Route exact path='/cart'>
                <Cart/>
              </Route>
              <Route exact path='/category/:categoryId'>
                <ItemListContainer greeting="Catálogo de Produtos"/>
              </Route>
              <Route exact path='/item/:id' component={ItemDetailContainer}/>
            </Switch>
            <Footer/>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;

