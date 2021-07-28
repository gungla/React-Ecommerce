import React, {useState} from 'react'
import { Row, Container, Col, Card} from "react-bootstrap";
import { useParams } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount';


// poner el onAdd como funcion con prop en el componente <ItemCount stock={5} initial={1}/>
// guardar el estado de la cantidad de item seleccionado
// cambiar el boton de anadir al carrito por terminar compra

//function ItemDetail( {items={}} ) {
function ItemDetail( {items} ) {

    const {id} = useParams()
    
    const [count, setCount] = useState()

    function onAdd(){
        setCount(count)
        //alert('onAdd');
    }

    console.log(count);
    
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
                                <ItemCount onAdd={onAdd} stock={5} initial={1}/>
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