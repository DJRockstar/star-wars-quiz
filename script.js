'use strict'

//Data Model

const quizQuesAndAnsArray = [
    {
    question: "In 'Episode I,' what did Yoda discover that Anakin possessed, that may lead him to the Dark Side?",
    options: ["Fear","Strength","Trust","Passion"],
    answer: "Fear"
    },
    {
    question: "In 'Attack of the Clones', who says 'Oh, not good'?",
    options: ["Anakin Skywalker","Luke Skywalker","Obi Wan Kenobi","R2-D2"],
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
    options: ["1", "2", "3", "4"],
    answer: "2"
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

    let count = 0; //This is a counter that acts as the index of the arr
    let currentScore = 0;


    //************* */JS Render functions*******************

    function generateLandingPage(){
        return `
        <section class="landing-page">
        <div class="heading-container">
            <h2 class="starting-heading">Are you a <br> <strong>Star Wars</strong><br> Junkie? <br> Let's Find Out!</h2>
        </div>
    </section>
    <div class="btn-flex-container">
        <div>
            <button type="submit" class="click-to-start-btn">Let's Start!</button>
        </div>
    </div>
        `
    }


    function generateQuizSection(obj){
        return `
        <form class="quesAndAnsForm" action ="#someServerEndPoint" method = "POST">
            <section class="question-score-count-section">
                <h3 class="question-count">Question <span class="current-question">1</span> of <span class="total-questions">10</span></h3>
                <h3 class="score-count">Score <span class="current-score">0</span> of <span class="tot-score">10</span></h3>
            </section>

            <section class="question-section">
                <h3 class="question">${obj.question}</h3>
            </section>

            <section class="options-list">   
                <ul class="options-ul">
                    <li tabindex = 1 class="option-1">${obj.options[0]}</li>
                    <li tabindex = 2 class="option-2">${obj.options[1]}</li>
                    <li tabindex = 3 class="option-3">${obj.options[2]}</li>
                    <li tabindex = 4 class="option-4">${obj.options[3]}</li>
                </ul>
            </section>

            <section>
                <div class="next-ques-btn-container">
                    <button class="next-question" type="submit">Next</button>
                </div>
            </section>
        </form>    
    `
    }

    function correctChoiceRender(){
        return `
            <section class="rightOrWrongAnswer">
            <div class="giphy-embed1">
                <h2 class="correct-heading">Absolutely Correct!</h2>
                <iframe src="https://giphy.com/embed/1HPUSulSOHDpe" width="480" height="247" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/darth-vader-dancing-star-wars-1HPUSulSOHDpe"></a></p>
            </div>
            </section>
            <section>
            <div class="next-ques-btn-container">
                <button class="next-question" type="submit">Next</button>
            </div>
        </section>
            `
    }

    function wrongChoiceRender(){
        return `
        <section class="rightOrWrongAnswer">
        <div class="giphy-embed1">
            <h2 class="incorrect-heading">Unfortunately, it's not Correct! It's ${quizQuesAndAnsArray[count].answer}</h2>
            <iframe src="https://giphy.com/embed/zZfNOVP35Nrkk" width="480" height="207" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/i-then-zZfNOVP35Nrkk"></a></p>
        </div>
        </section>
        <section>
        <div class="next-ques-btn-container">
            <button class="next-question" type="submit">Next</button>
        </div>
        </section>
        `
    }

    function generateFinalScore (){
        return `
        <section class="final-score-display">
        <div class="final-score-container">
           <h2> Darth Vader thanks you for playing. <br> <br> Your final score is ${currentScore} </h2>
        </div>
        <div class="play-again-container">
           <button class="play-again-btn">Play Again?</button>
        </div>
   </section>
        `
    }

    //**************************JS Controlling Functions******************************** */

    function renderList(){
        console.log("ran Render List function");
        $("body").html(generateQuizSection(quizQuesAndAnsArray[count]));
        questionCount();
        selectListItems();
    }
 
    function clickToStartGame(){
        console.log("ran 'clickToStartGame' function");
        //This function will run only the very first time
        $("button.click-to-start-btn").on("click",function(){
            $(".landing-page, .btn-flex-container").hide();
            $("body").html(generateQuizSection(quizQuesAndAnsArray[count]));
            questionCount();
            selectListItems();
        })
    } 
    
    function questionCount(){
         //This function will count the current question
         let currentQuestionValue = parseInt($("span.current-question").html());
         $("button.next-question").on("click", function(){
             count += 1;
             if(count < quizQuesAndAnsArray.length){
                renderList();
                $("span.current-question").html(count+1);
                $("span.current-score").html(currentScore);
             } else {
                 restartGame();
             }
         });
    }

    //********* JS Helper Functions*****************

    function disableLiAfterClick(){
        $("li").css("pointer-events","none");
        $("li").css("opacity", 0.5);
    }

    function enableNextButtonOnClick(){
        $("button.next-question").css("pointer-events", "visible");
        $("button.next-question").css("opacity", 1);
    }

    function selectListItems(){
        $("li").on("click",function(e){
            e.stopPropagation();
            let val =$(this).text();
            let correctAnswer = quizQuesAndAnsArray[count].answer;
            if(val === correctAnswer){
                currentScore += 1;
                $("span.current-score").html(currentScore);
                correctChoice();
            }
            else {
                wrongChoice();       
            }
            disableLiAfterClick();
            enableNextButtonOnClick();
        });
        
        $("li").on("keypress",function(e){
            if(e.which===13){
                let val =$(this).text();
                let correctAnswer = quizQuesAndAnsArray[count].answer;
                if(val === correctAnswer){
                    currentScore += 1;
                    $("span.current-score").html(currentScore);
                    correctChoice();
                }
                else {
                    wrongChoice();       
                }
                disableLiAfterClick();
                enableNextButtonOnClick();
                }
        });
    }

    function wrongChoice(){
        $("body").html(wrongChoiceRender());
        questionCount();
    }

    function correctChoice(){
        $("body").html(correctChoiceRender());
        questionCount();
    }

    function restartGame(){
        $("body").html(generateFinalScore());
        $(".play-again-btn").on("click", function(){
            count = 0;
            currentScore = 0;
            $(".question-score-count-section,.options-list,.next-ques-btn-container,.question-section").hide();
            $("body").html(generateLandingPage());
            clickToStartGame();
        }) 
    }


//Ready State

    function runAllFunctions(){
        clickToStartGame();
        questionCount();
        selectListItems();
    }

    $(runAllFunctions);


    
    
