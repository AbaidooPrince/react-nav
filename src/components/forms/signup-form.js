import React, { Component } from 'react';
import { MDBCol, MDBInputGroup } from 'mdbreact';

export default class SignupForm extends Component {
    constructor() {
        super();
        this.state = {
          name: "",
          email: ""
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
            email: this.state.email
          })
        })
        .then(res => res.json())
        .catch(err => console.log(err));
      }
    
    render() {
        return (
          <div className="">
            <MDBCol md="6">
              <h3 className="font-weight-bold mt-4">Sign Up to Community</h3>
              <MDBInputGroup type="email" label="Email">

              </MDBInputGroup>
           
             </MDBCol>

          </div>
           


        )
    }
}
