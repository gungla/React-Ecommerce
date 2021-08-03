import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';
import {Row, Container, Col, Spinner} from "react-bootstrap";
import { useParams } from 'react-router-dom'
import data from '../../data/data'


export default function ItemListContainer(props) {


    const [itemList, setItemList] = useState([])  
    
    const [loading, setLoading] = useState(true) 

    const {categoryId} = useParams()
    
    useEffect(() => {
        setLoading(true);
        
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
            setTimeout(()=>{
                setLoading(false);
                resuelto(data)

                if(categoryId===undefined){
                    getPromiseTask()
                        .then((resp)=> setItemList(resp)) 
                        .catch(err=> { console.log('un error')}) 
                }else{
                    getPromiseTask()
                        .then((resp)=> setItemList(data.filter(item => item.category===categoryId)))
                        .catch(err=> { console.log('un error')}) 
                }

            },2000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
   
    }, [categoryId])
    //console.log(itemList)



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
                            <h1 className="load"> 
                                {loading && <Spinner animation="grow" />}
                            </h1>
                            {!loading && <ItemList itemList={itemList}/> }
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}




