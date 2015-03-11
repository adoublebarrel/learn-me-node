function duckCount() {
  "use strict";
  return Array.prototype.slice.call(arguments,0).reduce( function(previousValue, currentValue) {
    if ( Object.prototype.hasOwnProperty.call(currentValue, 'quack') ) {
      previousValue += 1;
    }

    return previousValue;
  },0);
}

function betterDuckCount() {
  return Array.prototype.slice.call(arguments).filter(function(obj) {
    return Object.prototype.hasOwnProperty.call(obj, 'quack');
  }).length;
}

module.exports = duckCount;
