import React, { Component } from 'react';
import { MDBCol } from 'mdbreact';

export default class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: "",
          message: ""
        };
      }
    
      handleInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      sendForm = () => {
        fetch('https://some/url', {
          method: 'POST',
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
          })
        })
        .then(res => res.json())
        .catch(err => console.log(err));
      }
    
    render() {
        return (
            <MDBCol md="4">

           
          </MDBCol>


        )
    }
}
