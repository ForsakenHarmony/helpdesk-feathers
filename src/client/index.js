import debug from 'debug';

import './index.html';

import '../app/feathers';

if (process.env.NODE_ENV !== 'production') {
// eslint-disable-next-line global-require
  require('preact/devtools');
}

debug.enable('app:*');

// eslint-disable-next-line import/first
import '../app/ui/client.jsx';
