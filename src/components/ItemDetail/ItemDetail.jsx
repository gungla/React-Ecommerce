import React from 'react'
import { Row, Container, Col, Card} from "react-bootstrap";
import { useParams, NavLink } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail( {items} ) {

    const {id} = useParams()

    return (
        <div>
           <Col xs={12} md={12}>
                <h4 className="titSeccion">
                    Detalle del producto
                </h4>
            </Col>
           {items.filter(item => item.id === id).map(filteredItem => (
            <Col className="spacing">
                <Container>
                    <Card key={filteredItem.id} className="card">
                    <Row>
                        <Col xs={12} md={4}>
                            <Card.Img variant="top" src={filteredItem.pictureURL} alt={filteredItem.title}/>
                        </Col>
                        <Col xs={12} md={8}>
                            <Card.Body>
                                <Card.Title>
                                    {filteredItem.title} [<small>Categoria: {filteredItem.category}</small>]
                                </Card.Title>
                                <Card.Text className="espacios">
                                    {filteredItem.description}
                                </Card.Text>
                                <Card.Footer>
                                <small className="text-muted">
                                    {filteredItem.price}  
                                </small>
                                </Card.Footer>
                                <ItemCount stock={5} initial={1}/>
                                <NavLink className="boton" to='/'>Volver</NavLink>
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