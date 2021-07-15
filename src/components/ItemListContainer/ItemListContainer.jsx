import React from 'react'
import Item from '../ItemList/ItemList';

export default function ItemListContainer(props) {

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

                        <Item/>

                    </div>
                </div>
            </div>
        </div>
    )
}




