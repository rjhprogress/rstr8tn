import React from 'react'
import Navbar from "../Navbar"
import Footer from "../Footer"
import '../../index.css'



const Join = () => {

    return (
        <div>
            <Navbar></Navbar>
            <br></br><br></br>

            <div className="w3-container" id="entryToYourJourney">
                <div className="w3-content" style={{ maxWidth: 700 }}>

                    <h5 className="w3-center w3-padding-48">Welcome To <em>Your</em> RS T R8 TN&#8482;</h5>

                    <div className="w3-row w3-center w3-card w3-padding">
                        <a href="javascript:void(0)" onclick="openJourney(event, 'signup');" id="myLink">
                            <div class="w3-col s6 tablink">Sign Up</div></a>

                        <a href="javascript:void(0)" onclick="openJourney(event, 'login');" >
                            <div className="w3-col s6 tablink">Log In</div></a>
                    </div>

                    <div id="signup" className="w3-container w3-center entryToYourJourney w3-padding-48 w3-card">
                        <h5>Ready for Change? Start living the brand.</h5>
                        <p className="w3-text-grey">Username and password must be atleast 3 characters, and no more than 15.</p><br></br>

                        <form action='submission.html' method="GET">
                            <label for="username">Username:</label><br></br>
                            <input id="username" name="username" type="text" minlength="3" maxlength="15" required /><br></br>

                            <label for="pw">Password:</label><br></br>
                            <input id="pw" name="pw" type="password" minlength="8" maxlength="15" required></input><br></br>

                            <input type="submit" value="Sign Up"></input>
                        </form><br></br>
                        <p><strong><em>Revamp Restore!</em></strong></p>
                    </div>


                    <div id="login" className="w3-container w3-center entryToYourJourney w3-padding-48 w3-card">

                        <form action='/submit' method="POST">
                            <label for="username">Username:</label><br></br>
                            <input id="username" name="username" type="text" minlength="3" maxlength="15" required /><br></br>

                            <label for="pw">Password:</label><br></br>
                            <input id="pw" name="pw" type="password" minlength="8" maxlength="15" required></input><br></br>

                            <input type="submit" value="Login"></input>
                        </form>
                        <p><strong><em>Revamp Restore!</em></strong></p>
                    </div>




                </div></div>







            <Footer></Footer>

        </div>
    )
}

export default Join