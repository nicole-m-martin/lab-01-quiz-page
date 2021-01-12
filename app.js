import { countsAsAYes } from '../utils.js';

const quizBtn = document.getElementById('startQuiz');
const resultsDiv = document.getElementById('answer');


quizBtn.addEventListener('click', () => {
    alert('Welcome To The Tiger Quiz!');

    const conformation = confirm('Are You Ready?');

    if (confirm) {
        if (conformation === false) {
            return;
        }
    }

    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last Name?');
    const firstAns = prompt('Do tiger cubs stay with their mothers for two years, before going on their own?');
    const secondAns = prompt('Are the largest population of tigers in Cambodia?');
    const thirdAns = prompt('Are there five color variants of tigers?');
    const fourthAns = prompt('Are tigers on the endangered species list?');

    let correctAnswers = 0;
    
    if (countsAsAYes(firstAns)) correctAnswers++;
    if (!countsAsAYes(secondAns)) correctAnswers++;
    if (!countsAsAYes(thirdAns)) correctAnswers++;
    if (countsAsAYes(fourthAns)) correctAnswers++;

    const resultsText = `Congrats ${firstName} ${lastName}! You answered ${correctAnswers} right!`;

    resultsDiv.textContent = resultsText;

});


