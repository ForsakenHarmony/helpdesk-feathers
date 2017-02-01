import { Provider } from 'preact-redux';
import { Router } from 'preact-router';

import NotFound from './containers/NotFound.jsx';
import App from './containers/App.jsx';
import Index from './containers/Index.jsx';
import Tickets from './containers/Tickets.jsx';

const Page = (store, history, url) => (
  <Provider store={store}>
    <App>
      <Router history={history} url={url}>
        <Index path='/'/>
        <Tickets path='/tickets'/>
        <NotFound default path='/404'/>
      </Router>
    </App>
  </Provider>
);

export default Page;
