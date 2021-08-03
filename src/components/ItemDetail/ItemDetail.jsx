import React, { useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
//import { useCartContext } from "../../Context/CartContext";

//function ItemDetail( {items={}} ) {
function ItemDetail({ items, addProduct }) {

  const [count, setCount] = useState();

  function onAdd(itemCount) {
    setCount(itemCount);
    //alert(itemCount);
    addProduct(items[0], itemCount)
    //alert('onAdd');
  }
  console.log(count);

  return (
    <div>
      <Col xs={12} md={12}>
        <h4 className="titSeccion">Detalle del producto</h4>
      </Col>
      {items.map((listar) => (
        <Col className="spacing" key={listar.id}>
          <Container>
            <Card className="card">
              <Row>
                <Col xs={12} md={4}>
                  <Card.Img
                    variant="top"
                    src={listar.pictureURL}
                    alt={listar.title}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Card.Body>
                    <Card.Title>
                      {listar.title} [
                      <small>Categoria: {listar.category}</small>]
                    </Card.Title>
                    <Card.Text className="espacios">
                      {listar.description}
                    </Card.Text>
                    <Card.Footer>
                      <small className="text-muted">{listar.price}</small>
                    </Card.Footer>
                    <ItemCount onAdd={onAdd} stock={5} initial={1} />
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Container>
        </Col>
      ))}
    </div>
  );
}

export default ItemDetail;
