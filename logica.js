const bizcocho = [1,1,0,0,0];
const tortillaPapa = [1,0,0,1,0];
const galletitasManteca = [1,1,1,0,1];
const purePapa = [0,0,1,1,1];
const listaRecetas = [bizcocho, tortillaPapa, galletitasManteca, purePapa];
const ej = [0,0,1,1,1];
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
 const ordenar = [];

for(let i=0; i<cantRecetas; i++){
  ordenar[i]=ingredientesFaltantes(listaRecetas[i],ej);
} 

  const menorMayor = ordenar.sort((a,b)=>{
    return a-b;
 });
  
  return menorMayor
}

console.log(ordenarRecetas())