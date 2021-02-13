import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './index.css'


const Blacklivesmatter = () => {

  return (
    <div>

      <Navbar></Navbar>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>


      <div className="w3-content w3-display-container">
        <h2><i class="fas fa-fist-raised"></i> BLACK LIVES MATTER</h2>
      </div>
      <br></br><br></br><br></br>

      <div className="w3-content w3-display-container">


        <div className="w3-display-container mySlides">
          <img src="https://icecube-us-sw-841-1.icedrive.io/thumbnail?p=9DNsEynylvV6Eeov_F1Jff9z8q4teIZGDBCObjJq76Sm94IUweRVGlHwtPm1rfuQY3whvGiuHZcKxBpuJ6CYZmJjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped" style={{ width: 100 }} />
          <div className="w3-display-bottomright w3-large w3-container w3-padding-12 w3-black">
            <p>RS T R8 TN &#8482; <em>Panthers Live Forever 0221 Black</em>  [Front View] </p>
          </div>

        </div>

        <div className="w3-display-container mySlides">
          <img src="https://icecube-us-842.icedrive.io/download?p=F2OCDfbqsmzCEJvAMqCFn9H.2LW31CEIxGCuItIBXa8KNRt1WwarT7fbN_NL9td5HnZiiAGiA.9HKQtZS7Pu2zpK_CcOhtQScYQ7JzqqyaZfN1r8r90HVh1cC9P3ZHQse64wyiXww.hOPGMAVWzGGYdY5nxeNEXItJWSVUFbBMul6TmeCm.g2u9sAxwIRxhFo9SW8.C2PxZfSl.iY7w11Q--" style={{ width: 100 }} />
          <div className="w3-display-bottomright w3-large w3-container w3-padding-12 w3-black">
            <p>RS T R8 TN &#8482; <em>Panthers Live Forever 0221 Black</em>  [Back View] </p>
          </div>

        </div>


        <button class="w3-button w3-display-left w3-black" onclick="plusDivs(-1)">&#10094;</button>
        <button class="w3-button w3-display-right w3-black" onclick="plusDivs(1)">&#10095;</button>


        {/*
<script>
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

</script>


*/}

      </div>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>



      <Footer></Footer>
    </div>

  )

}

export default Blacklivesmatter