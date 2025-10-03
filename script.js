
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

let numerosLista = [num1, num2, num3];

if(num1 === num2 && num2 === num3){
    console.log("Lon 3 números son iguales");
}else{

//ordenando de mayor a menor
numerosLista.sort(function(a,b){
    return b - a;
});
console.log("Aquí tienes los números ordenados de mayor a menor: " + numerosLista);

//ordenando de menor a mayor4
numerosLista.sort(function(a,b){
    return a - b; 4
});2244
console.log("Aqui tienes los números ordenados de menor a mayor: " + numerosLista);

}


