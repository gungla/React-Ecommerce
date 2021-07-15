import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList';


export default function ItemListContainer(props) {

    const [itemList, setItemList] = useState([])    
    useEffect(() => {
        const items=[
        {
            id:'sadfsadfih654sadf', 
            title: 'Titulo 1', 
            description: 'Descripcion 1', 
            precio: '$ 235', 
            pictureURL: 'https://s.fenicio.app/f2/isl/productos/ee8900-1_2000-2000_1587924736_8e5.jpg'
        },
        {
            id:'sadfsadfih654ssfdd', 
            title: 'Titulo 2', 
            description: 'Descripcion 2', 
            precio: '$ 532', 
            pictureURL: 'https://s.fenicio.app/f2/isl/productos/1-37_2000-2000_1587924735_d3f.jpg'
        },
        {
            id:'sadfsadfih654', 
            title: 'Titulo 33', 
            description: 'Descripcion 3', 
            precio: '$ 352', 
            pictureURL: 'https://s.fenicio.app/f2/isl/productos/3t_2000-2000_1587924735_9d0.jpg'
        }
    ]     
    
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
    
            setTimeout(()=>{
                resuelto(items)
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
    console.log(itemList)



const {greeting, contenido} = props;
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>
                            {greeting}
                        </h4>
                        <p>
                            {contenido}
                        </p>

                        <ItemList itemList={itemList} /> 

                    </div>
                </div>
            </div>
        </div>
    )
}




