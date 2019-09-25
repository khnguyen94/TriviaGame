// Create an array of questions, where each equstion and answer pair is an object
const questionAnswerArr = [
    {
        quest_num: 1, 
        question: "Which player has scored the most points in a single game?", 
        answers: ["Michael Jordan", "Wilt Chamberlain", "Lebron James", "John Stockton"]
    }, 
    {
        quest_num: 2, 
        question: "What is the name of mascot for the former Seattle Team?", 
        answers: ["Screech", "Speedy", "Sentinel", "Squatch"]
    },     
    {
        quest_num: 3, 
        question: "Who was the Finals MVP for the 2001 NBA championship?", 
        answers: ["Shaquille O'Neil", "Charles Barkley", "Allen Iverson", "Tracy McGrady"]
    },     {
        quest_num: 4, 
        question: "This person and Magic Johnson were considered the one of the best duos in the 1980s era LA Lakers.", 
        answers: ["Byron Scott", "Tyron Lue", "James Worthy", "Kareem Abdul-Jabbar"]
    },     {
        quest_num: 5, 
        question: "Gregg Popovich is currently the headcoach of this NBA team", 
        answers: ["Washington Wizards", "Milwalkee Bucks", "San Antonio Spurs", "Miami Heat"]
    },     {
        quest_num: 6, 
        question: "Ray Allen is the all time 3-point leader with this many made 3s. ", 
        answers: ["2973", "1418", "953", "1993"]
    },     {
        quest_num: 7, 
        question: "This player's nickname was The Dream.", 
        answers: ["Hakeem Olajuwon", "Bill Russell", "Pete Maravich", "Tony Parker"]
    },     {
        quest_num: 8, 
        question: "Which one of these players is from Argentina?", 
        answers: ["Andrei Kirilenko", "Giannis Antekouompo", "Manu Ginobli", "Serge Ibaka"]
    },     {
        quest_num: 9, 
        question: "What was the first year that the Miami Heat won an championship?", 
        answers: ["", "", "", ""]
    },     {
        quest_num: 10, 
        question: "Ron Artest changed his name and now goes by this.", 
        answers: ["Big Boy", "Tough Love", "Slick Rick", "Metta World Peace"]
    },  
];

console.log(questionAnswerArr[0]);


// Create score counters
let correct = 0;
let incorrect = 0;

// Creat a function that will render all the questions based on the array of questions
questionsCopy = [];

function renderQuestions() {
    for (var i = 0; i < questionAnswerArr.length; i++) {

        var newQuestion = $("<p>", {
            class: "col-md-6",
            id: "question-" + i
        }).text(questionAnswerArr[i].question);

        for (var j = 0; j < 4; j++) {
            var newAnswer = ("<p>", {
                class: "answer",  
                id: "answer-" + j
            })
            $("#question-" + i).append(newAnswer);
        }

        $("#first-question-row").append(newQuestion);
        questionsCopy.push(newQuestion);
    }
};

renderQuestions();


// Create a count down function that starts whenever an answer
 
function countDown(){
    var counter = 40;
    setInterval(function() {
       counter--;
       if (counter >= 0) {
            $("#counter-display").innerHTML = counter;
       }
       if (counter === 0) {
         alert("You've run out of time!");
         clearInterval(counter);
       }
    }, 1000);
 }

 $(".answer").on("click", countDown());



 // // Create an on click event listener that listens for when the user clicks on a potential answer
// $(".answer").on("click", function(event) {
//     // check it to the following list of right answers
//     // Question 1
//     let targetAnswer = $(event.target).text();
//     if (targetAnswer === "" || "" || "" || "" || "" || "" || "" || "" ||) {}

//     }
//     // Question 2

//  })



// // Create a function that will render all the questions based on the array of questions 
// function renderQuestionsAndAnswers() {
//     for (var i = 0; i < questionAnswerArr.length; i++) {
//         // Questions
//         let newQuestion = $("<p>");
//         newQuestion.attr("question-num", questionAnswerArr[i].quest_num);
//         newQuestion.text(questionAnswerArr[i].question);
//         $("#first-question-text").push(JSON.stringify(newQuestion));
//         // Answers
//         for (var j = 0; j < 4; j++) {
//             let potentialAnswer = $("<p>");
//             potentialAnswer.addClass("answer");
//             potentialAnswer.attr("answer-num", questionAnswerArr[i].answers[j]);
//             potentialAnswer.text(questionAnswerArr[i].answers[j]);
//             $("#first-question-text").push(JSON.stringify(potentialAnswer));   
//         }
//     }
// }

// renderQuestionsAndAnswers();






