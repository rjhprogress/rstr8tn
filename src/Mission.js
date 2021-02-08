import React from 'react'
import Peaceandlove from './peaceandlove.jpg'

function Mission(){

    return (
        <div>
            


            <div className="w3-sand w3-grayscale w3-large">

                <div className="w3-container" id="about">


                     <div className="w3-content" style={{maxWidth:700}}>
                         <div className="w3-center w3-padding-large w3-hide-small">
                          <span className="w3-tag"> </span>
                     </div>


                        <h5><i className="fas fa-globe"></i> Mission</h5>


                        <div>
                            <p>RS T R8 TN Clothing (pronouned Restoration Clothing) is an urban street wear brand showcasing the art of 
                                Rahsh Horne (born Rasheedah Horne). The pieces are designed to promote, and inspire mental health, and 
                                emotional healing from trauma through art. Images on apparel are either taken by camera, hand painted, 
                                or are graphical revampings.
                            </p>
                            <p>RS T R8 TN is a call to action for spiritual growth, personal development, and self care; to strengthen 
                                the individual so that restoring community, unity, and addressing systematic issues of injustice in urban 
                                communities can be handled successfully.</p>
                            </div>


                            <div className="w3-panel w3-leftbar w3-light-grey">
                            <p>
                                <i>"There can be no peace, without inner peace,<br></br>
                                no love without self love,<br></br>
                                no true revolution without personal libration,<br></br>
                                and no freedom, without balance, and mental health.<br></br>
                                We must restore the truth within ... that we are enough.<br></br>
                                As said by the writer June Jordan, 'We are the ones we have been waiting for."<br></br>
                                            
                                -Rahsh aka Rocky</i></p>
                            </div><br></br>



                            <div>
                                <p>Visit the artist vlog: Restore Your Truth; The Voice of RS T R8 TN
                                    at:  <a href="https://restoreyourtruth.com">restoreyourtruth.com</a>
                                </p>
                            </div>
  

                            

                                    

                                        <div>
                                          <img src={Peaceandlove} width="100%" className="center" alt="Graffiti of a peace, and hearts with tears." />
                                          <p>Street Photography Philadelphia, PA</p>
                                         <br></br><br></br>
                                        </div>


                </div>



            </div>


        </div>
     </div>   
    )

}

export default Mission