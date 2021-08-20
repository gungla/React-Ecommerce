import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useCartContext} from '../../Context/CartContext'
import 'firebase/firestore'
import {getFireStore} from  '../../data/firebaseService'
import firebase from "firebase/app";

function DetalleCompra() {

    const { product,  deleteFromCart, precioTotal, clearCart } = useCartContext();
    const [orderId, setOrderId] = useState("")
    const [confirmation, setConfirmation] = useState(false)

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
    
    console.log("Confirmacion",confirmation)
    console.log("orderId",orderId)

    return (
        
        <div>  
            {product.length === 0 && orderId === "" && (
            <div>
                <FormularioOrden createOrder={createOrder}/> 
            </div>
            )} 
            <h4 className="titSeccion">Detalle del carrito EXTERNO</h4>
            <table className="table table-hover table-condensed">
              <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th className="text-center">Subtotal</th>
                <th></th>
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
                <td data-th="Price">$ {item.item.price}</td>
                <td data-th="Quantity">
                  {item.quantity}
                </td>
                <td data-th="Subtotal" className="text-center">$ {item.quantity * item.item.price}</td>
                <td className="actions" data-th="">
                  <button onClick={() => deleteFromCart(item)} className="btn btn-danger btn-sm">x</button>								
                </td>
              </tr>
            </tbody>
            ))}
            <tfoot>
              <tr>
                <td><Link to="/" className="btn btn-warning">Continuar comprando</Link></td>
                <td colSpan="2" className="hidden-xs"></td>
                <td className="hidden-xs text-center"><strong>Total $  {precioTotal()}</strong></td>
                <td><button  className="btn btn-success btn-block">Checkout</button></td>
              </tr>
            </tfoot>
          </table>
        </div>   

    )
}

export default DetalleCompra
