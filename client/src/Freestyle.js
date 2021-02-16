import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './index.css'


const Freestyle = () => {

  return (
    <div>

      <Navbar></Navbar>


      <div className="w3-content w3-display-container">
        <h2><i className="fas fa-paint-roller"></i> FREESTYLE</h2>
      </div>

      <br></br><br></br><br></br>
      <br></br><br></br><br></br>

      <div className="w3-center">
        <p>New Arrival : Freestyle Collection</p><br></br>
      </div>


      <div className="w3-center">
        <img src="https://icecube-us-sw-841-1.icedrive.io/thumbnail?p=ZEtCj09GiuWMPv4kT9YH6FwvAAmoE.A7Xx2aD9Pr9zrvl0qPC6uXG.YgG6TklZb_7zrtPOlsTkg..gCWaq.4X2JjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped" alt="Long Live Monroe 0221 Red Sweatshirt" width="460" height="345" />

        <div className="w3-center">
          <p>Long Live Monroe <em> Released:</em> 0221 Red</p><hr></hr>
          <div className="w3-tag">
            <a href="">Save to Favz</a>
          </div>
          <p><small><em>Save feature is members only.</em></small><br></br>Sign Up or Login</p>
        </div>
      </div>

      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>


      <Footer></Footer>
    </div>

  )

}

export default Freestyle