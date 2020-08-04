import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navigation from './components/Navigation'
import ContactsList from './components/ContactsList'
import CreateContact from './components/CreateContact'

function App() {
  return (
    <Router>
      <Navigation/>
      
      <Route path='/' exact component={ContactsList}/>
      <Route path='/admin' component={CreateContact}/>
      <Route path='/edit/:id' component={CreateContact}/>
    </Router>
  );
}

export default App;
