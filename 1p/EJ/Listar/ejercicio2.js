var per = [],
  s = [];

function permutacion(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    s.push(ch);
    if (input.length == 0) {
      per.push(s.slice());
    }
    permutacion(input);
    input.splice(i, 0, ch);
    s.pop();
  }
  return per
};


console.log(permutacion([3,1,4,2,3]));