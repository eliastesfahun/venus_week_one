
function startQuiz() {
    currentQuestionIndex = 0
    score = 0
    showQuestion()
}

function showQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement('button');
            button.textContent = answer.text;
            button.classList.add('btn');
            button.addEventListener("click",()=> selectAnswer(answer, button));
            answerButtons.appendChild(button)
        })
    } else {
        showScore()
    }
}

function resetState() {
    answerButtons.innerHTML = '';
}

function selectAnswer(answer, button) {
    if (answer.correct) {
        // if the answer is correct turn the button into green background color
        button.style.backgroundColor = "green";
        // update the score
        score++
    } else {
        // if the answer is wrong turn the button into red background color
        button.style.backgroundColor = "red"
    }

    // move to the next question after 2 seconds
    setTimeout(() => {
        currentQuestionIndex++; // increase the index to move to the next question
        showQuestion();
    }, 2000)

}

function showScore() {
    questionElement.innerHTML = `Quiz Over! you scored ${score} out of ${questions.length}.`;
    answerButtons.innerHTML = '';
}

// strat the quiz

startQuiz()