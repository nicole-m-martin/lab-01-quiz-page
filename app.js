// import functions and grab DOM elements


// initialize state
const quizBtn = document.getElementById('startQuiz');



// set event listeners to update state and DOM
quizBtn.addEventListener('click', () => {
    // console.log('It works!!');
    alert('Start the Quiz!!');

    const conformation = confirm('Are you ready?');

    if (confirm) {
        if (conformation === false) {
            return;
        }
    }

    const firstName = prompt('What is your first name?');
    console.log(firstName);
    const lastName = prompt('What is your last Name?');
    console.log(lastName);

    const firstAns = prompt('Do tiger cubs stay with their mothers for two years, before going on their own?');

    if (firstAns.charAt(0).toUpperCase() === 'Y') {
        console.log("yesssssss");
    } else {
        console.log('nopeee');
    }

    const secondAns = prompt('Are the largest population of tigers in Cambodia?');

    if (secondAns.charAt(0).toUpperCase() !== 'Y') {
        console.log("yesssssss");
    } else {
        console.log('nopeee');
    }

    const thirdAns = prompt('Are there five color variants of tigers?');
    
    if (thirdAns.charAt(0).toUpperCase() !== 'Y') {
        console.log("yesssssss");
    } else {
        console.log('nopeee');
    }

    const fourthAns = prompt('Are tigers on the endangered species list?');

    if (fourthAns.charAt(0).toUpperCase() === 'Y') {
        console.log("yesssssss");
    } else {
        console.log('nopeee');
    }



});
