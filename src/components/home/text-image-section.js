import React from 'react';

 class TextImageSection extends React.Component {
     constructor(){
         super()
         this.state = {
             isLoggedIn: "True"
         }
     }
    render() {
        let wordDisplay 
        if (this.isLoggedIn===true){
            wordDisplay = "in"
        }else{
            wordDisplay="out"
        }
        return (
            
                 <section className="content-section-2">
                    <p>Section content 2 will go here</p>
                    <h3>You are logged {wordDisplay}</h3>
                </section>

        )
    }
}

export default TextImageSection;