const quiz = [
    ["What is Superman's real name?", 'Clark Kent'],
    ["What is Wonderwoman's real name?", 'Diana Prince'],
    ["What is Batman's real name?", 'Bruce Wayne']
];

function start(quiz){
    let score = 0;

//main loop for game
for(const [question, answer] of quiz){
    const response = ask(question);
    check(response, answer);
}

//question function
function ask(question){
    return prompt(question);
}
//check answer entered by user
function check(response,answer){
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

gameOver();

function gameOver(){
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
}

}
start(quiz);