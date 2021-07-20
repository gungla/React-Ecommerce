import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import {Row, Container, Col} from "react-bootstrap";

function ItemDetailContainer() {

    const [items, setItemList] = useState([])   
    
    
    useEffect(() => {
        const items=[
        {
            id:'1', 
            title: 'Adidas', 
            description: 'Championes Adidas', 
            price: '$ 3.290', 
            pictureURL: 'http://disva.com.uy/assets/gun/productos/p1.jpg'
        },
        {
            id:'2', 
            title: 'Vans', 
            description: 'Championes Vans', 
            price: '$ 3.490', 
            pictureURL: 'http://disva.com.uy/assets/gun/productos/p2.jpg'
        },
        {
            id:'3', 
            title: 'Converse', 
            description: 'Championes Converse', 
            price: '$ 4.890', 
            pictureURL: 'http://disva.com.uy/assets/gun/productos/p3.jpg'
        },
        {
            id:'4', 
            title: 'Reebok', 
            description: 'Championes Reebok', 
            price: '$ 4.990', 
            pictureURL: 'http://disva.com.uy/assets/gun/productos/p4.jpg'
        },
        {
            id:'5', 
            title: 'Topper', 
            description: 'Championes Topper', 
            price: '$ 4.990', 
            pictureURL: 'http://disva.com.uy/assets/gun/productos/p5.jpg'
        },
        {
            id:'6', 
            title: 'Puma', 
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
                resuelto(items.filter(item => item.id === "1"))
            },3000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
        getPromiseTask()
    .then((resp)=> setItemList(resp))    
    .catch(err=> { console.log('un error')})    
    }, [])

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