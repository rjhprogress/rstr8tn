import React from 'react'

function Categories(){

    return (
        <div>

        <div className="w3-container">
                <div className="w3-dropdown-hover ">
                 <button className="w3-button" title="Collections"><p>Select Art Pieces/Collection</p> <i className="fa fa-caret-down"></i></button>
                    <div className="w3-dropdown-content w3-bar-block">
                    <a href="#" className="w3-bar-item w3-button"><p>Black Lives Matter Collection</p></a>
                    <a href="#" className="w3-bar-item w3-button"><p>1969 Stonewall Riots Collection</p></a>
                    <a href="#" className="w3-bar-item w3-button"><p>Freestyle Collection</p></a>
                    </div> 
                </div>
            </div>

        </div>    
    
        
    )

}

export default Categories