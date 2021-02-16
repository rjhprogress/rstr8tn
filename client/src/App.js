import React from 'react'
import Home from './Home'
import Gallery from './Gallery'
import Commit from './Commit'
import Mission from './components/Mission'
import Blacklivesmatter from './Blacklivesmatter'
import Stonewallriots from './Stonewallriots'
import Freestyle from './Freestyle'
import { BrowserRouter, Route } from 'react-router-dom'






const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/commit" component={Commit} />
                <Route exact path="/mission" component={Mission} />
                <Route exact path="/blacklivesmatter" component={Blacklivesmatter} />
                <Route exact path="/stonewallriots" component={Stonewallriots} />
                <Route exact path="/freestyle" component={Freestyle} />


            </div>
        </BrowserRouter>

    )

}

export default App