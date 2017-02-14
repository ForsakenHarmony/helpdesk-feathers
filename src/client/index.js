/* eslint-disable global-require */
/* eslint-disable import/no-unassigned-import */
/* eslint-disable import/first */
import debug from 'debug';

import './index.html';

if (process.env.NODE_ENV !== 'production') {
  require('preact/devtools');
}

debug.enable('app:*');

import '../app/ui/client.jsx';
