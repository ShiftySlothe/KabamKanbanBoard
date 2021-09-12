/* eslint @typescript-eslint/no-var-requires: "off" */
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google", "/api/*", "/auth/google/callback"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
