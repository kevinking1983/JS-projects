const quizData = [
    {
        question: "Which language runs in a web browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: 3
    },
    {
        question: "What does CSS stand for?",
        options: ["Central Style Sheets", "Cascading Style Sheets", "Colorful Style System", "Creative Style Structure"],
        answer: 1
    },
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "Hyper Tech Multi Language", "HighText Machine Language", "None"],
        answer: 0
    },
    {
        question: "Which year was JavaScript created?",
        options: ["1993", "1995", "1999", "2001"],
        answer: 1
    }
];

let index = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreEl = document.getElementById("score");

document.getElementById("total").innerText = quizData.length;

loadQuestion();

function loadQuestion() {
    const q = quizData[index];
    questionEl.innerText = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = opt;
        div.onclick = () => selectOption(i);
        optionsEl.appendChild(div);
    });
}

function selectOption(selected) {
    const correct = quizData[index].answer;

    const optionButtons = document.querySelectorAll(".option");
    optionButtons.forEach((btn, i) => {
        btn.onclick = null;  
        if (i === correct) btn.classList.add("correct");
        else if (i === selected) btn.classList.add("wrong");
    });

    if (selected === correct) score++;

    nextBtn.classList.remove("hidden");
}

nextBtn.onclick = () => {
    index++;
    document.getElementById("current").innerText = index + 1;
    nextBtn.classList.add("hidden");

    if (index < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");

    scoreEl.innerText = score;
    document.getElementById("total2").innerText = quizData.length;
}

document.getElementById("restart-btn").onclick = () => {
    index = 0;
    score = 0;
    document.getElementById("current").innerText = 1;
    quizBox.classList.remove("hidden");
    resultBox.classList.add("hidden");
    loadQuestion();
};
