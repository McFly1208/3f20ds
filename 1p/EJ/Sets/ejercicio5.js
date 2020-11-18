var set = new Set([1,2,3,4]);

//No puede ser creado en un array
var weakset = new WeakSet();
weakset.add({a: 1}); //objt referenciado

console.log(set.size);//4
console.log(weakset.size);//undefined

for(var i of set)
{
    console.log(i); //1,2.3.4
}

//Da error
for(var i of weakset)
{
    console.log(i);
}

set.clear();
weakset.clear(); //Funciona