var timeLeft = document.querySelector(".timeleft");
var options = document.querySelector(".options");
var answeralert = document.querySelector(".answeralert");
var startBtn = document.querySelector(".startbutton");
var questionPEl = document.querySelector("#question");
var optionsDivEl = document.querySelector(".options-div");
var scoreViewerEl = document.querySelector("#scoreViewer");
var viewerBtn = document.querySelector(".viewerBtn");
var score = 0;
var el;
//Questions array
var questions = [
  {
    quo: "This is the first question",
    opt: ["C#", "JavaScript", "HTML5", "CSS3"],
  },
  {
    quo: "This is the second question",
    opt: ["CSS3", "jQuery", "JavaScript", "HTML5"],
  },
  {
    quo: "This is the third question",
    opt: ["jQuery", "JavaScript", "CSS3", "HTML5"],
  },
  {
    quo: "This is the forth question",
    opt: ["C#", "JavaScript", "HTML5", "CSS3"],
  },
  {
    quo: "This is the fifth question",
    opt: ["jQuery", "JavaScript", "CSS3", "HTML5"],
  },
];
var tim = 0;
//This variable will be used to track if the user answered the last question or not.
var checkEnd = 0;
// Answer array
var correctAnswer = ["JavaScript", "jQuery", "HTML5", "CSS3", "JavaScript"];
/* This time interval function will track the time for the quiz */
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
/* When the user clicks the start buttom to start his/her quiz this fuction will be called */
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
/* This event delegate will be called when the user made his choice for the answer of each question */
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
        var Timeout = setTimeout(function () {
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
    tim -= 10;
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
    var Timeout = setTimeout(function () {
      answeralert.textContent = "";
      clearTimeout(Timeout);
    }, 500);
  }
});
// This function will be called when the time is up or the user finished questions and updates the user interface with new elements
function updateDivEl() {
  optionsDivEl.innerHTML =
    "<p id='score'></p>" +
    "<form><label for='scorevalue'>Enter Initials: </label><input type='text' name='scorevalue' class='ml-xs-0 mb-3 ml-md-3' id='scoreValue' /><button class='btn btn-info ml-xs-0  ml-md-3'id='submit'>Submit</button></form>" +
    "<span type='button' class='btn btn-info mt-2 p-2' id='tryagain'>Try Again </span> \t \t <span type='button' class='btn btn-info mt-2 p-2 ml-2' id='clearscore'>Clear Scores </span>";
  questionPEl.innerHTML = "<span> All Done!</span>";
  document.querySelector("#score").textContent = "Your Score is: " + score;
  var submitEl = document.querySelector("#submit");
  submitEl.addEventListener("click", addInitialsWithScore);
  var tryagainEl = document.querySelector("#tryagain");
  tryagainEl.addEventListener("click", function (event) {
    event.stopPropagation();
    location.reload();
  });
  var clearEl = document.querySelector("#clearscore");
  clearEl.addEventListener("click", function (event) {
    event.stopPropagation();
    document.querySelector("#scoreValue").value = "";
    localStorage.removeItem("Highest Score");
  });
}
// submit event handler function
function addInitialsWithScore(event) {
  event.preventDefault();
  var inVal = document.querySelector("#scoreValue");
  if (!inVal.value) {
    alert("Please provide your initials");
  } else {
    var inValScore = inVal.value;
    inVal.value = "1. " + inValScore + "_" + score;
    localStorage.setItem("score", inVal.value);
    var highS = localStorage.getItem("Highest Score");
    if (highS) {
      if (parseInt(highS) < score) {
        localStorage.setItem("Highest Score", score);
      }
    } else {
      localStorage.setItem("Highest Score", score);
    }
    document.querySelector("#submit").classList = "d-none";
  }
}
// This is button click event handler to see the highest score.
viewerBtn.addEventListener("click",function(){
var HSval = localStorage.getItem("Highest Score");
if(HSval){
    scoreViewerEl.textContent ="Your highest score thus far is : " + HSval; 
}else{
    scoreViewerEl.textContent = "Score value not available";
}
});