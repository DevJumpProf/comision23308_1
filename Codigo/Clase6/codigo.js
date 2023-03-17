//sentencia while
/* let numero = Number(prompt ("elige un numero")) */

/* while (numero<1000){
    numero++;
    document.write(numero + "<br>");
    if(numero==500){
break;
    }
}
 */

/* do{
numero++;
document.write(numero) 
}while(numero<10)

 */

/* while(numero<10){
    document.write(numero)
    numero++;
}
 */

// for
/* declaramos la variable;expresion condicional;incrementamos la variable */
/* for (let i = 0;i<10;i++){
console.log(i)
} */


for (let i=1;i<=10;i++){
    console.log(2*i);
} 


/* bucle infinito */
/* for (let i = 0; i>=0;i++){
    console.log(i);
}
 */

// Arrays - arreglo - Matriz



// indice             0           1       2      3
let lenguajes = ["Javascript", "Java","Python","Php","GO"]
//                   1           2       3        4

console.log(lenguajes[0]); // accedo a un elemento por su indice
console.log(lenguajes.length);
console.log(lenguajes[lenguajes.length-1]);// cantidad de elementos


/* Metodos de Array */
             //  0       1       2       3      4       5
let animales =["Gato","Perro","Tigre","Rata","Conejo","Gato"];

let numeros = [1,2,8,7,4,6,7,3]

//slice()
let nuevoArray=animales.slice(2,5)
/* console.log(nuevoArray); */

//unshift
/* animales.unshift("Dragon");
console.log(animales) */

//shift
/* animales.shift()
console.log(animales) */


/* .pop()
animales.pop()
console.log(animales); */

//.push()
/* animales.push("Cocodrilo") */



// find()
/* const nuevoArray = numeros.find(element=> element<3)
console.log(nuevoArray); */
//forEach

/* animales.forEach((element,i)=>{
    console.log(`el ${element} está en la posicion ${i}`);
}) */

//filter()
/* 
let nuevoArray=animales.filter (elements=>elements==="Perro"||elements==="Gato")
console.log(nuevoArray) */

//.map()

/* let nuevoArray = numeros.map(elements =>elements *10)
console.log(nuevoArray); */


