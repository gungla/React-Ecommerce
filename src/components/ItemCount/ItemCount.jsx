import React, {useState} from "react"


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

    const addCart = () => { 
        alert("Cantidad seleccionada: " + count)
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <button onClick={removeItem} disabled={count === initial}>-</button>
                        {count}
                        <button onClick={addItem} disabled={count === stock}>+</button>
                        <button onClick={addCart}>Añadir al carrito</button>
                        Stock disnpoible: {stock - count}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCount
