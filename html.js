document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("quiz-form");
    const resultsContainer = document.getElementById("quiz-results");
    const correctAnswersElement = document.getElementById("correct-answers");
    const percentageElement = document.getElementById("percentage");

    const correctAnswers = {
        q1: "b", // Réponse correcte pour la question 1
        q2: "a", // Réponse correcte pour la question 2
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let score = 0;
        const userAnswers = {};

        const questions = document.querySelectorAll(".question");

        questions.forEach((question, index) => {
            const questionNumber = index + 1;
            const selectedAnswer = question.querySelector("input[type=radio]:checked");

            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;
                userAnswers[`q${questionNumber}`] = userAnswer;

                if (userAnswer === correctAnswers[`q${questionNumber}`]) {
                    score++;
                    question.classList.add("correct");
                } else {
                    question.classList.remove("correct");
                }
            }
        });

        const totalQuestions = questions.length;
        const percentage = (score / totalQuestions) * 100;

        correctAnswersElement.textContent = `Réponses correctes : ${score} / ${totalQuestions}`;
        percentageElement.textContent = `Pourcentage de bonnes réponses : ${percentage.toFixed(2)}%`;

        // Affiche la section des réponses correctes après soumission du quiz
        const quizAnswers = document.getElementById("quiz-answers");
        quizAnswers.style.display = "block";
    });
});
