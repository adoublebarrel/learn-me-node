function Spy(target, method) {
  "use strict";
  var spy = {
    count: 0,
    targetObj: target,
    wrappedMethod: target[method]
  };

  spy.wrap = function() {
    this.count += 1;
    return this.wrappedMethod.apply(this.targetObj, Array.prototype.slice.call(arguments));
  };

  target[method] = spy.wrap.bind(spy);

  return spy;
}

function betterSpy(target, method) {
  var originalFunction = target[method];

  // use an object so we can pass by reference, not value
  // i.e. we can return result, but update count from this scope
  var result = {
    count: 0
  };

  // replace method with spy method
  target[method] = function() {
    result.count++; // track function was called
    return originalFunction.apply(this, arguments); // invoke original function
  };

  return result;
}

module.exports = Spy;
