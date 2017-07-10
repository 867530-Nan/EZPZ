import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import { Switch, Route } from 'react-router-dom';
import FetchUser from './FetchUser';
import Activities from './Activities';
import Itinerary from './Itinerary';
import '../styles/registration.css';
import AboutUs from './AboutUs';
import Profile from './Profile';
import Contact from './Contact';
import ActivityView from './ActivityView'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/aboutus' component={AboutUs} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <ProtectedRoute exact path='/itinerary' component={Itinerary} />
            <ProtectedRoute exact path='/activities' component={Activities} />
            <ProtectedRoute exact path='/activity' component={ActivityView} />
            <ProtectedRoute exact path='/profile' component={Profile} />
            <ProtectedRoute exact path='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
