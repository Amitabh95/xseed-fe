import React, { Component } from 'react';
import { Route, Switch, withRouter, HashRouter } from 'react-router-dom'; //Redirect
// import { connect } from 'react-redux';

import * as Links from './config/links';
import LoaderComponent from './component/Loader/Loader';
import LandingPage from './Pages/landingPage/landingPage';
import MatchListPage from './Pages/matchList/matchList';
import MatchDetailsPage from './Pages/matchDetails/matchDetails';

const loader = () => <LoaderComponent />
class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <React.Suspense fallback={loader()}>
            <Switch>
              <Route path='/' exact component={LandingPage} />
              <Route path={Links.MATCH_LIST_PAGE} component={MatchListPage} />
              <Route path={Links.MATCH_DETAILS_PAGE} component={MatchDetailsPage} />
            </Switch>
          </React.Suspense>
        </HashRouter>
      </div>
    );
  }
}

export default withRouter((App));
