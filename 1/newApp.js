let btn=document.getElementById('submitguess');
let b=Math.floor(Math.random()*10)+1;
console.log(b);
let output=document.getElementById('container');
let guess=0
btn.addEventListener('click',function(){
    let a=document.getElementById('inputGuess').value;
    if (a==b) {
        // alert('your guess is right')    
        output.innerHTML=(`The random number is ${b}.You are right`)
    }
    else if(a>b){
        guess++
        // alert('your guess is high')
        output.innerHTML=(`The random number is ${b}.Your guess number is high.Guess again.`);
        
    }
    else if(a<b){
        guess++;
        // alert('your guess is low')
        output.innerHTML=(`The random number is ${b}.Your guess number is low.Guess again.`);
        
    }
})
