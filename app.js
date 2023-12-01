let quoteEl = document.querySelector(".qoutes")
console.log(quoteEl);

let qoutes = ["Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you." , "The truth is that killing innocent people is always wrong - and no argument or excuse, no matter how deeply believed, can ever make it right. No religion on earth condones the killing of innocent people; no faith tradition tolerates the random killing of our brothers and sisters on this earth." , "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do"]


function displayQuote() {

   let num = ramdomNumber()
        quoteEl.innerHTML = qoutes[num]
        
 
}

function ramdomNumber() {
    return Math.floor(Math.random()*qoutes.length)
}


