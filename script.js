// =====================================
// CLASS QUIZ - 3 ROUNDS
// =====================================


// =====================================
// GOOGLE APPS SCRIPT URL
// =====================================

// After creating Google Apps Script,
// paste your Web App URL here.

const GOOGLE_SCRIPT_URL =
    "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";


// =====================================
// QUESTIONS
// =====================================

const quizData = [

    // ================================
    // ROUND 1
    // ================================

    {

        name: "Round 1 - Easy",

        marks: 1,

        questions: [

            {
                question:
                    "What does HTML stand for?",

                answers: [
                    "Hyper Text Markup Language",
                    "High Text Machine Language",
                    "Hyperlinks Text Mark Language",
                    "Home Tool Markup Language"
                ],

                correct: 0
            },


            {
                question:
                    "Which planet is known as the Red Planet?",

                answers: [
                    "Earth",
                    "Mars",
                    "Jupiter",
                    "Venus"
                ],

                correct: 1
            },


            {
                question:
                    "How many days are there in a week?",

                answers: [
                    "5",
                    "6",
                    "7",
                    "8"
                ],

                correct: 2
            },


            {
                question:
                    "Which device is used to type text?",

                answers: [
                    "Monitor",
                    "Keyboard",
                    "Speaker",
                    "Printer"
                ],

                correct: 1
            },


            {
                question:
                    "What is 10 + 5?",

                answers: [
                    "10",
                    "15",
                    "20",
                    "25"
                ],

                correct: 1
            }

        ]

    },


    // ================================
    // ROUND 2
    // ================================

    {

        name: "Round 2 - Medium",

        marks: 2,

        questions: [

            {
                question:
                    "Which data structure follows FIFO?",

                answers: [
                    "Stack",
                    "Queue",
                    "Tree",
                    "Graph"
                ],

                correct: 1
            },


            {
                question:
                    "Which language is used for webpage styling?",

                answers: [
                    "HTML",
                    "CSS",
                    "Python",
                    "SQL"
                ],

                correct: 1
            },


            {
                question:
                    "What does CPU stand for?",

                answers: [
                    "Central Processing Unit",
                    "Computer Processing Unit",
                    "Central Program Unit",
                    "Computer Program Utility"
                ],

                correct: 0
            },


            {
                question:
                    "Which SQL command retrieves data?",

                answers: [
                    "INSERT",
                    "UPDATE",
                    "SELECT",
                    "DELETE"
                ],

                correct: 2
            },


            {
                question:
                    "Which protocol is used for websites?",

                answers: [
                    "HTTP",
                    "FTP",
                    "SMTP",
                    "SSH"
                ],

                correct: 0
            }

        ]

    },


    // ================================
    // ROUND 3
    // ================================

    {

        name: "Round 3 - Hard",

        marks: 3,

        questions: [

            {
                question:
                    "What is the time complexity of binary search?",

                answers: [
                    "O(n)",
                    "O(n²)",
                    "O(log n)",
                    "O(n log n)"
                ],

                correct: 2
            },


            {
                question:
                    "Which algorithm finds shortest paths in a graph with non-negative edge weights?",

                answers: [
                    "Bubble Sort",
                    "Dijkstra's Algorithm",
                    "Binary Search",
                    "Linear Search"
                ],

                correct: 1
            },


            {
                question:
                    "Which normal form removes partial dependency?",

                answers: [
                    "1NF",
                    "2NF",
                    "3NF",
                    "BCNF"
                ],

                correct: 1
            },


            {
                question:
                    "Which learning method uses labelled data?",

                answers: [
                    "Supervised Learning",
                    "Unsupervised Learning",
                    "Reinforcement Learning",
                    "Random Learning"
                ],

                correct: 0
            },


            {
                question:
                    "Which data structure is commonly used for recursion?",

                answers: [
                    "Queue",
                    "Stack",
                    "Heap",
                    "Graph"
                ],

                correct: 1
            }

        ]

    }

];


// =====================================
// VARIABLES
// =====================================

let currentRound = 0;

let currentQuestion = 0;

let roundScore = 0;

let totalScore = 0;

let roundScores = [0, 0, 0];

let timeLeft = 15;

let timer;

let answered = false;

let studentName = "";

let registerNumber = "";


// =====================================
// ELEMENTS
// =====================================

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const roundResultScreen =
    document.getElementById(
        "roundResultScreen"
    );

const finalScreen =
    document.getElementById(
        "finalScreen"
    );

const question =
    document.getElementById("question");

const answers =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");


// =====================================
// START QUIZ
// =====================================

function startQuiz() {

    studentName =
        document.getElementById(
            "studentName"
        ).value.trim();


    registerNumber =
        document.getElementById(
            "registerNumber"
        ).value.trim();


    if (studentName === "") {

        alert("Please enter your name.");

        return;
    }


    if (registerNumber === "") {

        alert(
            "Please enter your register number."
        );

        return;
    }


    currentRound = 0;

    currentQuestion = 0;

    roundScore = 0;

    totalScore = 0;

    roundScores = [0, 0, 0];


    homeScreen.classList.add(
        "hidden"
    );

    quizScreen.classList.remove(
        "hidden"
    );


    loadQuestion();
}


// =====================================
// LOAD QUESTION
// =====================================

