import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {Row, Container, Col} from "react-bootstrap";
import { useParams  } from 'react-router-dom'
import data from '../../data/data'

function ItemDetailContainer() {

    const [items, setItemList] = useState([])   

    const [loading, setLoading] = useState(true)   

    const {id} = useParams()
    
    useEffect(() => {
        setLoading(true);
        
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
            setTimeout(()=>{
                setLoading(false);
                resuelto(data.filter(item => item.id === id))

                if(id===undefined){
                    getPromiseTask()
                        .then((resp)=> setItemList(resp)) 
                        .catch(err=> { console.log('un error')}) 
                }else{
                    getPromiseTask()
                        .then((resp) => setItemList(resp))
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
        

    }, [id])

    //console.log(data)

    return (
        <div>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="load"> 
                                {loading && "Cargando..."}
                            </h1>
                            {!loading && 
                                <ItemDetail items={items} />   
                            }
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default ItemDetailContainer