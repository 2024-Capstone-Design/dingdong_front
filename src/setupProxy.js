const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://apis.ding-dong.xyz',
      changeOrigin: true,
    })
  );
};