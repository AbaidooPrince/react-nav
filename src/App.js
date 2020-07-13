import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Home from "./components/home";
import Signup from './components/auth/signup';


function App() {
  return (

  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup}/>
    </Switch>
  </Router>
  );
}

export default App;
