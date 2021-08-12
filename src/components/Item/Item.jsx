import React from 'react'
import { Card, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Item.css'

function Item( { item } ) {
    return (    
        <Col className="spacing">    
            <Card key={item.id} className="card">
                <Card.Img variant="top" src={item.pictureURL} alt={item.title}/>
                <Card.Body>
                    <Card.Title>
                        {item.title}
                    </Card.Title>
                    <Card.Text className="espacios">
                        {item.description}
                    </Card.Text>
                    <Card.Footer>
                    <small className="text-muted">
                        $ {item.price}  
                    </small>
                    </Card.Footer>
                    <NavLink className="boton" exact to={`/item/${item.id}`}>Ver detalles</NavLink>
                </Card.Body>
            </Card>  
        </Col>
    )
}

export default Item




