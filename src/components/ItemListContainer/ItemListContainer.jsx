import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {Row, Container, Col} from "react-bootstrap";
import { useParams } from 'react-router-dom'
import { Loading } from "../Loading/Loading";
import {getFireStore} from  '../../data/firebaseService'


export default function ItemListContainer(props) {

    const [itemList, setItemList] = useState([])  
    const [loading, setLoading] = useState(true) 
    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        const db = getFireStore()
        let itemCollection

        if (categoryId){
            itemCollection = db.collection("items").where("category", "==", categoryId)
        } else{
            itemCollection = db.collection("items")
        }
        
        const itemCollectionQuery = itemCollection.get()

        itemCollectionQuery.then((querySnapshot) => {
            setItemList(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((e) => {console.log(e)})
        .finally(()=>{
            setLoading(false)  
        })
        
    },[categoryId])



const {greeting} = props;
    return (
        <div>
            <Col>
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <h4 className="titSeccion">
                                {greeting}
                            </h4>
                        </Col>
                        <Col>
                            {loading && <Loading />}
                            {!loading && <ItemList itemList={itemList}/>}
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}




