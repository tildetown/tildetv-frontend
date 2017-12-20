import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppContainer from './containers/App';

import Home from './pages/Home';
import Videos from './pages/Videos';
import Howto from './pages/Howto';
import Playground from './pages/Playground';

const Root = () => (
  <AppContainer>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/videos" component={Videos} />
      <Route path="/howto" component={Howto} />
      {process.env.NODE_ENV !== 'production' && <Route path="/playground" component={Playground} />}
    </Switch>
  </AppContainer>
);

export default Root;
