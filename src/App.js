import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import Members from './Memberslogin'
import Commit from './Commit'
import Mission from './Mission'
import Products from './Products'
import Membersignup from './Membersignup'
import Blacklivesmatter from './Blacklivesmatter'
import Stonewallriots from './Stonewallriots'
import Freestyle from './Freestyle'
import {BrowserRouter,Route} from 'react-router-dom'





const App = () => {
return (
<BrowserRouter>
    <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/gallery" component={ Gallery } />
        <Route exact path="/members" component={ Members } />
        <Route exact path="/commit" component={ Commit } />
        <Route exact path="/mission" component={ Mission } />
        <Route exact path="/products" component={ Products } />
        <Route exact path="/membersignup" component={ Membersignup } />
        <Route exact path="/blacklivesmatter" component={ Blacklivesmatter } />
        <Route exact path="/stonewallriots" component={ Stonewallriots } />
        <Route exact path="/freestyle" component={ Freestyle } />
    </div>
</BrowserRouter>

    )

}

export default App