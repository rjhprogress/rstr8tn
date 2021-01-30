import React from 'react'

function Navbar(){
    return (
        <div>
            
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">
  

                 <div className="w3-col s3">
                  <a href="#" className="w3-button w3-block w3-black"><i className="fas fa-home"></i></a>
                 </div>
  
    
                 <div className="w3-col s3">
                  <a href="#mission" className="w3-button w3-block w3-black"><i className="fas fa-bullseye"></i></a>
                </div>
    
                 <div className="w3-col s3">
                   <a href="gallery.html" className="w3-button w3-block w3-black"><i className="fas fa-puzzle-piece"></i></a>
                  </div>
    
                <div className="w3-col s3">
                   <a href="gallery.html" className="w3-button w3-block w3-black"><i className="fas fa-fist-raised"></i></a>
                 </div>
    
    
                 <div> 
                    <a data-scroll href="mailto:rjh@theprogresslab.com" className="w3-bar-item w3-button w3-text-grey w3-hover-black"><i className="fas fa-envelope-open-text"></i></a>
                 </div>
    
    
                </div>
            </div>

        </div>
 

    )
}


export default Navbar