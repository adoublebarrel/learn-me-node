function curryN(fn, n) {
  var args = [];
  n = n || fn.length;
  n -= 1;

  function curried(arg) {
    if (args.length < n) {
      args.push(arg);
      return curried;
    } else {
      return fn.apply(undefined, args.concat([arg]));
    }
  }

  return curried;
}

module.exports = curryN;
