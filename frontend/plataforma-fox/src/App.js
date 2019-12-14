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

    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/membros' component={Membros}/>
        </Switch>
      </div>
    </Router>
  );
};

export default App;