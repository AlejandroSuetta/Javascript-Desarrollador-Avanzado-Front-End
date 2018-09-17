/*
Tipos de datos

Primitivos: Por valor
	String: "" '' ``
	Number:  1 2 3 -4 5.6
	Boolean: true o false
	undefined: Una variable declarada pero sin valor ó la ejecución de una funcion sin retorno
	null

Objetos: Por referencia
	Object
	Array
	Fuction
*/

/*
Pasar por valor
var a = 1
var b = a
a = 10;
console.log(b) //1
*/

/*Pasar por referencia
var a = {x:1} //Asi se declaran objetos. Son como contenedores de variables. a contiene la variable x, que vale 1.
var b = a
a.x = 10
console.log(b) //{x:10}
*/

//Todos los objetos son matrices indexada asisiativa
/*
R[1 2 3]
  0 1 2

R[uno=>1 dos=>2 tres=>3]
	uno		dos   tres
*/

/*
var arr = [1, "s", true, undefined, null, {}.[].function(){}]

var ob = {
	uno : 1,
	dos : 2,
}

//Notacion de corchete
//Indice String
arr["length"] //8
arr[0] //1
//Indices variables
var i = 1
arr[i] //"s"
*/

/*
//Notacion de punto
//Indice numerico
//arr.0 //Unexpected Numbre (Error)
//Indice de String
arr.length //8
//Indice variable
arr.i //da undifined (crea el indice i temporalmente, pero no tiene valor)
*/

//JSON => JavaScript Object Model

/*
Propiedades Windoiw:
-innerWidth				Medidas del
-innerHeigth			doc HTML
-outerWidth			Medidas del
-outerHeigth		navegador
-location.href = "" 		Mapea con la barra de navegación
-history.back() 		Vuelve atras un paso en el historial
-history.forward()		Igaul que antes, pero hacia adelante
-var foo = function (){} //window.foo = foo()
-document
-console.dir(document)
*/

/*
Propiedades Document:
-document.getElementById()
-document.getElementsByClassName()
-document.getElementsByTagName()
-document.querySelector()
-document.querySelectorAll() 		String cualquier selector valido de CSS ("#uno" ".uno" "h1") (ej:document.querySelector("body section article:nth-chile(3) p"))

	var p = document.querySelector("p");
	p.id = "parrafo";
	p.innerText = "Hola";

-p.classList.add
		   .remove()
		   .toggle()
-document.createElement(String TagName)
	var p = document.createElement("p");
	p.innerText = "lorem";
	p.classList.add("parrafo");
	var body = document.querySelector("body");
	body.appendChild(p);  //tambien existe NODO.removeChild(var variable)

	var ul = document.querySelector("ul");
	var fragmento = document.createDocumentFragment(); //Fragments se pueden modificar sin lanzar el Reflow/Repaint, haciendolo mas rapido
	for (var i = 0 ; i < 5; i++){
		var li = document.createElement("li");
		li.innerText = "Item " + (i + 1);
		fragmento.appendChild(li);
	}
	ul.appendChild(fragmento);
*/

/*
console.time("contador") //Timer llamado contador
console.timeEnd("contador") //para el Timer
*/

//Clase 02
/*Eventos: Es la ejecución de una función(callback) como respuesta a una acción.
Nodo.addEvenetListener(String NombreDelEvento, Fuction Callback, Boolean(boolean determina en que fase esta el evento, opcional) 
																		//ej nombre: "click"; ej Fuction: fuction(){} o foo (fución nombrada)
*/

/*
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
	console.log("Hola")});

function Saludo() {
	console.log("saludo")
}
btn.addEventListener("click", Saludo); //Esto no pisa el anterior, agrega más Listeners

var cancelar = document.getElementById("cancelar");
cancelar.addEventListener("click", function(){
	btn.removeEventListener("click", Saludo)
});

document.body.addEventListener("click", function(e){
	console.log("click del body");
	e.stopPropagation();
});

var a = document.querySelector("a");
a.addEventListener("click", function(e){
	e.preventDefault();
	console.log("Click del a");
});
*/

/*Propagación de Eventos == Fase del evento
-Bubbling (con false)
-Capturing (con true)

e.stopPropagation()		//Detiene la propagación del evento en cualquier fase. Se pone en el primero que se ejecuta
e.preventDefault()		//Detiene el comportamiento por default de una etiqueta (a (su comportamiento es llevar al ligar indicado en href), 
							form(Hace el action)) 
*/

/*
Ejercicio:
1) El callback del click asignado en <a> tiene que poder crear dos botones.
2) Los botones tienen que decir "aceptar" y "cancelar".
3) También se tiene que crear un <p>, que diga "Esta seguro que quiere salir?".
4) Si se hece click en "aceptar", se tiene que redirigir al usuario a la URL del link.
5) Si se da click en "cancelar", se tiene que borrar los botones y el texto.
*/


var a = document.querySelector("a");
a.addEventListener("click", function(e){
	e.preventDefault();
	e.stopPropagation();
	var aceptar = document.createElement("button");
	aceptar.innerText = "Aceptar";
	var cancelar = document.createElement("button");
	cancelar.innerText = "Cancelar";
	var parr = document.createElement("p");
	parr.innerText = "Esta seguro que quiere salir?";

	var body = document.querySelector("body");
	body.appendChild(aceptar);
	body.appendChild(cancelar);
	body.appendChild(parr);

	aceptar.addEventListener("click", function(e){
		window.location.assign("https://www.google.com/");
	});

	cancelar.addEventListener("click", function(e){
		body.removeChild(aceptar);
		body.removeChild(cancelar);
		body.removeChild(parr);
	})

});
