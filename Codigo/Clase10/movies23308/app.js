// pasar a axios
// editar el css
// mostrar numero de pagina


// funcion para cargar las peliculas

window.addEventListener("load",()=>{
    cargarPeliculas()
})

let pagina = 1; // variable para controla la paginacion

//capturar los botones

let btnAnterior = document.querySelector("#btnAnterior");
let btnSiguiente = document.querySelector("#btnSiguiente");

//funcion anterior

btnAnterior.addEventListener("click", () => {
  if (pagina > 1) {
    //pagina = pagina-1
    pagina -= 1;
    cargarPeliculas()
    // llamar a la funcion que cargue las paginas
  }
});

btnSiguiente.addEventListener("click", () => {
  if (pagina < 500) {
    //pagina = pagina-1
    pagina += 1; // ++
    cargarPeliculas()
    // llamar a la funcion que cargue las paginas
  }
});

// funcion que cargue las pelis

const cargarPeliculas = async () => {
  try {
    let respuesta = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=TUAPIKEY&language=es-MX&page=${pagina}`
    );
    console.log(respuesta)
    if (respuesta.status == 200) {
      let datos = await respuesta.json();
console.log(datos);
      let peliculas = "";

      datos.results.forEach((pelicula)=>{
peliculas+=`<div class="pelicula"> 
<img class = "poster" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" />
<h3 class="titulo">${pelicula.title}</h3>
</div>`
});

document.querySelector(".contenedor").innerHTML=peliculas

    } else if (respuesta.status === 404) {
      console.log("error 404 nos vemos en otro lugar");
    }
  } catch (error) {
    console.log(error);
  }
};
