import React from 'react'
import { Row, Container, Col, Card, Button} from "react-bootstrap";

function ItemDetail( {items} ) {
    return (
        <div>
           <h1>Item Detail</h1>
           {items.filter(item => item.id === "1").map(filteredItem => (
 


                <Col className="spacing">  
                    <Container>
                        <Card key={filteredItem.id} className="card">
                            <Row>
                                <Col xs={6} md={4}>
                                    <Card.Img variant="top" src={filteredItem.pictureURL} alt={filteredItem.title}/>
                                </Col>
                                <Col xs={12} md={8}>
                                <Card.Body>
                                    <Card.Title>
                                        {filteredItem.title}
                                    </Card.Title>
                                    <Card.Text className="espacios">
                                        {filteredItem.description}
                                    </Card.Text>
                                    <Card.Footer>
                                    <small className="text-muted">
                                        {filteredItem.price}  
                                    </small>
                                    </Card.Footer>
                                    <Container>
                                        <Row>
                                            <Col xs={6} md={4}>
                                                <Button variant="outline-warning" bsSize="small" className="boton">
                                                    Volver
                                                </Button>
                                                </Col>
                                                <Col xs={6} md={4}>
                                                <Button variant="outline-dark" bsSize="small" className="boton">
                                                    Comprar
                                                </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                                </Col>
                            </Row>
                        </Card> 
                    </Container>
                </Col>


            ))}
        </div>
    )
}

export default ItemDetail
