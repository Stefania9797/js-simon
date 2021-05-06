/*Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//Un alert() espone 5 numeri generati casualmente.
for(var i=0;i<5;i++){
    var generatedNumbers=alert(randomNumber(1,900))
}
//Da li parte un timer di 30 secondi.
var timer=document.getElementById("timer")
var seconds = 0;
var clock=setInterval(function() {
    if(seconds===30){
        clearInterval(clock)
    }
timer.innerHTML = seconds++;
}, 1000);