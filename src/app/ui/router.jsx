import { Provider } from 'preact-redux';
import { Router } from 'preact-router';

import syncHistoryWithStore from 'preact-router-redux/lib/sync';

import browserHistory from '../lib/browserHistory';

import configureStore from './store/store';

import * as actions from './actions/';

import NotFound from './containers/NotFound.jsx';
import App from './containers/App.jsx';
import Index from './containers/Index.jsx';
import Tickets from './containers/Tickets.jsx';

const store   = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.setTickets([{ title: 'Test' }, { title: 'Test2' }]));

const Page = () => (
  <Provider store={store}>
    <App>
      <Router history={history}>
        <Index path='/'/>
        <Tickets path='/tickets'/>
        <NotFound default path='/404'/>
      </Router>
    </App>
  </Provider>
);

export default Page;
