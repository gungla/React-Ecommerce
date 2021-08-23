import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link } from "react-router-dom";
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
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        setLoading(true)
        const db = getFireStore()
        const getItem = db.collection("items").doc(id)

        getItem.get().then((querySnapshot) => {
            if (!querySnapshot.exists) {
                setLoading(false)
                setError(true)
                setErrorMessage("Ups! Parece que el producto que buscas ya no existe.")
            } else {
                setItemList({id:querySnapshot.id, ...querySnapshot.data()})
            }
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
                        {error ?
                        <div className="card">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm text-center">
                                        <h3>
                                            {errorMessage}
                                        </h3> 
                                        <p>
                                            <Link className="alinear btn btn btn-primary mt-2 mb-4" to="/">
                                                Continuar comprando
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : 
                            <div>
                                {!loading && <ItemDetail items={items} addProduct={addProduct} />}
                            </div>
                        }
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default ItemDetailContainer