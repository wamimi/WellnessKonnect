// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import CheckIn from './CheckIn';
import Therapy from './Therapy';
import Education from './Education';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/schedule" component={Therapy} />
          <Route path="/checkin" component={CheckIn} />
          <Route path="/education" component={Education} />
          <Route path="/education/module1" component={() => <div>Understanding Mental Health Content</div>} />
          <Route path="/education/module2" component={() => <div>Stress Management Content</div>} />
          <Route path="/education/module3" component={() => <div>Mindfulness Content</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
