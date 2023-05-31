const bizcocho = [1,1,0,0,0];
const tortillaPapa = [1,0,0,1,0];
const galletitasManteca = [1,1,1,0,1];
const purePapa = [0,0,1,1,1];
const listaRecetas = [[bizcocho, 0], [tortillaPapa, 0], [galletitasManteca, 0], [purePapa, 0]];
const ingredientesUsuario = [0,0,1,1,1];
const cantRecetas = 4;

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

	for(let i=0; i<cantRecetas; i++){
		listaRecetas[i][1]=ingredientesFaltantes(listaRecetas[i][0],ingredientesUsuario);
	} 

	// Ordeno la lista 

	/* esto no se que es ¿LAUCHA? 
	const menorMayor = ordenar.sort((a,b)=>{
		return a-b;gi
	});
	
	return menorMayor */


	//de aca para abajo hay que cambiar


	const ordenar = [];
	for(let i=0; i<cantRecetas; i++){
		var menor = 0;
		for(let i=0; i<cantRecetas; i++){
		if(menor<listaRecetas[i][0]){
			menor=listaRecetas[i][0];
		}
		}
		for(let i=0; i<cantRecetas; i++){
		var m=0;
		if(menor==listaRecetas[i][0]){
			ordenar[m]=listaRecetas[i];
			m++;
		}
		}
	}
	return ordenar;
}

console.log(ordenarRecetas())