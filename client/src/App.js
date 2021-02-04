import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Home from './pages/Home';
import UserCreate from './pages/UserCreate';
import PubCreate from './pages/PubCreate';
import PubUpdate from './pages/PubUpdate';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/user/create' component={UserCreate} />
        <Route exact path='/pub/create' component={PubCreate} />
        <Route exact path='/pub/update/:pubId' component={PubUpdate} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
