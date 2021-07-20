import React from 'react'
import { Card, Button, Col } from "react-bootstrap";

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
                        {item.price}  
                    </small>
                    </Card.Footer>
                    <Button variant="outline-dark" bsSize="small" className="boton">
                        Más información
                    </Button>
                </Card.Body>
            </Card>  
        </Col>
    )
}

export default Item




