

module.exports = function ssr() {
  return function ssrMiddleware(req, res, next) {
    next();
  };
};
