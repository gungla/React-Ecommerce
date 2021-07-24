import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function SlideHome() {
    return (
        <div>
            <Carousel fade>
            <Carousel.Item className="altura">
              <img
                className="d-block w-100"
                src="http://disva.com.uy/assets/gun/slide/s1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>SLIDE 1</h1>
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
                <h1>SLIDE 2</h1>
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
                <h1>SLIDE 3</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default SlideHome
