import React, {Component} from 'react';
import Login from './Login';
import LandingPage from './LandingPage';
import { Route, withRouter } from 'react-router-dom';
import SignUp from "./SignUp";
import BookTicket from "./BookTicket";
import MovieHallAdminHome from "./MovieHallAdminHome";

class NewerHomePage extends Component{

  render() {
      return (
        <div>
          <Route exact path="/home" render={LandingPage}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/book" component={BookTicket}/>
          <Route exact path='/moviehalladminhome' component={MovieHallAdminHome}/>


        </div>

    );
}
}

export default withRouter(NewerHomePage);
