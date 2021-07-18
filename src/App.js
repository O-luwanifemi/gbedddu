import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page404 from './Pages/404-Page';
import Homepage from './Pages/Homepage';
import TopAlbums from './Pages/TopAlbums';
import TopSongs from './Pages/TopSongs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/top100songs" component={TopSongs} />
        <Route exact path="/top100albums" component={TopAlbums} />
        <Route path="*" component={Page404} />
      </Switch>
    </Router>
  )
}

export default App;