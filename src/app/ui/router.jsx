import { Provider } from 'react-redux';
import { Router } from 'preact-router';

import NotFound from './containers/not-found.jsx';
import App from './containers/app.jsx';
import Index from './containers/index.jsx';
import Tickets from './containers/tickets.jsx';

const RouterComponent = ({ history, url }) => (
  <Router history={history} url={url}>
    <Index path="/"/>
    <Tickets path="/tickets"/>
    <NotFound default path="/404"/>
  </Router>
);

const Page = ({ store, history, url }) => (
  <Provider store={store}>
    <App>
      <RouterComponent history={history} url={url}/>
    </App>
  </Provider>
);

export default Page;

export { RouterComponent as Router };
