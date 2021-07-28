import React, {useState} from "react"
import { Link } from 'react-router-dom'


function ItemCount(props) {

    const {stock, initial, onAdd} = props;
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

    const handleAdd = () => { 
        //alert("Cantidad seleccionada: " + count);
        onAdd()
        setPulsado(!pulsado)
    }

    //onAdd(count)
    const Componente1 = () => (
        <button className="boton" onClick={handleAdd}>Añadir al carrito</button>
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
                        {pulsado ? (
                            <Componente1 />
                        ) : (
                            <Link className="boton" exact to="/cart">Terminar compra</Link>
                        )}
                        <br></br>Stock disnpoible: {stock - count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
