/* DESTRUCTURING */

//Array
        //          0         1         2
let seleccion = ["Messi", "De Paul", "Martinez"]

// copio los datos SIN DESTRUCTURING
let dibu2 = seleccion[2] 

console.log(dibu2);
seleccion.pop();
console.log(dibu2);
console.log(seleccion);

// copio  los datos CON DESTRUCTURING
  //  0     1      2

let [leo,rodrigo,dibu] = seleccion

console.log(seleccion);
console.log(leo)
 
// copio los datos SIN DESTRUCTURING
let auto ={
    marca: "Citroen",
    modelo:"C3",
    anio: 2003
}

/* let miModelo = auto.modelo
console.log(auto); */

// extrer los datos CON DESTRUCTURING
let {marca:marcaok,anio} = auto

console.log(marcaok);


//spread operator
//array
let rapido =  ["rapido y furioso","rapido y furioso2","rapido y furioso3"]
let furioso = ["rapido y furioso 4", "rapido y furioso 5"]

let todas = [...rapido,...furioso,"La 6"]

console.log(todas);
rapido.pop()
console.log(rapido)
console.log(todas)

// objeto

let generoAccion={
    nombreGenero: "Accion",
    popularidad:10
}

let rambo ={
    titulo: "rambo",
    ranking:1,
   ...generoAccion
}

console.log(rambo.popularidad);


