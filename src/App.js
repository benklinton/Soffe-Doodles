import React from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path = '/Soffe-Doodles' component={Home}/>
                    <Route exact path = '/' component={Home}/>
                    <Route path = 'Soffe-Doodles/gallery' component={Gallery}/>
                </Switch>
            </Router>
        </div>
        
    )
}

export default App;