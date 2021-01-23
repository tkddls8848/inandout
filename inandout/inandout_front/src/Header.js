import React, { Component } from 'react'
import { Navbar, Form, InputGroup, FormControl, Button } from 'react-bootstrap'

class Header extends Component{
    render(){
        return(
        <Navbar>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
            Signed in as: <a href="https://www.github.com/tkddls8848">PSI</a>
            </Navbar.Text>
        </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Header