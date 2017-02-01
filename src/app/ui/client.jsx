import { render } from 'preact';

import syncHistoryWithStore from 'preact-router-redux/lib/sync';

import browserHistory from '../lib/browserHistory';
import configureStore from './store/store';

import * as actions from './actions/';

import App from './router.jsx';

const store   = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.setTickets([{ title: 'Test' }, { title: 'Test2' }]));

render(App(store, history), document.getElementById('appRoot'));
