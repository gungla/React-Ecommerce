import React from 'react'
import Item from '../Item/Item'
import {Row, Container} from "react-bootstrap";


function ItemList( {itemList }) {

    return (
        <div>
            <Container>
                <Row md={3} xs={1}>
                    {itemList.map((item)=><Item item={item} />)}
                </Row>
            </Container>
        </div>
    )
}

export default ItemList
