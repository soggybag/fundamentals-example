import React, { useEffect } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Title from './Title/Title';
import POPOSList from './POPOSList/POPOSList';
import About from './About/About'
import POPOSDetails from './POPOSDetails/POPOSDetails'

import CounterDisplay from './CounterDisplay'
import CounterButtons from './CounterButtons'
import { CounterProvider } from './CounterProvider'

import TestComponent from './TestComponent'

function App() {
  return (
    <Router>
      <CounterProvider>
        <div className="App">
            <Title />
            <CounterDisplay />
            <CounterButtons />
            <Route exact path="/" component={POPOSList}/>
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={POPOSDetails} />
        </div>
      </CounterProvider>

      <TestComponent />
    </Router>
  );
}

export default App;

