import { BsBag } from "react-icons/bs";
import React from 'react'
import './CartWidget.css'
import { useCartContext } from "../../Context/CartContext";

export default function CartWidget() {
    const {iconCart} = useCartContext();

    return (
        <div>
            {iconCart() > 0 ? (
                <div className="circle">
                    <span className="innerTEXT">{iconCart()}</span>
                    <BsBag className="iconoCart"/>
                </div>
                ) : (
                    <span></span>
                )
            }
        </div>
    )
}
