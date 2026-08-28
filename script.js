// =====================================
// CLASS QUIZ - 3 ROUNDS
// =====================================


// =====================================
// GOOGLE APPS SCRIPT URL
// =====================================

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz2YA_hFEKakHJD3efaclcWyEh5jkkPFwiF91t6ytOZdUYudwjG7E227tv1eNVyOdq2/exec";


// =====================================
// QUESTIONS
// =====================================

const quizData = [

    // =================================
    // ROUND 1
    // 10 QUESTIONS × 1 MARK
    // =================================

    {
        name: "Round 1 - Easy + Moderate",
        marks: 1,

        questions: [

            {
                question:
                    "What is the main purpose of a Privacy Impact Assessment (PIA)?",

                answers: [
                    "To improve the design of an application",
                    "To increase data storage capacity",
                    "To identify and reduce privacy risks",
                    "To increase the number of users of an application"
                ],

                correct: 2
            },

            {
                question:
                    "Which of the following is an example of personal data?",

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
                    "Store the user's location permanently",
                    "Share the location with advertising companies automatically",
                    "Collect only the location information necessary for the service",
                    "Continuously track the user even when the app is closed"
                ],

                correct: 2
            },

            {
                question:
                    "What does user consent mean in a privacy context?",

                answers: [
                    "Getting permission after clearly explaining what data is collected and why",
                    "Collecting information because the application is free",
                    "Allowing employees to decide what information to collect",
                    "Collecting information without informing the user"
                ],

                correct: 0
            },

            {
                question:
                    "Who should normally have access to sensitive personal information?",

                answers: [
                    "Any third-party company that requests it",
                    "All registered users",
                    "Anyone working in the organization",
                    "Only people who are authorized and need the information for their work"
                ],

                correct: 3
            },

            {
                question:
                    "Which of the following is a good privacy protection measure?",

                answers: [
                    "Publishing student information online",
                    "Encrypting sensitive data",
                    "Giving access to all employees",
                    "Sharing passwords with everyone"
                ],

                correct: 1
            },

            {
                question:
                    "What is data minimization?",

                answers: [
                    "Sharing information with fewer organizations",
                    "Deleting all information immediately",
                    "Collecting only the information necessary for a specific purpose",
                    "Collecting all available information for future use"
                ],

                correct: 2
            },

            {
                question:
                    "A bank employee can access the complete financial records of customers, although their job only requires access to basic account information. What is the best privacy practice?",

                answers: [
                    "Give the employee access but monitor them continuously",
                    "Keep the access because the employee is trusted",
                    "Allow access but ask the employee not to view unnecessary information",
                    "Restrict the employee's access to the information required for their role"
                ],

                correct: 3
            },

            {
                question:
                    "A company has finished using customer information for the purpose for which it was collected. What should it generally do?",

                answers: [
                    "Keep the information forever in case it becomes useful",
                    "Share it with other companies",
                    "Securely delete or dispose of it when it is no longer needed",
                    "Sell the information before deleting it"
                ],

                correct: 2
            },

            {
                question:
                    "AI predicts that a patient has a high risk of cancer, but the doctor disagrees. What should be done?",

                answers: [
                    "Tell the patient that AI is always more accurate",
                    "Ignore the AI completely",
                    "Review the AI result with further medical tests and expert judgment",
                    "Follow the AI result immediately"
                ],

                correct: 2
            }

        ]
    },


    // =================================
    // ROUND 2
    // 5 QUESTIONS × 2 MARKS
    // =================================

    {
        name: "Round 2 - Medium",
        marks: 2,

        questions: [

            {
                question:
                    "🏥 Hospital App Scenario: A hospital app collects a patient's medical history to provide treatment. Later, the hospital wants to use the same information to send patients advertisements for medicines. What should the hospital do?",

                answers: [
                    "Use the data because the patient already provided it to the hospital",
                    "Use the data because the advertisements may benefit the patient",
                    "Check whether the new use is permitted and obtain appropriate consent where required",
                    "Use the data but send advertisements only once a month"
                ],

                correct: 2
            },

            {
                question:
                    "🛒 Online Shopping Scenario: An online shopping app asks users for their location to provide nearby delivery options. The company later decides to continuously track users' locations to understand their daily movements. What is the most appropriate action?",

                answers: [
                    "Continue tracking because users agreed to location access",
                    "Track users only when they are actively using the shopping service",
                    "Collect the location continuously but delete it after one year",
                    "Continue tracking because it helps the company improve its services"
                ],

                correct: 1
            },

            {
                question:
                    "🏦 Banking Scenario: A bank employee can access customers' account details even though their job does not require access to financial information. The employee has never misused the data. What should the bank do?",

                answers: [
                    "Keep the access because the employee is trustworthy",
                    "Keep the access but ask the employee not to view unnecessary information",
                    "Restrict access according to the employee's actual job responsibilities",
                    "Monitor the employee's activity while allowing the existing access"
                ],

                correct: 2
            },

            {
                question:
                    "🏨 Hotel Scenario: A hotel collects guests' phone numbers for booking confirmation. Later, the hotel wants to share the numbers with a partner company that offers travel packages. What should the hotel consider first?",

                answers: [
                    "Whether sharing the information is consistent with the original purpose and properly authorized",
                    "Whether the partner company promises to protect the information",
                    "Whether the travel packages are useful to the hotel guests",
                    "Whether the hotel can delete the numbers after sharing them"
                ],

                correct: 0
            },

            {
                question:
                    "🏃 Fitness App Scenario: A fitness app collects information about users' exercise routines and heart rate. The company discovers that this information could be valuable to insurance companies. What is the most ethical approach?",

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


    // =================================
    // ROUND 3
    // 5 QUESTIONS × 3 MARKS
    // =================================

    {
        name: "Round 3 - Hard",
        marks: 3,

        questions: [

            {
                question:
                    "🤖 AI Recruitment Scenario: A company uses an AI system to screen job applications. The system analyzes applicants' resumes and past hiring data. An HR manager discovers that the system consistently gives lower scores to applicants from a particular group, even though the company cannot identify exactly why. What should the company do?",

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
                    "📱 Health App Scenario: A health app collects users' sleep patterns, heart rate, and exercise information. A marketing team proposes using this information to identify users who may be interested in health-related products. The privacy policy mentions that data may be used to 'improve user experience.' What should the company do?",

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
                    "🚨 Security vs Privacy Scenario: A smart-home company discovers that one of its devices has been hacked. Engineers suggest temporarily collecting detailed user activity logs to identify the attack. However, these logs contain sensitive information about users' daily routines. What is the best ethical approach?",

                answers: [
                    "Collect all available logs because security should always take priority",
                    "Avoid collecting logs because user privacy must never be compromised",
                    "Collect the logs permanently so they can be used if another attack occurs",
                    "Collect only the information necessary for investigating the incident, protect it strictly, and delete it when no longer required"
                ],

                correct: 3
            },

            {
                question:
                    "💳 Financial Data Scenario — Tricky: A financial app discovers that analyzing customers' transaction patterns could help detect fraud. However, the same analysis could also reveal highly sensitive information about customers' personal lives. What should the company prioritize when designing the system?",

                answers: [
                    "Allow employees to access the complete transaction history so suspicious activity can be investigated quickly",
                    "Stop analyzing transaction data because privacy risks exist",
                    "Use the minimum information necessary for fraud detection while applying strong safeguards and clearly defining its use",
                    "Collect as much transaction information as possible because fraud prevention is important"
                ],

                correct: 2
            },

            {
                question:
                    "🧑‍💻 Employee Monitoring Scenario — Most Tricky: A company introduces software that records employees' computer activity to improve cybersecurity. The software can also capture screenshots and track activity outside working hours because employees sometimes use company laptops at home. What is the most ethically appropriate decision?",

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

let timer = null;

let answered = false;

let studentName = "";

let registerNumber = "";


// Maximum score = 10 + 10 + 15 = 35

const MAX_SCORE = 35;


// =====================================
// ELEMENTS
// =====================================

const homeScreen =
    document.getElementById("homeScreen");

const quizScreen =
    document.getElementById("quizScreen");

const roundResultScreen =
    document.getElementById("roundResultScreen");

const finalScreen =
    document.getElementById("finalScreen");

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
        document
            .getElementById("studentName")
            .value
            .trim();

    registerNumber =
        document
            .getElementById("registerNumber")
            .value
            .trim();


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


    // Reset everything

    currentRound = 0;

    currentQuestion = 0;

    roundScore = 0;

    totalScore = 0;

    roundScores = [0, 0, 0];


    homeScreen.classList.add("hidden");

    finalScreen.classList.add("hidden");

    roundResultScreen.classList.add("hidden");

    quizScreen.classList.remove("hidden");


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
        round.questions[currentQuestion];


    document.getElementById(
        "roundTitle"
    ).innerText = round.name;


    document.getElementById(
        "questionNumber"
    ).innerText =
        `Question ${currentQuestion + 1} of ${round.questions.length}`;


    question.innerText =
        q.question;


    answers.innerHTML = "";


    // Progress

    const progress =
        ((currentQuestion + 1) /
            round.questions.length) *
        100;


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";


    // Create answer buttons

    q.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


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

    clearInterval(timer);

    timeLeft = 15;


    document.getElementById(
        "timer"
    ).innerText =
        "Time: " + timeLeft;


    timer =
        setInterval(
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
        round.questions[currentQuestion];


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

    }

    else {

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
        round.questions[currentQuestion];


    const allButtons =
        document.querySelectorAll(
            ".answer"
        );


    allButtons.forEach(
        btn => {

            btn.disabled = true;

        }
    );


    // Show correct answer

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

    if (!answered) {
        return;
    }


    clearInterval(timer);


    currentQuestion++;


    const round =
        quizData[currentRound];


    if (
        currentQuestion <
        round.questions.length
    ) {

        loadQuestion();

    }

    else {

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


    totalScore +=
        roundScore;


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
// CONTINUE TO NEXT ROUND
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

    }

    else {

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

    clearInterval(timer);


    quizScreen.classList.add(
        "hidden"
    );


    roundResultScreen.classList.add(
        "hidden"
    );


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


    // Round scores

    document.getElementById(
        "score1"
    ).innerText =
        roundScores[0] +
        " / 10";


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


    // Total

    document.getElementById(
        "totalScore"
    ).innerText =
        totalScore +
        " / " +
        MAX_SCORE;


    // Percentage

    const percentage =
        (totalScore / MAX_SCORE) *
        100;


    document.getElementById(
        "percentage"
    ).innerText =
        percentage.toFixed(1) +
        "%";


    // Message

    if (percentage >= 80) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "🌟 Excellent!";

    }

    else if (percentage >= 60) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "👏 Great Job!";

    }

    else if (percentage >= 40) {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "👍 Good Attempt!";

    }

    else {

        document.getElementById(
            "finalMessage"
        ).innerText =
            "📚 Keep Learning!";

    }


    // Save result

    saveResult();
}


// =====================================
// SAVE RESULT TO GOOGLE SHEET
// =====================================

function saveResult() {

    // Make sure URL exists

    if (
        !GOOGLE_SCRIPT_URL ||
        !GOOGLE_SCRIPT_URL.includes(
            "https://script.google.com/macros/s/AKfycbz2YA_hFEKakHJD3efaclcWyEh5jkkPFwiF91t6ytOZdUYudwjG7E227tv1eNVyOdq2/exec"
        )
    ) {

        console.error(
            "Google Apps Script URL is missing."
        );

        return;
    }


    const percentage =
        (
            (totalScore / MAX_SCORE) *
            100
        ).toFixed(1);


    const data = {

        name:
            studentName,

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
            percentage

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
                "Result submitted to Google Sheet."
            );

        }
    )
    .catch(
        error => {

            console.error(
                "Submission error:",
                error
            );

        }
    );
}


// =====================================
// SHOW LEADERBOARD
// =====================================

function showLeaderboard() {

    finalScreen.classList.add(
        "hidden"
    );


    const leaderboardScreen =
        document.getElementById(
            "leaderboardScreen"
        );


    leaderboardScreen.classList.remove(
        "hidden"
    );


    loadLeaderboard();
}


// =====================================
// LOAD LEADERBOARD
// =====================================

function loadLeaderboard() {

    const leaderboard =
        document.getElementById(
            "leaderboard"
        );


    leaderboard.innerHTML =
        `
        <p style="text-align:center;">
            ⏳ Loading leaderboard...
        </p>
        `;


    // Unique callback name

    const callbackName =
        "quizLeaderboard_" +
        Date.now();


    // Create callback

    window[callbackName] =
        function (data) {

            try {

                displayLeaderboard(data);

            }

            catch (error) {

                console.error(
                    "Leaderboard error:",
                    error
                );


                leaderboard.innerHTML =
                    `
                    <p style="text-align:center;">
                        ❌ Unable to display leaderboard.
                    </p>
                    `;

            }


            // Clean up

            delete window[
                callbackName
            ];


            const oldScript =
                document.getElementById(
                    callbackName
                );


            if (oldScript) {
                oldScript.remove();
            }

        };


    // Create script element

    const script =
        document.createElement(
            "script"
        );


    script.id =
        callbackName;


    script.src =
        GOOGLE_SCRIPT_URL +
        "?callback=" +
        callbackName;


    script.onerror =
        function () {

            leaderboard.innerHTML =
                `
                <p style="text-align:center;">
                    ❌ Unable to load leaderboard.
                </p>

                <p style="text-align:center;font-size:13px;color:#777;">
                    Please check your Google Apps Script deployment.
                </p>
                `;


            delete window[
                callbackName
            ];


            script.remove();

        };


    document.body.appendChild(
        script
    );
}


// =====================================
// DISPLAY LEADERBOARD
// =====================================

function displayLeaderboard(
    data
) {

    const leaderboard =
        document.getElementById(
            "leaderboard"
        );


    if (
        !Array.isArray(data) ||
        data.length === 0
    ) {

        leaderboard.innerHTML =
            `
            <div style="text-align:center;padding:25px;">
                <h3>📊 No Results Yet</h3>

                <p>
                    Complete the quiz to appear on the leaderboard.
                </p>
            </div>
            `;

        return;
    }


    // Sort highest score first

    data.sort(
        function (a, b) {

            return (
                Number(b.total) -
                Number(a.total)
            );

        }
    );


    let html = "";


    data.forEach(
        function (student, index) {

            const rank =
                index + 1;


            let rankDisplay =
                rank;


            let className =
                "leader-row";


            // Top 3

            if (rank === 1) {

                rankDisplay = "🥇";

                className +=
                    " top-one";

            }

            else if (rank === 2) {

                rankDisplay = "🥈";

                className +=
                    " top-two";

            }

            else if (rank === 3) {

                rankDisplay = "🥉";

                className +=
                    " top-three";

            }


            html +=
                `
                <div class="${className}">

                    <div class="rank">
                        ${rankDisplay}
                        ${rank > 3 ? rank : ""}
                    </div>

                    <div class="player-name">

                        ${escapeHTML(
                            student.name ||
                            "Unknown Student"
                        )}

                        <small>
                            Register No:
                            ${escapeHTML(
                                student.registerNumber ||
                                "-"
                            )}
                        </small>

                    </div>

                    <div class="player-score">

                        ${Number(
                            student.total || 0
                        )} / ${MAX_SCORE}

                    </div>

                </div>
                `;

        }
    );


    leaderboard.innerHTML =
        html;
}


// =====================================
// BACK TO RESULT
// =====================================

function backToResult() {

    document
        .getElementById(
            "leaderboardScreen"
        )
        .classList.add(
            "hidden"
        );


    finalScreen.classList.remove(
        "hidden"
    );
}


// =====================================
// SECURITY
// Prevent HTML injection in names
// =====================================

function escapeHTML(value) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}
