import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {


  return (




    <div>

      <div className="w3-top">
        <div className="w3-bar w3-card w3-black">

          <div className="w3-col s3">
            <Link to="/mission" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-globe"></i><p> Mission</p></Link>
          </div>


          <div className="w3-col s3">
            <a href="/releases" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i class="fas fa-puzzle-piece"></i><p>New Pieces</p></a>
          </div>


          <div className="w3-col s3">
            <a href="/join" className="w3-button w3-block w3-black w3-padding-small w3-hide-small"><i className="fas fa-users"></i><p>Members</p></a>
          </div>

          <div class="w3-col s3">
            <a data-scroll href="mailto:rjh@theprogresslab.com" class="w3-button w3-text-white w3-padding-small">
              <i class="fas fa-envelope-open-text"></i><p> Email</p></a>
          </div>

        </div>
      </div>



    </div>


  )
}


export default Navbar