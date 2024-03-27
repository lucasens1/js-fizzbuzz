const rowElem = document.querySelector(".row");
const buzz = "Buzz";
const fizz = "Fizz";
const fizzbuzz = "FizzBuzz";
console.log(rowElem);

for(let i = 1; i <= 100; i++){
    const boxElem = document.createElement("div"); 

    // Condizioni 
    
    if(i % 3 === 0){
        boxElem.innerHTML = fizz;
        boxElem.classList.add("box");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    if(i % 5 === 0 ){
        boxElem.innerHTML = buzz;
        boxElem.classList.add("box");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    if(i % 5 === 0 && i % 3 === 0){
        boxElem.innerHTML = fizzbuzz;
        boxElem.classList.add("box");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }

    if( i % 5 !== 0 && i % 3 !== 0){
        boxElem.innerHTML = i;
        boxElem.classList.add("box");
        //per inserire l'elemento nel genitore in pagina
        rowElem.append(boxElem);
    }
    

    //evento
    boxElem.addEventListener("click", function(){
        alert("ciao sono un box");
    })
    console.log(i);
}