function loadQuestion() {

    clearInterval(timer);

    answered = false;

    nextButton.disabled = true;


    const round =
        quizData[currentRound];


    const q =
        round.questions[
            currentQuestion
        ];


    document.getElementById(
        "roundTitle"
    ).innerText = round.name;


    document.getElementById(
        "questionNumber"
    ).innerText =
        `Question ${
            currentQuestion + 1
        } of ${
            round.questions.length
        }`;


    question.innerText =
        q.question;


    answers.innerHTML = "";


    const progress =
        (currentQuestion /
            round.questions.length) *
        100;


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";


    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.innerText =
                answer;


            button.classList.add(
                "answer"
            );


            button.onclick =
                function () {

                    selectAnswer(
                        button,
                        index
                    );

                };


            answers.appendChild(
                button
            );

        }
    );


    startTimer();
}


// =====================================
// TIMER
// =====================================

function startTimer() {

    timeLeft = 15;


    document.getElementById(
        "timer"
    ).innerText =
        "Time: " + timeLeft;


    timer = setInterval(
        function () {

            timeLeft--;


            document.getElementById(
                "timer"
            ).innerText =
                "Time: " +
                timeLeft;


            if (timeLeft <= 0) {

                clearInterval(timer);

                timeUp();

            }

        },
        1000
    );
}


// =====================================
// SELECT ANSWER
// =====================================

function selectAnswer(
    button,
    selectedIndex
) {

    if (answered) {

        return;

    }


    answered = true;

    clearInterval(timer);


    const round =
        quizData[currentRound];


    const q =
        round.questions[
            currentQuestion
        ];


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    allButtons.forEach(
        btn => {

            btn.disabled = true;

        }
    );


    if (
        selectedIndex ===
        q.correct
    ) {

        button.classList.add(
            "correct"
        );


        roundScore +=
            round.marks;

    } else {

        button.classList.add(
            "wrong"
        );


        allButtons[
            q.correct
        ].classList.add(
            "correct"
        );

    }


    nextButton.disabled = false;
}


// =====================================
// TIME UP
// =====================================

function timeUp() {

    if (answered) {

        return;

    }


    answered = true;


    const round =
        quizData[currentRound];


    const q =
        round.questions[
            currentQuestion
        ];


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    allButtons.forEach(
        btn => {

            btn.disabled = true;

        }
    );


    allButtons[
        q.correct
    ].classList.add(
        "correct"
    );


    nextButton.disabled = false;
}


// =====================================
// NEXT QUESTION
// =====================================

function nextQuestion() {

    clearInterval(timer);


    currentQuestion++;


    const round =
        quizData[currentRound];


    if (
        currentQuestion <
        round.questions.length
    ) {

        loadQuestion();

    } else {

        finishRound();

    }
}


// =====================================
// FINISH ROUND
// =====================================

function finishRound() {

    clearInterval(timer);


    roundScores[
        currentRound
    ] = roundScore;


    totalScore += roundScore;


    quizScreen.classList.add(
        "hidden"
    );


    roundResultScreen.classList.remove(
        "hidden"
    );


    document.getElementById(
        "roundResultTitle"
    ).innerText =
        quizData[
            currentRound
        ].name;


    document.getElementById(
        "roundScore"
    ).innerText =
        "Your score: " +
        roundScore +
        " marks";
}


// =====================================
// CONTINUE
// =====================================

function continueRound() {

    currentRound++;

    currentQuestion = 0;

    roundScore = 0;


    roundResultScreen.classList.add(
        "hidden"
    );


    if (
        currentRound >=
        quizData.length
    ) {

        showFinalResult();

    } else {

        quizScreen.classList.remove(
            "hidden"
        );

        loadQuestion();

    }
}


// =====================================
// FINAL RESULT
// =====================================

function showFinalResult() {

    finalScreen.classList.remove(
        "hidden"
    );


    document.getElementById(
        "studentResultName"
    ).innerText =
        studentName +
        " (" +
        registerNumber +
        ")";


    document.getElementById(
        "score1"
    ).innerText =
        roundScores[0] +
        " / 5";


    document.getElementById(
        "score2"
    ).innerText =
        roundScores[1] +
        " / 10";


    document.getElementById(
        "score3"
    ).innerText =
        roundScores[2] +
        " / 15";


    document.getElementById(
        "totalScore"
    ).innerText =
        totalScore +
        " / 30";


    const percentage =
        (totalScore / 30) * 100;


    document.getElementById(
        "percentage"
    ).innerText =
        percentage.toFixed(1) +
        "%";


    if (percentage >= 80) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "🌟 Excellent!";

    } else if (percentage >= 60) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "👏 Great Job!";

    } else if (percentage >= 40) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "👍 Good Attempt!";

    } else {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "📚 Keep Learning!";

    }


    // SEND RESULT ONLINE

    saveResult();
}


// =====================================
// SAVE RESULT TO GOOGLE SHEET
// =====================================

function saveResult() {

    if (
        GOOGLE_SCRIPT_URL ===
        "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE"
    ) {

        console.log(
            "Google Script URL not added."
        );

        return;
    }


    const data = {

        name: studentName,

        registerNumber:
            registerNumber,

        round1:
            roundScores[0],

        round2:
            roundScores[1],

        round3:
            roundScores[2],

        total:
            totalScore,

        percentage:
            (
                (totalScore / 30) *
                100
            ).toFixed(1)

    };


    fetch(
        GOOGLE_SCRIPT_URL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {
                "Content-Type":
                    "text/plain"
            },

            body:
                JSON.stringify(data)

        }
    )
    .then(
        () => {

            console.log(
                "Result submitted."
            );

        }
    )
    .catch(
        error => {

            console.log(
                "Submission error:",
                error
            );

        }
    );
}