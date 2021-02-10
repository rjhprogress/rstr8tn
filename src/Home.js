import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'


const Home = () => {
    return (


<div> 

<container>
   <img src='https://icecube-us-842.icedrive.io/thumbnail?p=z1L6CDrFj03lJDi5lijTpYzRQYDtWoV7VgzsSgWdyPa3B89b7HXayMwMnavUOvZ.RHAQBpPLchtGx2ZfviNOAmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped' width="100%" 
className="center" alt="Protesters for Peace Rallying for Change" />
</container>



<container>
<div className="w3-bottom">


    <div className="w3-bar w3-card w3-white">

        <div className="w3-col s3">
        <Link to="/gallery" className="w3-bar-item w3-button w3-padding-large w3-hover-red"><p>Apparel Art Gallery</p></Link>
        </div>

        <div className="w3-col s3">
        <a href="https://www.youtube.com/channel/UCor7TzThBN2HmfzuBBDqSFQ/about" className="w3-bar-item w3-button 
        w3-padding-large w3-hover-orange"><p>Restore Your Truth Project</p></a>
        </div>
        

        <div className="w3-col s3">
        <Link to="/members" className="w3-bar-item w3-button w3-padding-large w3-hover-yellow"><p>Member Login</p></Link>
        </div>
        
        <div className="w3-col s3">
        <Link to="/commit" className="w3-bar-item w3-button w3-padding-large w3-hover-blue"><p>Commit to Change</p></Link>
        </div>

    </div>
    
</div>
</container>


        



</div>

    )

    }

    export default Home