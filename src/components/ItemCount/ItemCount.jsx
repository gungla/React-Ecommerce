import React, {useState} from "react"
import { NavLink } from 'react-router-dom'


function ItemCount(props) {

    const {stock, initial} = props;
    const [count, setCount] = useState(initial)

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

    const [pulsado, setPulsado] = useState(true);

    const onAdd = () => { 
        //alert("Cantidad seleccionada: " + count);
        setPulsado(!pulsado)
    }

    //onAdd(count)
    const Componente1 = () => (
        <button className="boton" onClick={onAdd}>Añadir al carrito</button>
    );

    console.log(count);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={removeItem} disabled={count === initial}>-</button>
                        {count}
                        <button onClick={addItem} disabled={count === stock}>+</button>
                        {/*<button onClick={addCart}>Añadir al carrito</button>*/}
                        {pulsado ? (
                            <Componente1 />
                        ) : (
                            <NavLink className="boton" exact to="/cart">Terminar compra</NavLink>
                        )}
                        <br></br>Stock disnpoible: {stock - count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
