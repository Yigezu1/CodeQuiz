var timeLeft = document.querySelector(".timeleft");
var options = document.querySelector(".options");
var answeralert = document.querySelector(".answeralert");
var startBtn = document.querySelector(".startbutton");
var questionPEl = document.querySelector("#question");
var optionsDivEl = document.querySelector(".options-div");
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
var tim = 0;
var checkEnd = 0;
var correctAnswer = ["option1", "option4", "option3", "option1", "option2"];
function timeInterval() {
  tim = 75;
  timeLeft.textContent = 75 + "s";
  var timerInterval = setInterval(function () {
    if (tim > 0 && checkEnd === 0) {
      tim--;
      timeLeft.textContent = tim + "s";
    } else {
      if (checkEnd === 0) {
        updateDivEl();
      }
      clearInterval(timerInterval);
    }
  }, 1000);
}

startBtn.addEventListener("click", function () {
  questionPEl.textContent = questions[0]["quo"];
  questionPEl.setAttribute("id", "0");
  startBtn.setAttribute("Class", "d-none");
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
    score += 6;
    answeralert.textContent = "Correct!";
    if (id < questions.length && tim > 0) {
      questionPEl.textContent = questions[id]["quo"];
      questionPEl.setAttribute("id", id);
      options.innerHTML = "";
      for (var i = 0; i < questions[0]["opt"].length; i++) {
        var el = document.createElement("li");
        var va = questions[id]["opt"];
        el.textContent = va[i];
        options.appendChild(el);
        var Timeout = setTimeout(function(){
            answeralert.textContent = "";
            clearTimeout(Timeout);
        }, 500);
      }
    } else {
      checkEnd = 1;
      updateDivEl();
    }
  } else {
    answeralert.textContent = "Wrong!";
    tim -=10;
    id++;
    if (id < questions.length && tim > 0) {
      questionPEl.textContent = questions[id]["quo"];
      questionPEl.setAttribute("id", id);
      options.innerHTML = "";

      for (var i = 0; i < questions[0]["opt"].length; i++) {
        var el = document.createElement("li");
        var va = questions[id]["opt"];
        el.textContent = va[i];
        options.appendChild(el);
      }
    } else {
      checkEnd = 1;
      updateDivEl();
    }
    var Timeout = setTimeout(function(){
        answeralert.textContent = "";
        clearTimeout(Timeout);
    }, 500);
  }
});
function updateDivEl() {
  optionsDivEl.innerHTML =
    "<p id='score'></p>" +
    "<form><label for='scorevalue'>Enter Initials: </label><input type='text' name='scorevalue' class='ml-2' id='scoreValue'><button class='ml-3'id='submit'>Submit</button></input></form>" +
    "<span type='button' class='btn-info mt-2 p-2' id='tryagain'>Try Again </span> \t \t <span type='button' class='btn-info mt-2 p-2 ml-2' id='clearscore'>Clear Score </span>";
  questionPEl.innerHTML = "<span> All Done!</span>";
  document.querySelector("#score").textContent = "Your Score is: " + score;
  var submitEl = document.querySelector("#submit");
  submitEl.addEventListener("click", addInitialsWithScore);
  var tryagainEl = document.querySelector("#tryagain");
  tryagainEl.addEventListener("click", function(event){
      event.stopPropagation();
      location.reload();
  });
  var clearEl = document.querySelector("#clearscore");
  clearEl.addEventListener("click", function(event){
    event.stopPropagation();
    document.querySelector("#scoreValue").value = "";
  });
}

function addInitialsWithScore(event) {
  event.preventDefault();
  var inVal = document.querySelector("#scoreValue");
  if (!inVal.value) {
    alert("Please provide your initials");
  } else {
    var inValScore = inVal.value;
    inVal.value = "1. " + inValScore + "_" + score;
    localStorage.setItem("score", inVal.value);
    document.querySelector("#submit").classList = "d-none";
  }
}


