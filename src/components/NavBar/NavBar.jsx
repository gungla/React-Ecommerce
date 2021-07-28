import logo from '../../assets/images/logo/logo.svg';
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'

function NavBar() {
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
                        <NavLink exact activeClassName="active" className="normal" to="/">Inicio</NavLink>
                        <NavLink exact activeClassName="active" className="normal" to="/category/hombre">Hombre</NavLink>
                        <NavLink exact activeClassName="active" className="normal" to="/category/mujer">Mujer</NavLink>
                        <NavLink exact className="normal" to="/category/ninos">Niños</NavLink>
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
