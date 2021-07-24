import React, {useEffect, useState} from 'react'
import { Row, Container, Col, Card} from "react-bootstrap";

function Cart() {

    const [loading, setLoading] = useState(0) 

    useEffect(() => {
     setLoading(true);
     setTimeout(() => {
        setLoading(false);
      }, 2000);
    },[]);

    return (
        <div>
            <Col className="spacing">
                <Container>
                <h1 className="load">   
                    {loading && "Cargando..."}
                </h1> 
                {!loading && 
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
                }
                </Container>
            </Col>
        </div>
    )
}

export default Cart
