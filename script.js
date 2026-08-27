// =====================================
// CLASS QUIZ - 3 ROUNDS
// =====================================


// =====================================
// GOOGLE APPS SCRIPT URL
// =====================================

// After creating Google Apps Script,
// paste your Web App URL here.

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby4mIUBCOuslBJiL170QPXiPGe1w5aaTDDDOhxaFemvTCoTbF4pqtsNdHeBcdgmAALB/exec";


// =====================================
// QUESTIONS
// =====================================
const quizData = [

    // ================================
    // ROUND 1
    // ================================

    {

        name: "Round 1 - Easy + Moderate ",

        marks: 1,

        questions: [

            {
                question:
                    "What is the main purpose of a Privacy Impact Assessment (PIA)? ",

                answers: [
                    " To improve the design of an application ",
                    " To increase data storage capacity ",
                    "To identify and reduce privacy risks ",
                    "To increase the number of users of an application "
                ],

                correct: 2
            },


            {
                question:
                    " Which of the following is an example of personal data? ",

                answers: [
                    "General weather information",
                    "A person's photograph",
                    "Company logo",
                    "Public holiday list"
                ],

                correct: 1
            },


            {
                question:
                    "A shopping app asks for a user's location to find nearby stores. What is the most appropriate privacy practice?",

                answers: [
                    "Store the user's location permanently ",
                    "Share the location with advertising companies automatically",
                    "Collect only the location information necessary for the service",
                    "Continuously track the user even when the app is closed"
                ],

                answers: [
                    "Sell the information because it can help insurance companies assess customers",
                    "Share anonymized information without checking whether users were informed",
                    "Review the purpose, privacy implications, and applicable consent requirements before sharing",
                    "Share the information only with insurance companies that have strong security systems"
                ],

                correct: 2
            }

        ]

    },


    // ================================
    // ROUND 3
    // ================================

    {

        name: "Round 3 - Challenging Ethical & Privacy Decision-Making",

        marks: 3,

        questions: [

            {
                question:
                    "🤖 AI Recruitment Scenario : A company uses an AI system to screen job applications. The system analyzes applicants' resumes and past hiring data. An HR manager discovers that the system consistently gives lower scores to applicants from a particular group, even though the company cannot identify exactly why. What should the company do?",

                answers: [
                    "Investigate the possible bias, evaluate the system's impact, and correct or replace it before relying on its decisions",
                    "Continue using the system because it is based on historical company data",
                    "Remove the demographic information from the final report while continuing to use the existing model",
                    "Continue using it but manually review applicants with low scores"
                ],

                correct: 0
            },


            {
                question:
                    "📱 Health App Scenario : A health app collects users' sleep patterns, heart rate, and exercise information. A marketing team proposes using this information to identify users who may be interested in health-related products. The privacy policy mentions that data may be used to 'improve user experience.' What should the company do?",

                answers: [
                    "Use the information only for users who have been using the app for more than six months",
                    "Determine whether this new use is sufficiently covered by the original notice and obtain appropriate consent if necessary",
                    "Use the information because marketing can be considered part of improving user experience",
                    "Use the information after removing users' names"
                ],

                correct: 1
            },


            {
                question:
                    "🚨 Security vs Privacy Scenario : A smart-home company discovers that one of its devices has been hacked. Engineers suggest temporarily collecting detailed user activity logs to identify the attack. However, these logs contain sensitive information about users' daily routines. What is the best ethical approach?",

                answers: [
                    "Collect all available logs because security should always take priority ",
                    "Avoid collecting logs because user privacy must never be compromised",
                    "Collect the logs permanently so they can be used if another attack occurs",
                    "Collect only the information necessary for investigating the incident, protect it strictly, and delete it when no longer required"
                ],

                correct: 3
            },


            {
                question:
                    "💳 Financial Data Scenario : Tricky 🔥 A financial app discovers that analyzing customers' transaction patterns could help detect fraud. However, the same analysis could also reveal highly sensitive information about customers' personal lives. What should the company prioritize when designing the system?",

                answers: [
                    "Allow employees to access the complete transaction history so suspicious activity can be investigated quickly",
                    "Stop analyzing transaction data because privacy risks exist",
                    "Use the minimum information necessary for fraud detection while applying strong safeguards and clearly defining its use ",
                    "Collect as much transaction information as possible because fraud prevention is important "
                ],

                correct: 2
            },


            {
                question:
                    "🧑‍💻 Employee Monitoring Scenario : Most Tricky 🔥🔥 A company introduces software that records employees' computer activity to improve cybersecurity. The software can also capture screenshots and track activity outside working hours because employees sometimes use company laptops at home. What is the most ethically appropriate decision?",

                answers: [
                    "Continue monitoring outside working hours but delete the screenshots after 24 hours",
                    "Monitor everything because the laptop belongs to the company",
                    "Allow monitoring but inform employees that all activity may be recorded",
                    "Limit monitoring to legitimate work and security purposes, minimize unnecessary collection, and clearly inform employees about the monitoring"
                ],

                correct: 3
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
        "https://script.google.com/macros/s/AKfycby4mIUBCOuslBJiL170QPXiPGe1w5aaTDDDOhxaFemvTCoTbF4pqtsNdHeBcdgmAALB/exec"
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
