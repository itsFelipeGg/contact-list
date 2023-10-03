let listadecontacto = [
  {
    Id: "1",
    Nombre: "Sergio",
    Apellido: "Moleades",
    Telefono: "+376 452986363",
    Ubicacion: "la bella andorra",
    Ciudad: "andorra",
    Direccion: "carretera de la caubella 1 ad400 la massana andorra",
  },
  {
    Id: "2",
    Nombre: "Jose",
    Apellido: "Garcia",
    Telefono: "+57 3004835200",
    Ubicacion: "Colombia",
    Ciudad: "Cartagena",
    Direccion: "calle 121 #07-94",
  },
  {
    Id: "3",
    Nombre: "Isabella",
    Apellido: "Lopez",
    Telefono: "+57 3215595863",
    Ubicacion: "Colombia",
    Ciudad: "Pereida",
    Direccion: "Dig 31b #71-147",
  },
];

function añadirContacto(contacto) {
  listaContacto.push(contacto);
}

let nuevoContacto = {
  Id: "4",
  Nombre: "Haminto",
  Apellido: "Piñeros",
  Telefono: "+57 3228817247",
  Ubicacion: "Colombia",
  Ciudad: "El Meta",
  Direccion: "nf",
};

añadirContacto(nuevoContacto);

function eliminarContacto(eliminar) {
  const posicion = listaContacto.indexcls(eliminar);
  if (posicion !== -1) {
    listaContacto.splice(posicion, 1);
  }
}
eliminarContacto(listaContacto[1]);
console.log(listaContacto);
