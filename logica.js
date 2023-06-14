const bizcocho = [0,1];
const tortillaPapa = [0,3];
const galletitasManteca = [0,1,2,4];
const purePapa = [2,3,4];
const listaRecetas = [[bizcocho, 0, "Bizcocho",2], [tortillaPapa, 0, "Tortilla de Papa",2], [galletitasManteca, 0, "Galletitas de Manteca",4], [purePapa, 0, "Puré de Papa",3]];
const ingredientesUsuario=[];

function ingrediente_click(idIngrediente){
	if($("#"+idIngrediente).is(":checked")){
		agregarIngrediente(idIngrediente);
	}
	else{
	
	}
}

function agregarIngrediente(id){
	ingredientesUsuario.push(id);
}


function ingredientesFaltantes(receta, busqueda){
	var cantIngFaltantes=0;
	for(let i = 0; i<receta.length; i++){
		for(let h = 0; h<busqueda.length; h++){
			if(receta[i]===busqueda[h]){
				cantIngFaltantes++
			}
		}	
	}
	return cantIngFaltantes;
}

function ordenarRecetas(){
	// Recorro la lista de recetas y actualizo...

	for(let i=0; i<listaRecetas.length; i++){
		listaRecetas[i][1]= ingredientesFaltantes(listaRecetas[i][0],ingredientesUsuario);
	} 

	// Ordeno la lista 
	
	var anteriorMayor=32;
	var posOrdenar=listaRecetas.length-1;
	const ordenar = [];

	for(let i=0; i<listaRecetas.length; i++){
		var mayor = 0;
		for(let i=0; i<listaRecetas.length; i++){
			if( (listaRecetas[i][3] - listaRecetas[i][1])<anteriorMayor && (listaRecetas[i][3] - listaRecetas[i][1])>mayor){
				mayor= (listaRecetas[i][3] - listaRecetas[i][1]);
			}
		}
		anteriorMayor=mayor;
		for(let i=0; i<listaRecetas.length; i++){
			if(mayor==(listaRecetas[i][3] - listaRecetas[i][1])&&posOrdenar>=0){
				ordenar[posOrdenar]=listaRecetas[i][2];
				posOrdenar--;
			}
		}
	}
	return ordenar;
}

console.log(ordenarRecetas());
console.log(ingredientesUsuario);