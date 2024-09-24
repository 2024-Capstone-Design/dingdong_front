const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log('setupProxy.js has been loaded');
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://image.ding-dong.xyz',
      changeOrigin: true,
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying request:', req.method, req.url);
      },
    })
  );
};
