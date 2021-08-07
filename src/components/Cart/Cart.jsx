import React, { useEffect, useState } from "react";
import { Container, Col, Card, Spinner, Table} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

function Cart() {
  const { product, clearCart, deleteFromCart, precioTotal } = useCartContext();
  //console.log(product);
  //console.log(precioProductoUnicoTotal())

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Col className="spacing">
        <Container className="card">
          <h1 className="load">{loading && <Spinner animation="grow" />}</h1>

          {!loading && product.length !== 0 && (  
              <Card className="card">      
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>
                            Detalle del carrito 
                        </th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>
                            <button className="btn btn-danger" onClick={clearCart}>Limpiar carrito</button>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
            </Table> 
            </Card> 
          )}

          {!loading && product.length !== 0 && (
            <Card className="card">
                {product.map((item) => (
                    <Table striped bordered hover size="sm" key={item.item.id}>
                        <tbody>
                            <tr>
                                <td>
                                    <img
                                    variant="top"
                                    src={item.item.pictureURL}
                                    alt={item.item.title}
                                    className="imgCart"
                                    />
                                </td>
                                <td>{item.item.title}</td>
                                <td>
                                    {item.quantity}
                                </td>
                                <td>
                                    {item.quantity * item.item.price}
                                </td>
                                <td>
                                    <button  className="btn btn-primary" onClick={() => deleteFromCart(item)}>X</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                ) 
                )}
            </Card>
          )}

          {!loading && product.length !== 0 && (
            <Card className="card"> 
                <Card.Body>
                    <Card.Footer>
                    <small className="text-muted aca">
                        Precio Total $ {precioTotal()} 
                    </small>
                    </Card.Footer>
                </Card.Body>
            </Card>  
          )}

          {!loading && product.length === 0 && (
            <Card className="card">
                <Card.Body>
                <Card.Title>
                    No hay productos en el carrito
                </Card.Title>
                <Card.Footer>
                    <small className="text-muted">
                        <Link className="boton" to="/">
                            Continuar comprando
                        </Link> 
                    </small>
                </Card.Footer>
                </Card.Body>
          </Card> 
          )}
        </Container>
      </Col>
    </div>
  );
}

export default Cart;