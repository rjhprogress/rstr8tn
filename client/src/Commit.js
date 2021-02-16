import React from 'react'

function Commit() {

    return(
        <div>


            <div className="w3-sand w3-grayscale w3-large">
            <div className="w3-container" id="about">

            <div className="w3-content" style={{maxWidth:700}}>
            <div className="w3-center w3-padding-large w3-hide-small">
            <span className="w3-tag"> </span>
            </div>

            <h5><i className="fas fa-fist-raised"></i> Commit to Action</h5>

            <section>   

            <p>Note: This "Commit to Action" form will automagically sign you up for a 
                chance to win apparel from RS T R8 TN&#8482;!</p>

          <form>  
            <p>If you win, which shirt size would you like?</p>
            
                <label for="size"><p>Size: </p></label>
                <select id="size" name="size">
                <option value="small">Sm</option>
                 <option value="medium">Med</option>
                 <option value="large">L</option>
                  <option value="xtralarge">XL</option>
                  <option value="xxtralarge">2XL</option>
                 <option value="xxxtralarge">3XL</option>
            </select>

            
            <br></br>
            <p>Select a Collection: </p>
            <label for="blkLivesMatter">Black Lives Matter </label>
            <input id="blkLivesMatter" name="collection" type="checkbox" value="blkLivesMatter"></input>
            
            <br></br>
            <label for="stonewallRiots">1969 Stonewall Riots </label>
            <input id="stonewallRiots" name="collection" type="checkbox" value="stonewallRiots"></input>

            <br></br>
            <label for="freestyle">Freestyle  </label>
            <input id="freestyle" name="collection" type="checkbox" value="freestyle"></input>

            <br></br>
            <p>Good Luck!</p>


            <h3>This Is Where You Make Your Committment</h3>
            <p>I commit to...</p>
            <p>being the change I wish to see in the world.</p>
            <br></br>

            

            <p>Sign by typing the name you would like to appear on your "Commitment Certificate"</p>

            <label for="certificate"><p>Name: </p></label>
            <input type="text" id="certificate" name="certificateName" value="Type Name Here" required></input>

            <label for="email"><p>Email: </p></label>
            <input type="text" id="email" name="email" value="Type Email Here"  required></input>
            
            <br></br>
            <input type="submit" value="Submit"></input> 
            
            


                
                    

               
            </form>

            </section>
            <br></br>
            </div>

            </div>
            </div>

        </div>    
    )
}

export default Commit