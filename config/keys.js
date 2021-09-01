// Assigns creditentials based of prod/dev
if (process.env.NODE_ENV === "production") {
  // In prod
  module.exports = require("./prod");
} else {
  // In dev
  module.exports = require("./dev");
}
