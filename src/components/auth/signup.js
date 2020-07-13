import React from 'react';
import "../auth/signup.css";
import { MDBIcon, MDBInput } from 'mdbreact'
import { Link } from 'react-router-dom';
import HiddenNav from '../navigation/hiddennav';
import SignupForm from '../forms/signup-form';
import MainNavigation from '../navigation/main-nav';


 class Signup extends React.Component {
     constructor(){
         super()
         this.state = {
            showMenu:false,
        }
     }
   
    toggle = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }
    render() {
        let toggleName
        if(!this.state.showMenu){
            toggleName = "Menu"
        }else{
            toggleName = "Hide"
        }

        return (
                
            <div className="signup h-100">
                 {
                    this.state.showMenu && (
                        <MainNavigation />
                )}
            
              <div className="row h-100">
                <div className="col-5 left-pane signup-canvas ">
                        <h2 className="font-weight-bold">Community service is calling, No time for stalling</h2>
                </div>
            <div className="col-7 signup-canvas">
                <div className="text-right menu"> 
                  <Link className=""><h4 onClick={this.toggle}><MDBIcon icon="bars" /> {toggleName}</h4></Link> 
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