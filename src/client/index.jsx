import debug from 'debug';
import { render } from 'preact';

import './index.html';

import '../app/feathers';
import App from '../app/ui/router.jsx';

if (process.env.NODE_ENV !== 'production') {
// eslint-disable-next-line global-require
  require('preact/devtools');
}

debug.enable('app:*');

render(<App/>, document.getElementById('appRoot'));
