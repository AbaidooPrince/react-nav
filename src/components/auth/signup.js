import React from 'react';
import "../auth/signup.css";
import { MDBIcon } from 'mdbreact'
import { Link } from 'react-router-dom';
import HiddenNav from '../navigation/hiddennav';
import SignupForm from '../forms/signup-forms';


 class Signup extends React.Component {
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
                
            <div className="signup h-100">
                 {
                    this.state.on && (
                        <HiddenNav />
                )}
            
              <div className="row ">
                <div className="col-5 left-pane signup-canvas">

                </div>
            <div className="col-7 signup-canvas">
                <div className="text-right"> 
                  <Link ><h2 ><MDBIcon icon="bars" onClick={this.toggle}/></h2></Link> 
                </div>
                <div className="signup-form">
                    <SignupForm />
                
                </div>        
      
            </div>
            </div>

            </div>
    
        
        )
    }
}
export default Signup;