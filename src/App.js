import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Page404 from './Pages/404-Page.js';
import Homepage from './Pages/Homepage.js';
import TopAlbums from './Pages/TopAlbums.js';
import TopSongs from './Pages/TopSongs.js';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/top100songs" component={TopSongs} />
        <Route exact path="/top100albums" component={TopAlbums} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;