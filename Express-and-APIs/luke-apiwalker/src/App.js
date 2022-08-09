import './App.css';
import React from "react";
import {
  BrowserRouter, // this enabled routing
  Switch, // this lets us choose what shows up at certain routes
  Route, // this lets up specify a url address
} from "react-router-dom";
// npm install react-router-dom@5 

import Form from './components/Form'
import Results from './components/Results'

function App() {

  return (
    <BrowserRouter>
    {/* things outside of the switch will always be present  */}
    <Form />
    {/* switches conditionally render components */}
      <Switch>
        <Route exact path="/:category/:id">
          <Results />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
