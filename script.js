let num1, num2, operator, answer, correctAnswer, score = 0, count = 0;

function generateQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  if (Math.random() < 0.5) {
    operator = "x";
    correctAnswer = num1 * num2;
  } else {
    operator = "÷";
    correctAnswer = num1 / num2;
    correctAnswer = correctAnswer.toFixed(1);
  }
  document.getElementById("question").innerHTML = `${num1} ${operator} ${num2} = `;
}

function checkAnswer() {
  answer = document.getElementById("answer").value;
  if (answer == correctAnswer) {
    score++;
    document.getElementById("result").innerHTML = "Correct!";
    document.getElementById("result").classList.add("correct");
  } else {
    document.getElementById("result").innerHTML = `Incorrect! The answer is: ${correctAnswer}`;
    document.getElementById("result").classList.add("incorrect");
  }
  count++;
  document.getElementById("score").innerHTML = `Score: ${score}/${count}`;
  if (count == 10) {
    setTimeout(clearResults, 1000);
  }
  generateQuestion();
}

function clearResults() {
  document.getElementById("result").innerHTML = "";
  document.getElementById("score").innerHTML = "";
  score = 0;
  count = 0;
}
