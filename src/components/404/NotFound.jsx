import React, { useEffect, useState }   from 'react'
import { Container, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import './NotFound.css'

function NotFound() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return ( 
        <Col>
            <Container>  
                <center>
                    {loading && <Loading/>}
                    {!loading && (
                    <div className="card">  
                        <img className="not" src="https://cdn3.iconfinder.com/data/icons/network-and-communications-10/32/network_Error_lost_no_page_not_found-1024.png" alt="Página no encontrada"/>
                        <Link className="boton" to="/">
                            Vovler el sitio
                        </Link>
                    </div>
                    )}
                </center> 
            </Container>
        </Col>   
    )
}

export default NotFound
