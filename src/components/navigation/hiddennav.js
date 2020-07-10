import React, { Component } from 'react';
import {  MDBNavbar, MDBNavbarNav, MDBNavLink } from 'mdbreact';

export default class HiddenNav extends Component {
    state = {
        on:false,
    }
    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }
    render() {
        return (
                <MDBNavbar className="" dark expand="md">
                    <MDBNavbarNav left>
                        <MDBNavLink to="!#">Hello</MDBNavLink>
                        <MDBNavLink to="!#">World</MDBNavLink>
                    </MDBNavbarNav>
                </MDBNavbar>                
          
        )
    }
}
