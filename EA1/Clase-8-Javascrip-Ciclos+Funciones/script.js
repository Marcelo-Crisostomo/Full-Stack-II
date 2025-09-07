function ejemploFunciones(){

    //para ir acumulando el texto
    let salida = "";

    //defino una función tradicional
    function saludar (nombre){
        salida += "Hola, " + nombre + "\n"; 
    }

    //Funciones anónimas = flecha . arrow functions
    // no tienen nombre y son automáticas

    const  sumar = (a,b) => a+b;

    //llamar a las funciones
    saludar("Marcelo");
    saludar("Eduardo");

    //Llamar a la arrow function
    salida += "Suma de 5 + 3"+ sumar(5, 3) +"\n"
     //mostrar el resultado en la caja pre
    document.getElementById("resultado").textContent = salida;
}
   
function ejemploFor(){

    let salida = "Números del 1 al 10: \n"

    //For
    //var i
    //condicional
    //Incremento, salto, con paso
    for(let i = 1; i <=10; i++){
        salida += "Número: "+ i + "\n";
    }
     //mostrar el resultado en la caja pre
    document.getElementById("resultado").textContent = salida;
}

// EJMPLO WHILE

function ejemploWhile(){
    let salida = "";

    let contador = 1;

    while(contador<=5){
        salida += "Contador vale: "+ contador + "\n";
        contador++;
    }
    //mostrar el resultado en la caja pre
    document.getElementById("resultado").textContent = salida;
}

// FOREACH == Para cada uno
function ejemploForEach(){
    let salida ="";
    let frutas = ["Sandía", "Pera", "Platano", "Melón", "Frutilla", "Naranja","Manzana Roja"]
    frutas.forEach((frutas, indice)=>{
        salida += "Frutas que me gustan "+(indice+1)+ ": "+ frutas + "\n"
    });
    //mostrar el resultado en la caja pre
    document.getElementById("resultado").textContent = salida;
}

function ejemploMetodos(){
    let salida = "";
    let texto = "Hola DUOC Vespertino";

    salida += "Texto Original "+ texto+ " \n ";

    salida += "Mayúsculas"+ texto.toUpperCase()+ "\n";
    salida += "Minúsculas"+ texto.toLowerCase()+ "\n";

    salida += "Cantidad de caracteres"+texto.length+"\n";

    let numeros = [1,2,3,4,5];

    salida += "Lista original"+numeros+"\n";

    numeros.push(6);//agrega un número al final

    salida += "Númenros después de Push "+numeros+"\n";

    numeros.pop()//último número

    salida += "Númenros después de Pop "+numeros+"\n";

      //mostrar el resultado en la caja pre
    document.getElementById("resultado").textContent = salida;

}








