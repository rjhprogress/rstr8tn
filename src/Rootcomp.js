import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Gallery from './Gallery'
import Members from './Members'
import Cart from './Cart'
import Footer from './Footer'

function RootComp(){

return (
    <div>
        <Navbar />
        <Header />
        <Gallery />
        <Cart />
        <About />
        <Members />
        <Footer />
    </div>

    )
}

export default RootComp