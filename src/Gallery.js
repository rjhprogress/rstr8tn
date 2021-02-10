import React from 'react'
import Fist from './fist.jpg'
import {Link} from 'react-router-dom'
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import './index.css'



const Gallery = () => {
    return (

        <div> 
            <Navbar></Navbar>


                <span id="container"></span>

              <section>
                    <img src={Fist} width="100%" className="center" alt="Multi-color People Power Fists" /> 
                </section>
            <div className="hero-image">
            
            
                <div class="hero-text">
                
                    <div className="w3-dropdown-hover ">
                    <button className="w3-button" title="Collections">
                        <p>Select Collection</p> <i className="fa fa-caret-down"></i></button>
                    
                    <div className="w3-dropdown-content w3-bar-block">
                    <Link to="/blacklivesmatter" className="w3-bar-item w3-button" alt="Black Lives Matter Collection"><p>Black Lives Matter</p></Link>
                    <Link to="/stonewallriots" className="w3-bar-item w3-button" alt="1969 Stonewall Riots Collection"><p>1969 Stonewall Riots</p></Link>
                    <Link to="/freestyle" className="w3-bar-item w3-button" alt="Freestyle Art Collection"><p>Freestyle Art</p></Link>
                    </div>
                    </div>
                </div>

            </div>


            <Footer></Footer>

        

        </div>
    )
}

export default Gallery 