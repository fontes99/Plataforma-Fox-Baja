import React from 'react';

import {BrouseRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import LoginCard from './Components/LoginCard'

const App = () => {
  return(
    
    <Router>
      
      <div>
        <Navbar/>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' exact component={LoginCard}/>
        </Switch>
      </div>
    
    </Router>

  );
}