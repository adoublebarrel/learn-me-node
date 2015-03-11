// My crappy but at least it works solution
function getDependencies(tree, keys, acc) {
  "use strict";
  var head, tail;

  if (tree.hasOwnProperty('dependencies')) {
    acc = (getDependencies(tree.dependencies, Object.keys(tree.dependencies), acc || {}));
  }

  if (Array.isArray(keys)) {

    if (keys.length === 0) {
      return acc;

    } else {
      head = keys[0];
      tail = keys.slice(1);

      acc[head + '@' + tree[head].version] = true;

      // Depth first...
      acc = getDependencies(tree[head], [], acc);
      // then continue processing keys
      acc = getDependencies(tree, tail, acc);
    }

  } else if (typeof(acc) === 'object') {
    acc = Object.keys(acc).sort();
  }

  return acc;
}

// Official solution

function officalGetDependencies(mod, result) {
  result = result || [];
  var dependencies = mod.dependencies || [];
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(mod.dependencies[dep], result);
  });
  return result.sort();
}

module.exports = getDependencies;
