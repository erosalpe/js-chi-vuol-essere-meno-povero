const questionContainer = document.getElementById("questions-container");

const question = document.getElementById("question");

const answersContainer = document.getElementById("answers-container");

const scoreBoard = document.getElementById("stats-container");

const subject = document.getElementById("subject");

let questions = [
    {
        id: 0,
        question: "Who was the first President of the United States?",
        answers: [
            { answer: "Thomas Jefferson", correct: false },
            { answer: "George Washington", correct: true },
            { answer: "John Adams", correct: false },
            { answer: "James Madison", correct: false }
        ],
        difficulty: 1,
        subject: "history"
    },
    {
        id: 1,
        question: "What year did World War II end?",
        answers: [
            { answer: "1944", correct: false },
            { answer: "1945", correct: true },
            { answer: "1943", correct: false },
            { answer: "1942", correct: false }
        ],
        difficulty: 2,
        subject: "history"
    },
    {
        id: 2,
        question: "What is the chemical symbol for water?",
        answers: [
            { answer: "H2O", correct: true },
            { answer: "O2", correct: false },
            { answer: "CO2", correct: false },
            { answer: "H2", correct: false }
        ],
        difficulty: 1,
        subject: "science"
    },
    {
        id: 3,
        question: "What planet is known as the Red Planet?",
        answers: [
            { answer: "Mars", correct: true },
            { answer: "Jupiter", correct: false },
            { answer: "Venus", correct: false },
            { answer: "Saturn", correct: false }
        ],
        difficulty: 1,
        subject: "science"
    },
    {
        id: 4,
        question: "Which famous artist painted the Mona Lisa?",
        answers: [
            { answer: "Vincent van Gogh", correct: false },
            { answer: "Leonardo da Vinci", correct: true },
            { answer: "Pablo Picasso", correct: false },
            { answer: "Claude Monet", correct: false }
        ],
        difficulty: 1,
        subject: "art"
    },
    {
        id: 5,
        question: "In which year was the first iPhone released?",
        answers: [
            { answer: "2007", correct: true },
            { answer: "2006", correct: false },
            { answer: "2008", correct: false },
            { answer: "2009", correct: false }
        ],
        difficulty: 2,
        subject: "technology"
    },
    {
        id: 6,
        question: "What is the capital city of Japan?",
        answers: [
            { answer: "Tokyo", correct: true },
            { answer: "Kyoto", correct: false },
            { answer: "Osaka", correct: false },
            { answer: "Nagoya", correct: false }
        ],
        difficulty: 1,
        subject: "geography"
    },
    {
        id: 7,
        question: "What is the largest ocean on Earth?",
        answers: [
            { answer: "Atlantic Ocean", correct: false },
            { answer: "Pacific Ocean", correct: true },
            { answer: "Indian Ocean", correct: false },
            { answer: "Arctic Ocean", correct: false }
        ],
        difficulty: 1,
        subject: "geography"
    },
    {
        id: 8,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            { answer: "F. Scott Fitzgerald", correct: false },
            { answer: "Ernest Hemingway", correct: false },
            { answer: "Harper Lee", correct: true },
            { answer: "Mark Twain", correct: false }
        ],
        difficulty: 2,
        subject: "literature"
    },
    {
        id: 9,
        question: "What is the square root of 64?",
        answers: [
            { answer: "6", correct: false },
            { answer: "7", correct: false },
            { answer: "8", correct: true },
            { answer: "9", correct: false }
        ],
        difficulty: 1,
        subject: "mathematics"
    },
    {
        id: 10,
        question: "What is the largest planet in our solar system?",
        answers: [
            { answer: "Earth", correct: false },
            { answer: "Jupiter", correct: true },
            { answer: "Saturn", correct: false },
            { answer: "Neptune", correct: false }
        ],
        difficulty: 1,
        subject: "science"
    },
    {
        id: 11,
        question: "Who wrote '1984'?",
        answers: [
            { answer: "George Orwell", correct: true },
            { answer: "Aldous Huxley", correct: false },
            { answer: "Ray Bradbury", correct: false },
            { answer: "Philip K. Dick", correct: false }
        ],
        difficulty: 2,
        subject: "literature"
    },
    {
        id: 12,
        question: "What is the capital of Australia?",
        answers: [
            { answer: "Sydney", correct: false },
            { answer: "Melbourne", correct: false },
            { answer: "Canberra", correct: true },
            { answer: "Brisbane", correct: false }
        ],
        difficulty: 1,
        subject: "geography"
    },
    {
        id: 13,
        question: "Who painted the ceiling of the Sistine Chapel?",
        answers: [
            { answer: "Michelangelo", correct: true },
            { answer: "Leonardo da Vinci", correct: false },
            { answer: "Raphael", correct: false },
            { answer: "Donatello", correct: false }
        ],
        difficulty: 1,
        subject: "art"
    },
    {
        id: 14,
        question: "In what year did the Titanic sink?",
        answers: [
            { answer: "1911", correct: false },
            { answer: "1912", correct: true },
            { answer: "1913", correct: false },
            { answer: "1914", correct: false }
        ],
        difficulty: 2,
        subject: "history"
    },
    {
        id: 15,
        question: "What is the chemical symbol for gold?",
        answers: [
            { answer: "Au", correct: true },
            { answer: "Ag", correct: false },
            { answer: "Pb", correct: false },
            { answer: "Pt", correct: false }
        ],
        difficulty: 1,
        subject: "science"
    },
    {
        id: 16,
        question: "Who developed the theory of relativity?",
        answers: [
            { answer: "Isaac Newton", correct: false },
            { answer: "Albert Einstein", correct: true },
            { answer: "Niels Bohr", correct: false },
            { answer: "Galileo Galilei", correct: false }
        ],
        difficulty: 3,
        subject: "science"
    },
    {
        id: 17,
        question: "What is the smallest prime number?",
        answers: [
            { answer: "2", correct: true },
            { answer: "1", correct: false },
            { answer: "3", correct: false },
            { answer: "5", correct: false }
        ],
        difficulty: 1,
        subject: "mathematics"
    },
    {
        id: 18,
        question: "Which country is home to the kangaroo?",
        answers: [
            { answer: "Australia", correct: true },
            { answer: "New Zealand", correct: false },
            { answer: "South Africa", correct: false },
            { answer: "India", correct: false }
        ],
        difficulty: 1,
        subject: "geography"
    },
    {
        id: 19,
        question: "Who is the author of 'Pride and Prejudice'?",
        answers: [
            { answer: "Jane Austen", correct: true },
            { answer: "Charlotte Brontë", correct: false },
            { answer: "Mary Shelley", correct: false },
            { answer: "Emily Brontë", correct: false }
        ],
        difficulty: 2,
        subject: "literature"
    }
];

