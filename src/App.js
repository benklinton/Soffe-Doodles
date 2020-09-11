import React from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Application from './pages/Application';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <>
            <Router>
                <Switch>
                    <Route exact path = '/Soffe-Doodles' component={Home}/>
                    <Route exact path = '/' component={Home}/>
                    <Route path = '/gallery' component={Gallery}/>
                    <Route path = '/application' component={Application}/>
                </Switch>
            </Router>
        </>
        
    )
}

export default App;