import React from 'react'
import Item from '../Item/Item'


function ItemList( {itemList }) {

    return (
        <div>
            <ul>
                {itemList.map((item)=><Item item={item} />)}
            </ul>
        </div>
    )
}

export default ItemList
