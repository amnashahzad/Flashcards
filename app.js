const flashcardContainer = document.querySelector('.flashcard-container');
const flashcards = document.querySelectorAll('.flashcard');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const answerContainer = document.getElementById('answerContainer');

let currentQuestion = 0;

flashcards.forEach(flashcard => {
  const questionElements = flashcard.querySelectorAll('.question');
  const answerElements = flashcard.querySelectorAll('.answer');

  questionElements.forEach((question, index) => {
    question.addEventListener('click', () => {
      alert(answerElements[index].textContent);
    });
  });
});

showAnswerBtn.addEventListener('click', () => {
  const answerElements = document.querySelectorAll('.answer');

  answerContainer.innerHTML = '';

  answerElements.forEach(answer => {
    const p = document.createElement('p');
    p.textContent = answer.textContent;
    answerContainer.appendChild(p);
  });
});
