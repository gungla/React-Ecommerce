import React from 'react'
import { Card, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom'
import './Item.css'

function Item( { item } ) {
    return (    
        <Col className="spacing">    
            {!!item.stock ? (
                <div className="stockOn">
                    Stock on
                </div>
            ) : (
                <div className="stockOff">
                    Stock off
                </div>
            )}
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
                    {!!item.stock ? (
                        <NavLink className="btn btn-primary w-100 mt-2" exact to={`/item/${item.id}`}>Ver detalles</NavLink>
                    ) : (
                        <span className="btn btn btn-dark w-100 mt-2" disabled>No hay stock</span>
                    )}
                </Card.Body>
            </Card>  
        </Col>
    )
}

export default Item




