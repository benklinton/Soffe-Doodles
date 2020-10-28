import React from 'react';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Application from './pages/Application';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sires_and_Dames from './pages/Sires_and_Dames';
import Litters from './pages/Litters';
import Health from './pages/Health';
import ContactPage from './pages/Contact';

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
                    <Route path = '/avaliable-puppies' component={Litters}/>
                    <Route path = '/health' component={Health}/>
                    <Route path = '/contact' component={ContactPage}/>
                </Switch>
            </Router>
        </>
        
    )
}

export default App;