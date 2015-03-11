module.exports = function(namespace) {
  "use strict";
  return console.log.bind(console, namespace);
};
