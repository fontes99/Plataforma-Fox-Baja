import React from 'react';

import {BrouseRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Pages/Home'

import Navbar from './Components/Navbar'
import LoginCard from './Components/LoginCard'

const App = () => {
  return(
    
    <div>
      <Router>
      
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={LoginCard}/>
        </Switch>
    
      </Router>
    </div>

  );
};

export default App;