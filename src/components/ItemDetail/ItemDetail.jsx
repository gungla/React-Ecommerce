import React from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import {Row, Container, Col} from "react-bootstrap";

function ItemDetail() {
    return (
        <div>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            <ItemDetailContainer/>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default ItemDetail
