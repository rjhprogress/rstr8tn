import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


const Home = () => {
    return (


<div> 

<container>
   <img src='https://drive.google.com/uc?id=18LrTF1s5Mbcojc3rkqUbpUdh2bfoaaqO' width="100%" 
className="center" alt="Protesters for Peace Rallying for Change" />
</container>



<container>
<div className="w3-bottom">


    <div className="w3-row w3-padding w3-white">

        <div className="w3-col s3">
        <Link to="/gallery" className="w3-bar-item w3-button w3-hover-red"><p>Apparel Art Gallery</p></Link>
        </div>

        <div className="w3-col s3">
        <a href="https://www.youtube.com/channel/UCor7TzThBN2HmfzuBBDqSFQ/about" className="w3-bar-item w3-button w3-hover-orange"><p>Voice of RS T R8 TN Project</p></a>
        </div>
        

        <div className="w3-col s3">
        <Link to="/members" className="w3-bar-item w3-button w3-hover-yellow"><p>Member Login</p></Link>
        </div>
        
        <div className="w3-col s3">
        <Link to="/commit" className="w3-bar-item w3-button w3-hover-blue"><p>Commit to Action</p></Link>
        </div>

    </div>
    
</div>
</container>

</div>

    )

    }

    export default Home