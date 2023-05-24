const bizcocho = [0,1,1,0,0,0];
const tortillaPapa = [0,1,0,0,1,0];
const galletitasManteca = [0,1,1,1,0,1];
const purePapa = [0,0,0,1,1,1];
const listaRecetas = [bizcocho, tortillaPapa, galletitasManteca, purePapa];
const ingredientesUsuario = [0,0,0,1,1,1];
const cantRecetas = 4;
const cantIngredientes = 5;

function ingredientesFaltantes (receta, busqueda){
 var r = 0;
  for(let i = 0; i<receta.length; i++){
   if(receta[i]>busqueda[i]){
     r++;
   }
 }
   return r;
}

function ordenarRecetas(){
for(let i=0; i<cantRecetas; i++){
  listaRecetas[i][0]=ingredientesFaltantes(listaRecetas[i],ingredientesUsuario);
} 

  /* const menorMayor = ordenar.sort((a,b)=>{
    return a-b;
 });
  
  return menorMayor */
  const ordenar = [];
  for(let i=0; i<cantRecetas; i++){
    var menor = 0;
    for(let i=0; i<cantRecetas; i++){
      if(menor>listaRecetas[i][0]){
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