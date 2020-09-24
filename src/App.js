import React from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Application from './pages/Application';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sires_and_Dames from './pages/Sires_and_Dames';
import Litters from './pages/Litters';

function App() {
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = '/Soffe-Doodles' component={Home}/>
                    <Route exact path = '/' component={Home}/>
                    <Route path = '/gallery' component={Gallery}/>
                    <Route path = '/application' component={Application}/>
                    <Route path = '/sires-dames' component={Sires_and_Dames}/>
                    <Route path = '/puppies' component={Litters}/>
                </Switch>
            </Router>
        </>
        
    )
}

export default App;