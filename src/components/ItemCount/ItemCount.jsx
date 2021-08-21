import React, {useState} from "react"
import { Link } from 'react-router-dom'
import './ItemCount.css'
import toast, { Toaster } from "react-hot-toast";


function ItemCount(props) {

    const {stock, initial, onAdd} = props;
    const [count, setCount] = useState(initial);

    const addItem = () => { 
        if(count < stock){
            setCount(count + 1)
        }
    }

    const removeItem = () => { 
        if(count > initial){
            setCount(count - 1)
        }
    }

    const [pulsado, setPulsado] = useState(false); 

    const handleAdd = () => { 
        onAdd(count)
        setPulsado(true)
        toast.success("Se añadio el producto al carrito!")
    }
    
    const Componente1 = () => (
        <button className="btn btn-primary w-100" onClick={handleAdd}>Añadir al carrito</button>
    );

    return (
        <div>
            <Toaster/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        {!!stock ? (
                        <div>
                            <div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="button-container">
                                            <button className="cart-qty-minus" onClick={removeItem} disabled={count === initial}>-</button>
                                                <span className="qty form-control">{count}</span>
                                            <button className="cart-qty-plus" onClick={addItem} disabled={count === stock}>+</button>
                                        </div>
                                    </div>
                                    <div className="col-sm">                     
                                    {pulsado ? (
                                        <Link className="btn btn-danger w-100" to="/cart">Terminar compra</Link>
                                    ) : (
                                        <Componente1 />
                                    )} 
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        ) : (
                            <div>
                                <Link className="boton" to="/">Continuar Comprando</Link>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
