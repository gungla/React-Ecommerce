import './App.css';
import NavBar from './components/NavBar/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import React from "react"
import Carousel from 'react-bootstrap/Carousel'

/*
const addCart = (count) => {
  alert(count);
}
*/

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Carousel fade>
        <Carousel.Item className="altura">
          <img
            className="d-block w-100"
            src="http://disva.com.uy/assets/gun/slide/s1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="altura">
          <img
            className="d-block w-100"
            src="http://disva.com.uy/assets/gun/slide/s2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="altura">
          <img
            className="d-block w-100"
            src="http://disva.com.uy/assets/gun/slide/s3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <ItemCount stock={5} initial={1}/>
      <ItemListContainer greeting="Soy un Item..." contenido="Contenido"/>

      <ItemDetailContainer />

    </div>
  );
}

export default App;

