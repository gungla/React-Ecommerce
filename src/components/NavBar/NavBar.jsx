import logo from '../../assets/images/logo/logo.svg';
import React, {useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
import {getFireStore} from  '../../data/firebaseService'

function NavBar() {

    const [links, setLinks] = useState([])  

    useEffect(() => {
        const db = getFireStore()
        const itemCollection = db.collection('categorias')
        itemCollection
            .get().then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    console.log('no results')
                } else {
                    setLinks( querySnapshot.docs.map( doc => ( {...doc.data(), id: doc.id} )))
                }
            })
            .catch((error) => {
                console.log('Error searching categories', error)
            })
    }, [])

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand>
                    <NavLink exact to="/">
                        <img className="App-logo" src={logo} width="50" height="50" alt="Brand"/>
                    </NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto tipo">
                        {links.map((link, i) => {
                            return (<li key={i}><NavLink exact activeClassName="active" className="normal" to={link.url}>{link.nombre}</NavLink></li>)
                        })}
                    </Nav>
                    <Nav className="nav navbar-nav navbar-right tipo">
                        <NavLink exact className="normal" to="/cart">
                            <CartWidget/>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
