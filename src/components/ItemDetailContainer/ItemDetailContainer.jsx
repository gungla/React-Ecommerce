import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {Row, Container, Col} from "react-bootstrap";
import { useParams  } from 'react-router-dom'
import { Loading } from "../Loading/Loading";
import {useCartContext} from '../../Context/CartContext'
import {getFireStore} from  '../../data/firebaseService'

function ItemDetailContainer() {

    const [loading, setLoading] = useState(true)
    const [items, setItemList] = useState([])      
    const {id} = useParams()
    const { addProduct } = useCartContext();

    useEffect(() => {
        setLoading(true)
        const db = getFireStore()
        const getItem = db.collection("items").doc(id)

        getItem.get().then((querySnapshot) => {
            setItemList({id:querySnapshot.id, ...querySnapshot.data()})
        })
        .catch((e) => {console.log(e)})
        .finally(()=>{
            setLoading(false)  
        })
        
    },[id])

    return (
        <div>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            {loading && <Loading />}
                            {!loading && <ItemDetail items={items} addProduct={addProduct} />}
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default ItemDetailContainer