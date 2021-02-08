import React from 'react'

function Navbar(){
    return (
        <div>
            
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">  
    
                 <div className="w3-col s3">
                  <a href="Mission.js" className="w3-button w3-block w3-black"><i class="fas fa-globe"></i><p> Mission</p></a>
                </div>
    
                 <div className="w3-col s3">
                   <a href="Gallery.js" className="w3-button w3-block w3-black"><i class="fas fa-puzzle-piece"></i><p> Art Pieces</p></a>
                  </div>
    
                <div className="w3-col s3">
                   <a href="Members.js" className="w3-button w3-block w3-black"><i className="fas fa-fist-raised"></i><p>Members</p></a>
                 </div>

                 <div className="w3-col s3">
                   <a href="Cart.js" className="w3-button w3-block w3-black"><i className="fas fa-shopping-cart"></i><p>Add2Swag</p></a>
                 </div>
    
    
                </div>
            </div>

        </div>
 

    )
}


export default Navbar