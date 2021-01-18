class Element
{
  elQueSigue = a;
  unidad = b;
 
  constructor(value) {
    this.unidad = unidad;
  }
}
class ListaEnlazada
{
  a = 1;
  b = 2;
  c = 3;
 
  agregar = (unidad) => {
 
    const Element = new Element(unidad);
 
    if (!this.primero) {
      this.primero = Element;
      this.ultimo = Element;
      return;
    }
 
    this.ultimo.next = item;
    this.ultimo = item;
  }
}
let lista = new ListaEnlazada();
 console.log(lista)