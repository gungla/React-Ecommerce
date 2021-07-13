import React from 'react'

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
                    </div>
                </div>
            </div>
        </div>
    )
}
