import React from 'react';

import Landing from '../components/pages/Landing';
import TopArtists from '../components/pages/TopArtists';
import TopTracks from '../components/pages/TopTracks';

export const pages = [{
  id: 0,
  name: "Home",
  view: <Landing/>
}, {
  id: 1,
  name: "Top Artists",
  view: <TopArtists/>
}, {
  id: 2,
  name: "Top Tracks",
  view: <TopTracks/>
}];