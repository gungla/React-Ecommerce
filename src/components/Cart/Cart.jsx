import React from 'react'
import { Row, Container, Col, Card} from "react-bootstrap";

function Cart() {
    return (
        <div>
            <Col className="spacing">
                <Container>
                <Card className="card">
                    <Row>
                        <Col>
                            <Card.Body>
                                <Card.Title>
                                    CARRITO
                                </Card.Title>
                                <Card.Text className="espacios">
                                    Detalle de carrito
                                </Card.Text>
                                <Card.Footer>
                                <small className="text-muted">
                                    Precio total 
                                </small>
                                </Card.Footer>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                </Container>
            </Col>
        </div>
    )
}

export default Cart
