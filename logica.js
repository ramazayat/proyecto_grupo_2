const bizcocho = [1,1,0,0,0];
const tortillaPapa = [1,0,0,1,0];
const galletitasManteca = [1,1,1,0,1];
const purePapa = [0,0,1,1,1];
const listaRecetas = [[bizcocho, 0, "Bizcocho"], [tortillaPapa, 0, "Tortilla de Papa"], [galletitasManteca, 0, "Galletitas de Manteca"], [purePapa, 0, "Puré de Papa"]];
const ingredientesUsuario = [1,1,1,0,0];

function ingredientesFaltantes(receta, busqueda){
	var cantIngFaltantes=0;
	for(let i = 0; i<receta.length; i++){
		if(receta[i]>busqueda[i]){
			cantIngFaltantes++
		}
	}
	return cantIngFaltantes;
}

function ordenarRecetas(){
	// Recorro la lista de recetas y actualizo...

	/* for(let i=0; i<listaRecetas.length; i++){
		listaRecetas[i][1]=ingredientesFaltantes(listaRecetas[i][0],ingredientesUsuario);
	} */

	for(let i=0; i<listaRecetas.length; i++){
		listaRecetas[i][1]=ingredientesFaltantes(listaRecetas[i][0],inputUsuario);
	} 

	// Ordeno la lista 

	var anteriorMayor=bizcocho.length+1;
	var m=listaRecetas.length-1;
	const ordenar = [];  

	//Obtengo el valor mayor de los ingredientes faltantes

	for(let i=0; i<listaRecetas.length; i++){
		var mayor = 0;
		for(let i=0; i<listaRecetas.length; i++){
		if( listaRecetas[i][1]<anteriorMayor && listaRecetas[i][1]>mayor){
			mayor=listaRecetas[i][1];
		}
		}
		anteriorMayor=mayor;

		//Completo el arreglo con los nombres de las recetas en orden

		for(let i=0; i<listaRecetas.length; i++){
		if(mayor==listaRecetas[i][1]){
			ordenar[m]=listaRecetas[i][2];
			m--;
		}
		}
	}
	return ordenar.toString();
}

const inputUsuario = [];
const ingredientes = ["Huevo", "Harina", "Leche", "Papa", "Manteca"]


const inputs = [
	prompt("¿Tenes Huevo?"),
	prompt("¿Tenes Harina?"),
	prompt("¿Tenes Leche?"),
	prompt("¿Tenes Papa?"),  
	prompt("¿Tenes Manteca?")
]

for(let i = 0; i<inputs.length; i++){
	if(inputs[i] == "Si" || inputs[i] == "si" || inputs[i] == "SI"){
		inputUsuario[i] = 1;
	}else{
		inputUsuario[i] = 0;
	}
}



console.log(ordenarRecetas())