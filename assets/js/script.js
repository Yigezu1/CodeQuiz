var timeLeft = document.querySelector(".timeleft");
var options = document.querySelector(".options");
var answeralert = document.querySelector(".answeralert");
var startBtn = document.querySelector(".startbutton");
var questionPEl = document.querySelector("#question");
var score = 0;
var el;
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
  },
];
var correctAnswer = ["option1", "option4", "option3", "option1", "option2"];
function timeInterval() {
  var tim = 75;
  timeLeft.textContent = 75 + "s";
  setInterval(function () {
    if (tim > 0) {
      tim--;
      timeLeft.textContent = tim + "s";
    } else {
      clearInterval(setInterval);
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  questionPEl.textContent = questions[0]["quo"];
  questionPEl.setAttribute("id", "0");
  startBtn.setAttribute("Class", "hide");
  for (var i = 0; i < questions[0]["opt"].length; i++) {
    el = document.createElement("li");
    var va = questions[0]["opt"];
    el.textContent = va[i];
    options.appendChild(el);
  }
  timeInterval();
});
options.addEventListener("click", function (event) {
  var id = parseInt(questionPEl.getAttribute("id"));
  var evTargetval = event.target.textContent;
  if (evTargetval == correctAnswer[id]) {
    id++;
    score+=6;
    answeralert.textContent = "Correct!";
    if (id < questions.length) {
      questionPEl.textContent = questions[id]["quo"];
      questionPEl.setAttribute("id", id);
      options.innerHTML="";
      for (var i = 0; i < questions[0]["opt"].length; i++) {
        var el = document.createElement("li");
        var va = questions[id]["opt"];
        el.textContent = va[i];
        options.appendChild(el);
      }
    }
  } else {
    answeralert.textContent = "Wrong!";
    id++;
    if (id < questions.length) {
      questionPEl.textContent = questions[id]["quo"];
      questionPEl.setAttribute("id", id);
      options.innerHTML="";
      
      for (var i = 0; i < questions[0]["opt"].length; i++) {
        var el = document.createElement("li");
        var va = questions[id]["opt"];
        el.textContent = va[i];
        options.appendChild(el);
      }
    }
  }
});
