import logo from '../../assets/images/logo/logo.svg';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';

const inicio = () => {
    alert('Sección Inicio')
}
const link1 = () => {
    alert('Sección Link 1')
}
const link2 = () => {
    alert('Sección Link 2')
}
const link3 = () => {
    alert('Sección Link 3')
}
const link4 = () => {
    alert('Sección Link 4')
}
const link5 = () => {
    alert('Sección Link 5')
}
const link6 = () => {
    alert('Sección Link 6')
}
const usuario = () => {
    alert('Sección Usuario')
}
const carrito = () => {
    alert('Sección Carrito')
}

function NavBar() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Navbar.Brand onClick={inicio} href="#inicio"><img className="App-logo" src={logo} width="50" height="50" alt="Brand"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto tipo">
                        <Nav.Link onClick={inicio} href="#inicio">Inicio</Nav.Link>
                        <Nav.Link onClick={link1} href="#link1">Link 1</Nav.Link>
                        <Nav.Link onClick={link2} href="#link2">Link 2</Nav.Link>
                        <Nav.Link onClick={link3} href="#link3">Link 3</Nav.Link>
                        <Nav.Link onClick={link4} href="#link4">Link 4</Nav.Link>
                        <Nav.Link onClick={link5} href="#link5">Link 5</Nav.Link>
                        <Nav.Link onClick={link6} href="#link6">Link 6</Nav.Link>
                    </Nav>
                    <Nav className="nav navbar-nav navbar-right tipo">
                        <Nav.Link onClick={usuario} href="#home">Usuario</Nav.Link>
                        <Nav.Link onClick={carrito} href="#link"><CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar
