import React, {useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import {getFireStore} from  '../../data/firebaseService'
import './SlideHome.css'

function SlideHome() {

  const [slides, setSlides] = useState([])  

  useEffect(() => {
    const db = getFireStore()
    const itemCollection = db.collection('slidehome')
    itemCollection.get().then((querySnapshot) => {
        if (querySnapshot.size === 0) {
            console.log('no results')
        } else {
            setSlides( querySnapshot.docs.map( doc => ( {...doc.data(), id: doc.id} )))
        }
    })
    .catch((error) => {
        console.log('Error searching slidehome', error)
    })
}, [])

    return (
        <div>
            <Carousel fade>
            {slides.map((slide, i) => {
                return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-100"
                    src={slide.imagen}
                    alt={slide.titulo}
                  />
                   <Carousel.Caption>
                    <h1>{slide.titulo}</h1>
                    <p>{slide.subtitulo}</p>
                    <Link className="btn btn-warning" to={slide.url}>{slide.category}</Link>
                  </Carousel.Caption>
                </Carousel.Item>
                )
            })}
          </Carousel>
        </div>
    )
}

export default SlideHome
