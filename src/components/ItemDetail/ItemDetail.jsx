import React, { useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({ items, addProduct }) {

  const stock = items.stock
  const initial = 1
  const [count, setCount] = useState();

  function onAdd(itemCount) {
    setCount(itemCount);
    addProduct(items, itemCount)
  }

  //console.log(count);

  return (
    <div>
      <Col xs={12} md={12}>
        <h4 className="titSeccion">Detalle del producto</h4>
      </Col>
      
        <Col className="spacing" key={items.id}>
          <Container>
          {!!items.stock ? (
                <div className="stockOn">
                    Stock on
                </div>
            ) : (
                <div className="stockOff">
                    Stock off
                </div>
            )}
            <Card className="card">
              <Row>
                <Col xs={12} md={4}>
                  <Card.Img
                    variant="top"
                    src={items.pictureURL}
                    alt={items.title}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Card.Body>
                    <Card.Title>
                      {items.title}   
                      <span className="notshow">{count}</span>
                    </Card.Title>
                    <Card.Text className="espacios">
                      {items.description}
                    </Card.Text>
                    <Card.Footer>
                      <small className="text-muted"> $ {items.price}</small>
                    </Card.Footer>
                    <ItemCount onAdd={onAdd} stock={stock} initial={initial} />
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </Col>
      
    </div>
  );
}

export default ItemDetail;