let done = [];
let chosen = 0;
let score = 0;

function startGame(){
    console.log(questions.length);
    console.log(done.length);
    //reset html elements
    question.innerHTML = '';
    answersContainer.innerHTML = '';
    subject.innerHTML = '';

    //function that choose a random question object
    questionChoice();

    //writing question inside <p></p> tag
    question.innerHTML = questions[chosen].question;

    //writing the subject inside the <span></span> tag
    subject.innerHTML = questions[chosen].subject;

    //populating the answers container
    questions[chosen].answers.forEach((answer) => {
        let span = document.createElement('span');
        span.className = 'answer';
        span.textContent = answer.answer;

        //adding event listener to check if the answer is correct
        span.addEventListener('click', ()=>{
            if(answer.correct){
                score += 1000 * questions[chosen].difficulty
                scoreBoard.innerHTML = `Punteggio: ${score}`;
                if(done.length == questions.length - 1){
                    question.innerHTML = 'ADESSO SEI MENO POVERO';
                    subject.innerHTML = '';
                    answersContainer.innerHTML = `Punteggio totale: ${score}`;
    
                    scoreBoard.innerHTML = '<button id="reload-btn" onClick="window.location.reload();">Rigioca!</button>';  
                } else {
                    startGame();
                }
            } else {
                question.innerHTML = 'Hai perso';
                subject.innerHTML = '';
                answersContainer.innerHTML = `Punteggio totale: ${score}`;

                scoreBoard.innerHTML = '<button id="reload-btn" onClick="window.location.reload();">Rigioca!</button>';
            }
        });
        answersContainer.appendChild(span);
    });
}

//randomly select a question object 
function questionChoice(){
    console.log(done);
    do{
        chosen =  Math.floor(Math.random() * (questions.length - 1)) + 0;
    }while(done.includes(chosen));
    done.push(chosen);
}

startGame();