import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './css/App.css'

import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Membros from './Pages/Membros';

// import LoginCard from './Components/LoginCard'
// import RegisterCard from './Components/RegisterCard'

function App() {
  return(

    <div className='App'>
      <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/membros' component={Membros}/>
          </Switch>
      </Router>
    </div>
  );
};

export default App;