import React from 'react'

import Peaceandlove from './peaceandlove.jpg'
import './index.css'

function Memberslogin(){
    return (

        <div>
        <div className="w3-sand w3-grayscale w3-large">
        <div className="w3-container" id="about">
        
        <div className="w3-content" style={{maxWidth:700}}>
        <div className="w3-center w3-padding-large w3-hide-small">
        <span className="w3-tag"> </span>
        
        
        
        
        <h5><i class="fas fa-user-shield"></i></h5>
        <section>
            <h2>Sign In:</h2>
        
        
            <form action='member.html' method="POST">
                <label for="username">Username:</label>
                <br></br>
                <input id="username" name="username" type="text" minlength="3"
                maxlength="15" required></input> 
                <br></br>
        
        
                <label for="pw">Password:</label>
                <br></br>
                <input id="pw" name="pw" type="password" minlength="8" maxlength="15" required></input>
                <br></br><br></br>
        
                <input type="submit" value="Sign In"></input>
            </form>
            
        
        </section>
        
        
        
        </div></div>
        </div></div>
        </div>
        
    
    )

}

export default Memberslogin