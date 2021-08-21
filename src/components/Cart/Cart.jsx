import React, { useEffect, useState } from "react";
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import {useCartContext} from '../../Context/CartContext'
import FormularioOrden from '../FormularioOrden/FormularioOrden'
import {getFireStore} from  '../../data/firebaseService'
import firebase from "firebase/app";
import 'firebase/firestore'
import './Cart.css'

function Cart() {

  const { product, clearCart, deleteFromCart, precioTotal } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [orderId, setOrderId] = useState("")
  const [confirmation, setConfirmation] = useState(false)

  const handleFinalize = () =>{
    setShowForm(true)
  }

  const createOrder = (buyer) =>{
    const db = getFireStore()
    const orders = db.collection('order')
     
    const newOrder = {
        buyer,
        product,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: precioTotal()
    }
    
    orders.add(newOrder).then(({id}) => {
          setOrderId(id)
          setConfirmation(true)
          clearCart()
      }
    ).catch((e) => {console.log(e)})    
}

//console.log("Confirmacion",confirmation)
//console.log("orderId",orderId) 

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Col>
        <Container>
          {loading && <Loading/>}  
          <div>
          {!loading && product.length !== 0  && orderId === "" && (
          <div className="container">
            {showForm ? 
            <div className="cardq">
              <FormularioOrden createOrder={createOrder}/> 
            </div>
            : 
            <div>
            <h4 className="titSeccion">Detalle del carrito</h4>
            <table className="table table-hover table-condensed">
              <thead>
              <tr>
                <th>
                  Producto
                  <span className="notShow">
                    {confirmation}
                    {orderId}
                  </span>
                </th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th className="text-center">Subtotal</th>
                <th>
                  <button className="btn btn-primary" onClick={clearCart}>
                    Limpiar carrito
                  </button>
                </th>
              </tr>
            </thead>
            {product.map((item) => (
            <tbody key={item.item.id}>
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src={item.item.pictureURL}
                        alt={item.item.title}
                        className="img-responsive"
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="moveLeft1">{item.item.title}</h4>
                      <p className="moveLeft">{item.item.description}</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">
                $ {item.item.price}
                </td>
                <td data-th="Quantity">
                  {item.quantity}
                </td>
                <td data-th="Subtotal" className="text-center">$
                $ {item.quantity * item.item.price}
                </td>
                <td className="actions" data-th="">
                  <button onClick={() => deleteFromCart(item)} className="btn btn-danger btn-sm">
                    Eliminar producto  
                  </button>								
                </td>
              </tr>
            </tbody>
            ))}
            <tfoot>
              <tr>
                <td><Link to="/" className="btn btn-info">Continuar comprando</Link></td>
                <td colSpan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center"><strong>Total $ {precioTotal()}</strong></td>
                <td><button onClick={handleFinalize} className="btn btn-success btn-block">Checkout</button></td>
              </tr>
            </tfoot>
          </table>
          </div>
          }
       </div>
          )}

          <div className="card">
          {!loading && orderId
            ? <div>
                <h3>
                  Orden NO.<span className="validation">{orderId}</span> ha sido confirmada.
                </h3> 
              </div>
            : <span></span>
          }

          {!loading && product.length === 0 && orderId === "" && (
            <div>
                <h1 className="alinear mt-4">No hay productos en el carrito</h1>
                <div className="text-center"> 
                  <Link className="alinear btn btn btn-primary mt-2 mb-4" to="/">
                    Continuar comprando
                  </Link>
                </div>
            </div>
          )}
          </div>
          </div>
        </Container>
      </Col>
    </div>
  );
}

export default Cart;