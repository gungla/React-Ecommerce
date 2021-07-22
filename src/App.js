import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import React from "react"
import SlideHome from './components/SlideHome/SlideHome'
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/>
          <SlideHome/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting="Soy un Item..." contenido="Contenido"/>
            </Route>
            <Route exact path='/cart'>
              <Cart/>
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer greeting="Soy un Item..." contenido="Contenido"/>
            </Route>
            <Route exact path='/item/:id' component={ItemDetailContainer}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;

