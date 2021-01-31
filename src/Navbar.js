import React from 'react'

function Navbar(){
    return (
        <div>
            
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">  
    
                 <div className="w3-col s3">
                  <a href="Mission.js" className="w3-button w3-block w3-black"><i class="fas fa-globe"></i> Mission</a>
                </div>
    
                 <div className="w3-col s3">
                   <a href="Gallery.js" className="w3-button w3-block w3-black"><i class="fas fa-puzzle-piece"></i> Art Pieces</a>
                  </div>
    
                <div className="w3-col s3">
                   <a href="Members.js" className="w3-button w3-block w3-black"><i className="fas fa-fist-raised"></i> Members</a>
                 </div>

                 <div className="w3-col s3">
                   <a href="Cart.js" className="w3-button w3-block w3-black"><i className="fas fa-user-astronaut"></i> Add2Swag</a>
                 </div>
    
    
                </div>
            </div>

        </div>
 

    )
}


export default Navbar