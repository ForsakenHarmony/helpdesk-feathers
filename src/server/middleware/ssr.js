import { render } from 'preact-render-to-string';

import configureStore from '../../app/ui/store/server-store';
import app from '../../app/ui/router.jsx';

const log = require('debug')('server:index');

module.exports = function ssr() {
  return function ssrMiddleware(req, res, next) {
    const store = configureStore();
    
    const string = render(app({ store, url: req.url }));
    log(string);
    next();
  };
};
