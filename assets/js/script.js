var timeLeft = document.querySelector(".timeleft");
var options = document.querySelector(".options");
var answeralert = document.querySelector(".answeralert");
var startBtn = document.querySelector(".startbutton");
var questionPEl = document.querySelector("#question");

var questions = [
  {
    quo: "This is the first question",
    opt: ["option1", "option2", "option3", "option4"],    
  },
  {
    quo: "This is the second question",
    opt: ["option1", "option2", "option3", "option4"],
   
  },
  {
    quo: "This is the third question",
    opt: ["option1", "option2", "option3", "option4"],
    
  },
  {
    quo: "This is the forth question",
    opt: ["option1", "option2", "option3", "option4"],
    
  },
  {
    quo: "This is the fifth question",
    opt: ["option1", "option2", "option3", "option4"],
    
  }
];
var correctAnswer =[];
function timeInterval(){
    var tim =75;
    timeLeft.textContent = 75 + "s";
    setInterval(function(){
        if(tim > 0){
        tim--;
        timeLeft.textContent = tim + "s";
        }
        else{
            clearInterval(setInterval);
        }
    }, 1000);

}

startBtn.addEventListener("click", function () {
  questionPEl.textContent = questions[0]["quo"];
  timeInterval();
});