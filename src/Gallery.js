import React from 'react'

function Gallery(){
    return(

        <div> 
            <div className="w3-container">
                <div className="w3-dropdown-hover ">

                 <button className="w3-button" title="Collections"><p>Select Apparel Art Collection</p> <i className="fa fa-caret-down"></i></button>
                    <div className="w3-dropdown-content w3-bar-block">
                    <a href="#" className="w3-bar-item w3-button"><p>Black Lives Matter</p></a>
                    <a href="#" className="w3-bar-item w3-button"><p>1969 Stonewall Riots</p></a>
                    <a href="#" className="w3-bar-item w3-button"><p>Radical Freestyle</p></a>
                    </div> 
                </div>
        


            </div>

        </div>
    )
}

export default Gallery 