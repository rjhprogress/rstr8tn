import React from 'react'

const Navbar= () => {
    return (
        <div>
            
            <div className="w3-top">
                <div className="w3-bar w3-card w3-black">  

                <a className="w3-bar-item w3-button w3-padding-small w3-hide-medium w3-hide-large w3-right" 
                href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i className="fa fa-bars"></i></a>

    
                 <div className="w3-col s3">
                  <a href="./Mission" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-globe"></i><p> Mission</p></a>
                </div>
    
                 <div className="w3-col s3">
                   <a href="Gallery.js" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-puzzle-piece"></i><p> Art Pieces</p></a>
                  </div>
    

                <div className="w3-col s3">
                <a href="Memberslogin.js" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-fist-raised"></i><p>Members</p></a>
                </div>

                 <div className="w3-col s3">
                   <a href="Cart.js" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-shopping-cart"></i><p>Add2Swag</p></a>
                 </div>
    
    
                </div>
            </div>

          <container>
          <div id="navDemo" className="w3-bar-block w3-black w3-hide w3-hide-large w3-top" style={{marginTop:25}}>
           <a href="Mission.js" className="w3-bar-item w3-button w3-padding-small" onclick="myFunction()"><i className="fas fa-globe"></i><p>Mission</p></a>
            <a href="Gallery.js" className="w3-bar-item w3-button w3-padding-small" onclick="myFunction()"><i className="fas fa-puzzle-piece"></i><p>Gallery</p></a>
            <a href="Members.js" className="w3-bar-item w3-button w3-padding-small" onclick="myFunction()"><i className="fas fa-fist-raised"></i><p>Members</p></a>
            <a href="Cart.js" className="w3-bar-item w3-button w3-padding-small" onclick="myFunction()"><i className="fas fa-shopping-cart"></i><p>Cart</p></a>
          </div>
          </container>

        </div>
 

    )
}


export default Navbar