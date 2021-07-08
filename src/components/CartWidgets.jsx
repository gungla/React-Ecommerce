import React from 'react'
import cart from '../../src/cart.svg';

export default function CartWidgets() {
    return (
        <Nav.Link onClick={carrito} href="#link"><img className="App-cart" src={cart} width="20" height="20" alt="Carrito"/></Nav.Link>
    )
}

export default CartWidgets