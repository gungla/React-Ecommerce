import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

import React from "react"

/*
const addCart = (count) => {
  alert(count);
}
*/


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Soy un Item..." contenido="Contenido"/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;

