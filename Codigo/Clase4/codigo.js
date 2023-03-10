//.Math
/* let nombre = "hola"
console.log("hola") */

/* document.write ("Hola") */

// Math

console.log(Math.pow(3,3));

console.log(Math.round(6.5));
console.log(Math.floor(6.01));
console.log(Math.ceil(6.01));

console.log(Math.trunc(6.5))

console.log(Math.round(Math.random()*10+1))

//length


let contrasenia = "12345678";
            //   0      1
let rol = "otro"
console.log(contrasenia.length)

// condicionales

if ((contrasenia.length<8)||(rol==="dev")){
console.log("tiene que tener minimo 8 caracteres")
}else{
console.log("Validacion OK")
}

// ternario

contrasenia.length<8?console.log("tiene que tener minimo 8 caracteres"):console.log("Validacion OK")

//switch
let semaforo = "amarillo"

switch (semaforo.toUpperCase()) {
case "ROJO": 
console.log("no podes pasar");
break;
case "AMARILLO":
    console.log("precaucion");
    break;
case "VERDE" : 
console.log ("podes pasar")
break;
default: 
console.log("color incorrecto")
}

// FUNCIONES

function saludo (){
console.log("hola codo a codo");
}
saludo ()

function suma (num1,num2){
console.log(num1+num2); 
}
suma (50,50)
suma (10,50)
suma (150,50)