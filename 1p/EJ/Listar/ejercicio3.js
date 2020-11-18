function combina(n) {
    var result = [];
    var f = function(prefix, n) {
      for (var i = 0; i < n.length; i++) {
        result.push(prefix + n[i]);
        f(prefix + n[i], n.slice(i + 1));
      }
    }
    f('', n);
    return result;
  }
  console.log(combina([3,1,4,2,3]));