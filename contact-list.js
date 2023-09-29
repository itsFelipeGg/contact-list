let listacontacto = [
  "alexis marquez",
  "mauricio restrepo",
  "ethan romero",
  "hamminton piñeros",
  "manuela zuluaga",
];

function agregarcontactos(nuevocontacto) {
  listacontacto.push(nuevocontacto);
}

agregarcontactos("jose gracia");

function borrarcontacto(borrar) {
  listacontacto.splice(borrar, 1);
}

function imprimircontacto() {
  for (let i = 0; i < listacontacto.length; i++) {
    console.log(listacontacto[i]);
  }
}
