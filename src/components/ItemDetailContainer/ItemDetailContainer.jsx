import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {Row, Container, Col} from "react-bootstrap";
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {

    const [items, setItemList] = useState([])   

    const {id} = useParams()
    
    useEffect(() => {
        const items=[
            {
                id:'1', 
                title: 'Adidas', 
                category: 'hombre',
                description: 'Championes Adidas', 
                price: '$ 3.290', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p1.jpg'
            },
            {
                id:'2', 
                title: 'Vans', 
                category: 'hombre',
                description: 'Championes Vans', 
                price: '$ 3.490', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p2.jpg'
            },
            {
                id:'3', 
                title: 'Converse', 
                category: 'ninos',
                description: 'Championes Converse', 
                price: '$ 4.890', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p3.jpg'
            },
            {
                id:'4', 
                title: 'Reebok', 
                category: 'ninos',
                description: 'Championes Reebok', 
                price: '$ 4.990', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p4.jpg'
            },
            {
                id:'5', 
                title: 'Topper', 
                category: 'mujer',
                description: 'Championes Topper', 
                price: '$ 4.990', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p5.jpg'
            },
            {
                id:'6', 
                title: 'Puma', 
                category: 'mujer',
                description: 'Championes Puma', 
                price: '$ 4.990', 
                pictureURL: 'http://disva.com.uy/assets/gun/productos/p6.jpg'
            }
        ]   
    
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
    
            setTimeout(()=>{
                resuelto(items.filter(item => item.id === id))
            },3000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
        
       
        if(id===undefined){
            getPromiseTask()
                .then((resp)=> setItemList(resp)) 
                .catch(err=> { console.log('un error')}) 
        }else{
            getPromiseTask()
                .then((resp)=> setItemList(items.filter(item => item.id===id)))
                .catch(err=> { console.log('un error')}) 
        }

    }, [id])

    console.log(items)

    return (
        <div>
            <Col>
                <Container>
                    <Row>
                        <Col>
                            <ItemDetail items={items} />
                        </Col>
                    </Row>
                </Container>
            </Col>
        </div>
    )
}

export default ItemDetailContainer