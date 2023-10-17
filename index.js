const questionsTemplate = [
    // right answer at index 0
    {
        question: "Was sagt ein Pyrotechniker nie zu seinem Hund?",
        options: [
            "Platz!",
            "Such!",
            "Sitz!"
        ]
    },

    {
        question: "What's your view on sea polution?",
        options: [
            "From my hotel room pretty good.",
            "We have to save the turtles!",
            "I like soup!",
            "When there's a small hint of diesel, the shrimps are just right!"
        ]
    },

    {
        question: "Dünne Wurst aus Wildfleisch:",
        options: [
            "Kabareh",
            "Bambinossi",
            "Erfolgreicher Landjäger"
        ]
    },

    {
        question: `„In unseren Restaurants erzielen wir Umsätze, das übersteigt deine Vorstellungen!“
        – Gastrobonze zu:`,
        options: [
            "Zirkusdirektor",
            "Lehrling",
            "Journalist"
        ]
    },

    {
        question: "Many developers who used JavaScript in the backend are now single. Why could that be?",
        options: [
            "Their S/O at the time preferred strong types.",
            `Their S/O wanted to read the book "What to expect when you're expecting.", but they don't believe in that.`
        ]
    },

    {
        question: "Was sagen Leute ohne Wegerecht?",
        options: [
            "Das ist ein Grund, aber kein Hindernis.",
            "Wir sind alle Kinder von Mutter Erde.",
            "Mach halt einen Zaun."
        ]
    },

    {
        question: "Warum schließen die Beleuchter nicht die Lampen an?",
        options: [
            "Sie haben keinen Bock.",
            "Sie freut's nicht.",
            "Es ist ja noch hell."
        ]
    },

    {
        question: "Wie verschickt ein Müller seine Rechnungen?",
        options: [
            "per Mehl",
            "telefonisch",
            "per Fax",
            "postalisch"
        ]
    },

    {
        question: "OK, a real question now: What does Java have that doesn't exist in C? Derive a city that you could recommend a C-dev to move to.",
        options: [
            "Naples",
            "Vienna",
            "New York",
            "Mountain View",
            "Seattle",
            "Santa Monica",
            "Palo Alto"
        ]
    },
];
let questions = [];

let currentQuestion;

// startGame();

function startGame() {
    currentQuestion = 0;
    questions = shuffleArray(questionsTemplate);
    render();
}

function render() {
    const questionEl = document.getElementById("question-el");
    if (currentQuestion >= questions.length) {
        questionEl.innerText = "You have won!"
        const answersEl = clearAnswers();
        const btn = document.createElement('button');
        btn.innerText = "Play again";
        btn.addEventListener('click', startGame);
        answersEl.appendChild(btn);
    } else {
        renderQuiz(questionEl);
    }
}

function clearAnswers() {
    const answersEl = document.getElementById("answers-el");
    answersEl.innerHTML = "";
    return answersEl;
}

function renderQuiz(questionEl) {
    questionEl.innerText = questions[currentQuestion].question;

    const answersEl = clearAnswers();

    const shuffledQuestions = shuffleArray(questions[currentQuestion].options.slice());
    for (let answer of shuffledQuestions) {
        const btn = document.createElement('button')
        btn.innerText = answer
        btn.addEventListener('click', evaluate)
        answersEl.appendChild(btn)
    }

    const fields = document.getElementsByClassName("progress-field");
    if (currentQuestion === 0) {
        for (let el of fields) {
            el.classList.remove("progress-field-current");
            el.classList.remove("progress-field-done");
        }
    } else {
        for (let i = 0; i < currentQuestion; i++) {
            fields[i].classList.remove("progress-field-current");
            fields[i].classList.add("progress-field-done");
        }
    }
    fields[currentQuestion].classList.add("progress-field-current");
}

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

function evaluate(e) {
//     check if answer is correct
    console.log(e.target.innerText)
    if (e.target.innerText === questions[currentQuestion].options[0]) {
        console.log("try: " + questions[currentQuestion].options[0])
        currentQuestion++;
    }
    render();
}