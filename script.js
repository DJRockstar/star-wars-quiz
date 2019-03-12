'use strict'

const quizQuesAndAnsArray = [
    {
    question: "In 'Episode I,' what did Yoda discover that Anakin possessed, that may lead him to the Dark Side?",
    options: ["Fear","Strenth","Trust","Passion"],
    answer: "Fear"
    },
    {
    question: "In 'Attack of the Clones', who says 'Oh, not good'?",
    options: ["Anakin Skywalker", "Luke Skywalker", "Obi Wan Kenobi", "R2-D2"],
    answer: "Obi Wan Kenobi"
    },
    {
    question: "In Which episode's battle did Darth Vader personally fly in?",
    options: ["Episode I", "Episode II", "Episode III", "Episode IV"],
    answer: "Episode IV"
    },
    {
    question: "In which movie did the famous Battle of Hoth take place?",
    options: ["Episode V", "Episode II", "Episode III", "Episode IV"],
    answer: "Episode V"
    },
    {
    question: "How many actors hold the distinction of being credited in all six movies?",
    options: [1, 2, 3, 4],
    answer: 2
    },
    {
    question: "Which planet is Princess Leia from?",
    options: ["Tatooine", "Alderaan", "Naboo", "Corcellia"],
    answer: "Alderaan"
    },
    {
    question: "In which 'Star Wars' movie does Liam Neeson play Qui-Gon Jinn?",
    options: ["Episode I", "Episode II", "Episode III", "Episode IV"],
    answer: "Episode I"
    },
    {
    question: "Where is the Council Chambers located?",
    options: ["Naboo", "Tatooine", "Jedi Temple, Coruscant", "Corcellia"],
    answer: "Jedi Temple, Coruscant"
    },
    {
    question: "In 'Episode IV (A New Hope)', who is the first character to talk?",
    options: ["R2-D2", "C-3PO", "Luke", "Leih"],
    answer: "C-3PO"
    },
    {
    question: "What planet, never previously mentioned in a 'Star Wars' movie, is invaded by the Trade Federation in 'The Phantom Menace'?",
    options: ["Tatooine", "Alderaan", "Naboo", "Corcellia"],
    answer: "Naboo"
    }
    ];

    //JS functions

    function generateQuizSection(obj){
        return `
    <section class="question-score-count-section">
        <h3 class="question-count">Question <span class="current-question">1</span> of <span class="total-questions">10</span></h3>
        <h3 class="score-count">Score <span class="current-score">0</span> of <span class="tot-score">10</span></h3>
    </section>

    <section class="question-section">
        <h3 class="question">${obj.question}</h3>
    </section>

    <section class="options-list">   
        <ul class="options-ul">
            <li class="option-1">${obj.options[0]} </li>
            <li class="option-2">${obj.options[1]}</li>
            <li class="option-3"> ${obj.options[2]} </li>
            <li class="option-4">${obj.options[3]}</li>
        </ul>
    </section>

    <section>
        <div class="next-ques-btn-container">
            <button class="next-question" type="submit">Next</button>
        </div>
    </section>
    `
    }

    

    function renderList(){
        console.log("ran Render List function");
        $("body").html(clickToStartGame());
    }

    function clickToStartGame(){
        console.log("ran 'clickToStartGame' function");
        //This function will run only the very first time
        $("button.click-to-start-btn").on("click",function(){
            $(".landing-page, .btn-flex-container").hide();
            $("body").html(generateQuizSection(quizQuesAndAnsArray[0]));
        })
    }

    function checkAnswer(){
        //This function should allow user to click on the li items and then get feedback based on their choices
        

    }

    function countScore(){
        let currentScoreValue = parseInt($("span.current-score").html());
        let newScore = currentScoreValue += 1;
        return newScore;
    }

    function updateScore(){
        //This function will count the score based on the correct choices
        //On click of the li item if the clicked li === answer
        //score++;
    }

    function questionCount (){
         //This function will count the current question
         let currentQuestionValue = parseInt($("span.current-question").html());
         $("button.next-question").on("click", function(){
             currentQuestionValue += 1;
             if(currentQuestionValue <= 10){
                $("span.current-question").html(currentQuestionValue);
             }
         });
    }

    function wrongChoice(){

    }

    function correctChoice(){
        
    }

    function finalScore (){

    }

    function restartGame(){

    }



//Ready State
    function runAllFunctions(){
        clickToStartGame();
        questionCount();
        updateScore();
        renderList();
    }

    $(runAllFunctions);