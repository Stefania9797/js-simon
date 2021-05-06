/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

//funzione che genera numeri casuali
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var generatedNumbersArray=[];
var userGuessList=[];
//Un alert() espone 5 numeri generati casualmente.
for(var i=0;i<5;i++){
    generatedNumbersArray.push(randomNumber(1,100))
}
alert("Ricorda questi numeri: " +generatedNumbersArray)
console.log(generatedNumbersArray);
//Da li parte un timer di 30 secondi.
var timer=document.getElementById("timer")
var seconds = 0;
var clock=setInterval(function() {
    if(seconds===31){
        clearInterval(clock)
        for(var j=0;j<5;j++){
            //Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
            var guess=Number(prompt("Inserisci, uno alla volta, i numeri che ricordi"));
            console.log(guess);
            if(generatedNumbersArray.includes(guess)){
                userGuessList.push(guess)
            }
        }
        alert("Hai ricordato "+userGuessList.length+" numeri "+userGuessList)
    }
        //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
        timer.innerHTML = seconds++;
    }, 1000);
