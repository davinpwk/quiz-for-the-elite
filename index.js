function generateRandom(){
    return Math.floor(Math.random() * (100 * Math.random()));
}

var number1;
var number2;
var answer;
var button = document.querySelector(".quiz-submit");

function game(){
    document.querySelector(".quiz-input").value = "";
    number1 = generateRandom();
    number2 = generateRandom();
    answer = number1 + number2;

    var question = "";
    question = number1 + " + " + number2;

    document.querySelector(".quiz-question").innerText = question;
}

game();

button.addEventListener("click", function(){
    var userInput = parseInt(document.querySelector(".quiz-input").value);
    // console.log(answer);
    // console.log(userInput);
    if(userInput === answer){
        console.log("correct");
        correct();
        game();
    }
    else{
        console.log("wrong");
        wrong();
        game();
    }
})

function correct(){
    window.location.href = "success-page/success.html";
}

function wrong(){
    window.location.href = "fail-page/fail.html";
}
