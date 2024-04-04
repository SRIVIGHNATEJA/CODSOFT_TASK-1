let secretNum;
let attemptsLeft;
const maxAttempts=10;
//starting new game!
function startGame()
{
    //random no generation
    secretNum=Math.floor(Math.random()*100)+1;
    //attempts reset
    attemptsLeft=maxAttempts;
    //clearing previous messages
    document.getElementById('message').innerText='';
    //showing attempts left
    document.getElementById('attempts').innerText=maxAttempts;
}
//checking user game
function checkGuess()
{
    //taking guess 
    const userGuess=parseInt(document.getElementById('guessInput').value)
    //validating users input
    if(isNaN(userGuess) || userGuess<1 || userGuess>100)
    {
        alert('Please enter a Valid Number between 1 to 100');
        return;
    }
    //decrementing attempts left!
    attemptsLeft--;
    //updating attempts left display
   document.getElementById('attempts').innerText=attemptsLeft;
    //if user guess correctly
    if(userGuess==secretNum)
    {
        document.getElementById('message').innerText='congratulations!,you guessed the correct number';
    }
    //if user number is lower
    else if(userGuess<secretNum)
    {
        document.getElementById('message').innerText='Too low.Try again';
    }
    //if number is higher
    else{
        document.getElementById('message').innerText='Too high.Try again'
    }
    //checking if out of attempts
    if(userGuess!==secretNum && attemptsLeft==0) 
    {
        document.getElementById('message').innerText='Out of Attempts.The correct number was'+secretNum + '-';
    }   
}
