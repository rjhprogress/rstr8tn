import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Gallery from './Gallery'
import Categories from './Categories'
import Members from './Members'
import Cart from './Cart'
import Footer from './Footer'

function RootComp(){

return (
    <div>
        <Navbar />
        <Header />
        <Gallery />
        <Categories />
        <Cart />
        <About />
        <Members />
        <Footer />
    </div>

    )
}

export default RootComp