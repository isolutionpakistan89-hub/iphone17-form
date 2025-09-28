const correctAnswer = 'A';  // India is the correct answer
let usedLifelines = {
    fiftyFifty: false,
    audiencePoll: false,
    doubleDip: false
};

function checkAnswer(selected) {
    if (selected === correctAnswer) {
        document.getElementById('result').innerHTML = "<p>Correct! You win!</p>";
    } else {
        document.getElementById('result').innerHTML = "<p>Wrong answer! You lost!</p>";
    }
}

function audiencePoll() {
    if (usedLifelines.audiencePoll) {
        alert("Audience Poll already used!");
        return;
    }

    usedLifelines.audiencePoll = true;
    alert("Audience Poll: 70% choose A (India), 10% choose B (Australia), 5% choose C (New Zealand), 15% choose D (England).");
}

function fiftyFifty() {
    if (usedLifelines.fiftyFifty) {
        alert("50-50 lifeline already used!");
        return;
    }

    usedLifelines.fiftyFifty = true;
    // Remove two wrong answers
    document.querySelectorAll('.option').forEach(option => {
        if (option.innerText !== "A. India" && option.innerText !== "B. Australia") {
            option.style.display = 'none';  // Hide wrong options
        }
    });
}

function doubleDip() {
    if (usedLifelines.doubleDip) {
        alert("Double Dip already used!");
        return;
    }

    usedLifelines.doubleDip = true;
    alert("Double Dip: You get two chances to answer the question!");
    // Add functionality for double dip here
}
