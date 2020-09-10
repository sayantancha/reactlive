import React from 'react';
import {Route,Switch, Router} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Info from './Info';
import Home from './Home';
import Linking from './Linking';
const App=()=>{
    return(
        <>
        <Linking/>
       <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/About" component={About} />
           <Route exact  path="/Contact" component={Contact} />
           <Route exact  path="/Info" component={Info} />
       </Switch>
    </>);
};
export default App;