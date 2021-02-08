import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


function Membersignup (){

return (

<div>
<div className="w3-sand w3-grayscale w3-large">
<div className="w3-container" id="about">

<div className="w3-content" style={{maxWidth:700}}>
<div className="w3-center w3-padding-large w3-hide-small">
<span className="w3-tag"> </span>




<h5><i class="fas fa-user-shield"></i></h5>
<section>
    <h2>Create an Account:</h2>


    <form action='submission.html' method="GET">
        <label for="username">Username:</label>
        <br></br>
        <input id="username" name="username" type="text" minlength="3"
        maxlength="15" required></input> 
        <br></br>


        <label for="pw">Password:</label>
        <br></br>
        <input id="pw" name="pw" type="password" minlength="8" maxlength="15" required></input>
        <br></br><br></br>

        <input type="submit" value="Sign Up"></input>
    </form>
    

</section>



</div></div>
</div></div>
</div>



)


}

export default Membersignup