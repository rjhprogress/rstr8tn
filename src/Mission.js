import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Peaceandlove from './peaceandlove.jpg'
import './index.css'

const Mission = () => {

    return (
        <div>
            <Navbar></Navbar>
            <br></br><br></br><br></br>

            <div className="w3-sand w3-grayscale w3-large">
                <div className="w3-container" id="about">




                    <div className="w3-content" style={{ maxWidth: 700 }}>
                        <div className="w3-center w3-padding-large w3-hide-small"></div>
                        <span className="w3-tag"> </span>
                    </div>



                    <h5><i className="fas fa-globe"></i><strong> Mission</strong></h5>



                    <div>
                        <p>RS T R8 TN &#8482; (pronouned Restoration) is an empowering streetwear brand inspiring a multifaceted call-to-action for personal,
                        and social transformation. Collections showcase the progressive designs of Philadelphian artist Rahsh Horne for the purpose
                        of healing trauma through art, and to address systematic issues of injustice.
                        Images on apparel are either taken by camera, hand painted, or are graphical revampings.
                                     </p>
                        <p>Words from the artist on Mission:</p>
                    </div>


                    <div className="w3-panel w3-leftbar w3-light-grey">
                        <p>
                            <i>"There can be no peace, without inner peace,<br></br>
                                         no love without self love,<br></br>
                                         no true revolution without personal liberation,<br></br>
                                         and no freedom, without balance, and mental health.<br></br>
                                         We must restore the truth within ... that we are enough.<br></br>
                                         As the writer June Jordan has said, <br></br>
                                         'We are the ones we have been waiting for."<br></br>

                                         -Rahsh aka Rocky</i></p>
                    </div>



                    <div>
                        <p>
                            <a href="https://restoreyourtruth.com"><strong>Visit The RESTORE YOUR TRUTH Project : Expressive Vlogs by Rahsh
                                    at https://RestoreYourTruth.com</strong></a>
                        </p>
                    </div>






                    <div>
                        <img src={Peaceandlove} width="100%" className="center" alt="Graffiti of a peace, and hearts with tears." />
                        <p>Street Photography Philadelphia, PA</p>
                        <br></br><br></br>
                    </div>





                </div>
            </div>


            <Footer></Footer>

        </div>
    )

}

export default Mission