const bizcocho = [1,1,0,0,0];
const tortillaPapa = [1,0,0,1,0];
const galletitasManteca = [1,1,1,0,1];
const purePapa = [0,0,1,1,1];
const listaRecetas = [[bizcocho, 0, "Bizcocho"], [tortillaPapa, 0, "Tortilla de Papa"], [galletitasManteca, 0, "Galletitas de Manteca"], [purePapa, 0, "Puré de Papa"]];
//const ingredientesUsuario = [1,1,1,0,0];
var ingredientesUsuario=[]


function agregarIngrediente(id){
	ingredientesUsuarios.push(id)
}

function ingrediente_click(idIngrediente){
	if($("ing0").is(":checked")){
		agregarIngrediente(idIngrediente)
	}
	else{

	}
}



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

	for(let i=0; i<listaRecetas.length; i++){
		listaRecetas[i][1]=ingredientesFaltantes(listaRecetas[i][0],ingredientesUsuario);
	} 

	// Ordeno la lista 
	
	var anteriorMayor=bizcocho.length+1;
	var posOrdenar=listaRecetas.length-1;
	const ordenar = [];

	for(let i=0; i<listaRecetas.length; i++){
		var mayor = 0;
		for(let i=0; i<listaRecetas.length; i++){
			if( listaRecetas[i][1]<anteriorMayor && listaRecetas[i][1]>mayor){
				mayor=listaRecetas[i][1];
			}
		}
		anteriorMayor=mayor;
		for(let i=0; i<listaRecetas.length; i++){
			if(mayor==listaRecetas[i][1]){
				ordenar[posOrdenar]=listaRecetas[i][2];
				posOrdenar--;
			}
		}
	}
	return ordenar.toString();
}

console.log(ordenarRecetas())