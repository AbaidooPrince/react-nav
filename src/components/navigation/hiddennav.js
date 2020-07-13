import React, { Component } from 'react';
import {  MDBNavbar, MDBNavbarNav, MDBNavLink, MDBNavItem } from 'mdbreact';

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
                        <MDBNavItem>
                        <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="!#">World</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBNavbar>                
          
        )
    }
}
