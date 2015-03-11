module.exports = function arrayMap(arr, fn) {
  "use strict";
  return arr.reduce(function(previousValue, currentValue) {
    return previousValue.concat(fn(currentValue));
  }, []);
};
