import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './index.css'


const Newarrivals = () => {

  return (
    <div>

      <Navbar></Navbar>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>
      <br></br><br></br><br></br>

      <div className="w3-content w3-display-container">
        <h2>RELEASED 02-2021</h2>
      </div>
      <br></br><br></br><br></br>

      <div className="w3-content w3-display-container">


        {/*This is the First New Arrival*/}
        <div className="w3-display-container mySlides">
          <img src="https://icecube-us-sw-841-1.icedrive.io/thumbnail?p=ZEtCj09GiuWMPv4kT9YH6FwvAAmoE.A7Xx2aD9Pr9zrvl0qPC6uXG.YgG6TklZb_7zrtPOlsTkg..gCWaq.4X2JjIueBzPUfljoMuTeVKtLgvTAHvNnEiQj9Tev8ouoq&w=1024&h=1024&m=cropped" style={{ width: 100 }} />
          <div className="w3-display-bottomright w3-large w3-container w3-padding-14 w3-black">
            <p>RS T R8 TN "Long Live Monroe" 0221 Red : Front </p>
          </div>
          <section>
            <br></br>
            <p className="w3-center"><i className="fas fa-fill-drip"></i>Add To Drip <i className="fas fa-shopping-cart"></i></p>
          </section>
        </div>

        {/*This is the Second New Arrival*/}
        <div className="w3-display-container mySlides">
          <img src="https://icecube-us-842.icedrive.io/download?p=F2OCDfbqsmzCEJvAMqCFn9H.2LW31CEIxGCuItIBXa89jAxXy3fMNrv2ut2RxA8UHnZiiAGiA.9HKQtZS7Pu2zpK_CcOhtQScYQ7JzqqyaZsgA21dTzIaZOC_D9IgbuLC5fDF3daefBI.W5Cmy6WjSZX3HZoXDF44_5bvxNPcZiMfBmgDVMi0xiXrd40..Euo9SW8.C2PxZfSl.iY7w11Q--" style={{ width: 100 }} />
          <div className="w3-display-bottomright w3-large w3-container w3-padding-14 w3-black">
            <p> RS T R8 TN "Long Live Monroe 0221" Red : Back </p>
          </div>
          <section>
            <br></br>
            <p className="w3-center">Add To Swag <i className="fas fa-shopping-cart"></i></p>
          </section>

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

export default Newarrivals