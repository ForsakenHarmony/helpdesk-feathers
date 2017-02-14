import { render as renderToDom } from 'preact';
// eslint-disable-next-line import/no-extraneous-dependencies

import syncHistoryWithStore from 'preact-router-redux/lib/sync';

import browserHistory from '../lib/browser-history';
import configureStore from './store/store';

import * as actions from './actions/';

import App from './router.jsx';

const store   = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

store.dispatch(actions.setTickets([{ title: 'Test', id: 'kakf' }, { title: 'Test2', id: 'ffae' }]));

const render = () => {
  renderToDom(
    <App store={store} history={history}/>
    , document.getElementById('appRoot'));
};

render();

// if (module.hot) module.hot.accept('./router.jsx', () => render());
