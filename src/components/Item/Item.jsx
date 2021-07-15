import React from 'react'

function Item( { item } ) {
    return (
        <li key={item.id}>
            {item.title}
            {item.description}
            {item.precio}
            <img src={item.pictureURL} width='100'  alt={item.title}/>
        </li>
    )
}

export default Item




