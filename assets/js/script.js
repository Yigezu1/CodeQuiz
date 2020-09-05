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
    quo: "",
    opt: ["option1", "option2", "option3", "option4"],
   
  },
  {
    quo: "",
    opt: ["option1", "option2", "option3", "option4"],
    
  },
  {
    quo: "",
    opt: ["option1", "option2", "option3", "option4"],
    
  },
];

function timeInterval(){
    var tim =70;
    timeLeft.textContent = 70 + "s";
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