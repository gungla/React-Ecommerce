import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

import React, {useState} from "react"

 

function App() {

  /*
  const [contador, setContador] = useState(0)


  function handleCount(){
    setContador(contador + 1)
  }

  function handleCountm(){
    if(contador < 1){
      alert('cero');
    }else{
      setContador(contador - 1)
    }
  }

  function addToCart(){
    if(contador >= 1){
      alert('Usted añadio ' + contador + ' producto al carrito')
    }else if(contador <= 0){
      alert('CERO ' + contador + ' productos al carrito')
    }else{
      alert('No tiene ningun producto seleccionado');
    }     
  }
  */

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Soy un Item..." contenido="Contenido"/>
      <ItemCount stock={5} initial={1} />
    </div>
  );
}

export default App;
