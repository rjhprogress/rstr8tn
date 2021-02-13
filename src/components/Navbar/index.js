import React from 'react'




const Navbar = () => {


  return (




    <div>

      <div className="w3-top">
        <div className="w3-bar w3-card w3-black">

          <div className="w3-col s3">
            <a href="./Mission" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-globe"></i><p> Mission</p></a>
          </div>


          <div className="w3-col s3">
            <a href="./Gallery" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i class="fas fa-palette"></i><p> Art Gallery</p></a>
          </div>


          <div className="w3-col s3">
            <a href="https://rstr8tn.com/join.html" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-fist-raised"></i><p>Members</p></a>
          </div>

          <div class="w3-col s3">
            <a data-scroll href="mailto:rjh@theprogresslab.com" class="w3-button w3-text-white w3-padding-small">
              <i class="fas fa-envelope-open-text"></i><p> Email</p></a>
          </div>
          {/*

                 <div className="w3-col s3">
                   <a href="Cart.js" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-shopping-cart"></i><p>Add2Swag</p></a>
                </div>   */}


        </div>
      </div>



    </div>


  )
}


export default Navbar