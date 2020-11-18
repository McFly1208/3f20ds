let carlos = { name: "carlos" };
let map = new Map();
map.set(carlos, "...");
console.log(map);
carlos = null; // se sobreescribe la referencia

// carlos esta en guaradado en map
// podemos llamarlo usando map.keys()

let Luis = { name: "Luis" };
let weakMap = new WeakMap();
weakMap.set(Luis, "...");
console.log(weakMap);
Luis = null; // se sobreescribe la referencia

// Luis es quitado de la memoria