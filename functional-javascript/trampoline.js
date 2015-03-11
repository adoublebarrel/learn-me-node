function repeat(operation, num) {
  // Modify this so it doesn't cause a stack overflow!
  if (num <= 0) return;
  operation();
  num -= 1;
  return repeat.bind(undefined, operation, num);
}

function trampoline(fn) {
  while (typeof(fn) === "function") {
    fn = fn();
  }
  return fn;
}

module.exports = function(operation, num) {
  // You probably want to call your trampoline here!
  return trampoline(repeat.bind(undefined, operation, num));
};

/*
Alternative implementation

function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn) {
  while(fn && typeof fn === 'function') {
    fn = fn();
  }
}

module.exports = function(operation, num) {
  trampoline(function() {
    return repeat(operation, num);
  });
};

*/
