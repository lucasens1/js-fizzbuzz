const rowElem = document.querySelector(".row");
const buzz = "Buzz";
const fizz = "Fizz";
const fizzbuzz = "FizzBuzz";
console.log(rowElem);

for(let i = 1; i <= 100; i++){
    const boxElem = document.createElement("div"); 

    // Condizioni senza else, perché nel ciclo a scorrimento così incrementando la i piano piano aggiorna i quadrati ed i colori

    //Resto zero in divisione per 3
    if(i % 3 === 0){
        boxElem.innerHTML = fizz;
        boxElem.classList.add("box", "fizz");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    //Resto zero in divisione per 5
    if(i % 5 === 0 ){
        boxElem.innerHTML = buzz;
        boxElem.classList.add("box", "buzz");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    //Resto zero in divisione per 3 e 5
    if(i % 5 === 0 && i % 3 === 0){
        boxElem.innerHTML = fizzbuzz;
        boxElem.classList.add("box", "fizzbuzz");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    //Caso finale dove stampo l'indice
    if( i % 5 !== 0 && i % 3 !== 0){
        boxElem.innerHTML = i;
        boxElem.classList.add("box", "bux");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }
    

    //evento
    boxElem.addEventListener("click", function(){
        alert("ciao sono un box");
    })
    console.log(i);
}
