import moment from 'moment';
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import './assets/css/app.css';
import SideDrawer from './components/drawer';
import Navbar from './components/navbar';
import Page from './components/page';
import AuthPage from './pages/auth.page';
import IndexPage from './pages/index.page';
import RegisterPage from './pages/register.page';
import UserPage from './pages/user.page';
import { selectAuthorizationState } from './redux';
import { ProtectedRoute, PublicRoute } from './router/app.router';

function App() {

  const authorization = useSelector(selectAuthorizationState);

  return (
    <>
      {
        moment(authorization.expireAt).isAfter(moment.now()) && authorization.token !== '' ?
          <SideDrawer /> : null
      }
      <Router>
        <Navbar />
        <Page>
          <Switch>
            <PublicRoute exact path='/' component={IndexPage} />
            <PublicRoute exact path='/auth' component={AuthPage} />
            <ProtectedRoute exact path='/user' component={UserPage} />
            <PublicRoute exact path='/register' component={RegisterPage} />
          </Switch>
        </Page>
      </Router>
    </>
  );
}

export default App;
