test-api
var startSearch = document.getElementById("start");
let mixedprompt, promptindex;
var tryItOut = document.getElementById("questions");
var reply = document.getElementById("answers");
var sweet = document.getElementById("button1");
var meh = document.getElementById("button2");
var countryFacts = document.querySelector(".country-facts")
startSearch.addEventListener("click", findRestaurant);
startSearch.addEventListener("click", function(){
    sweet.setAttribute("style","display:block")
    meh.setAttribute("style","display:block")

    
})
sweet.addEventListener("click", yeahYeah, function(){
    sweet.setAttribute("style","display:none")
    meh.setAttribute("style","display:none")
    countryFacts.setAttribute("style","display:block")
});
meh.addEventListener("click", reduceArray);
var factList = document.querySelector("ul");
var startBtn = document.querySelector("try-it-out-btn");





//var successCallback = (position) =>{
//var long =position.coords.longitude;
//var lat =position.coords.latitude
// console.log(position.coords.longitude)
//console.log(position.coords.latitude)
//}

// navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//var errorCallback;

function yeahYeah() {
  var genreRestaurant = mixedprompt[promptindex].answer[0].genre;
  var api = "key=AIzaSyCViMaXKSeOarMsUDhAY2LpvrNz2cssUHc";
  var iframe = document.querySelector("iframe");
  iframe.src =
    "https://www.google.com/maps/embed/v1/search?" +
    api +
    "&q=" +
    genreRestaurant +
    "restaurants";

  function getAPI() {
    var requestURL =
      "https://restcountries.com/v3.1/demonym/" +
      genreRestaurant +
      "?fields=name,population,currencies,capital,flag";

    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data);
        var nameData = Object.values(data[0].name);
        console.log(nameData[0]);
        var objectData = Object.values(data[0]);
        console.log(objectData);
        var currencyData = Object.values(objectData[1]);
        console.log(currencyData);
        var currencyData1 = Object.values(currencyData[0]);
        var capitalData = Object.values(objectData[2]);
        console.log(capitalData);

        var name = nameData[0];
        var population = document.createElement("li");
        var currency = document.createElement("li");
        var capitalCity = document.createElement("li");
        var flag = document.createElement("li");

        population.textContent =
          "The population of " + name + " is " + objectData[4];
        currency.textContent =
          "The official currency of " + name + " is the " + currencyData1[0];
        capitalCity.textContent =
          "The capital of " + name + " is " + capitalData[0];
        flag.textContent =
          "The national flag of " + name + " looks like this: " + objectData[3];

        factList.append(population);
        factList.append(currency);
        factList.append(capitalCity);
        factList.append(flag);

      });
  }
  getAPI();

}
var prompts = [
  {
    question: "Would you like to have thai food?",
    answer: [
      { text: "Why not", correct: true, genre: "thai" },
      { nope: "Meh", correct: false },
    ],
  },
  {
    question: "Have you tried italian food lately?",
    answer: [
      { text: "Yes", correct: true, genre: "italian" },
      { nope: "Nope", correct: false },
    ],
  },
  {
    question: "How does filipino fried chicken sound?",
    answer: [
      { text: "Awesome", correct: true, genre: "filipino" },
      { nope: "Real Greasy", correct: false },
    ],
  },
  {
    question: "Have you ever had food from spain?",
    answer: [
      { text: "Could Be", correct: true, genre: "spanish" },
      { nope: "No", correct: false },
    ],
  },
  {
    question: "Are you in the mood for japanese cuisine?",
    answer: [
      { text: "Yep", correct: true, genre: "japanese" },
      { nope: "Never", correct: false },
    ],
  },
  {
    question: "Has it been a while since you have had chinese food?",
    answer: [
      { text: "Too Long", correct: true, genre: "chinese" },
      { nope: "So Sorry", correct: false },
    ],
  },
  {
    question: "How does chilean bass sound?",
    answer: [
      { text: "Amazing", correct: true, genre: "chilean" },
      { nope: "Gross", correct: false },
    ],
  },
  {
    question: "Want to find the nearest mexican restaurant?",
    answer: [
      { text: "Definetly", correct: true, genre: "mexican" },
      { nope: "Hard Pass", correct: false },
    ],
  },
  {
    question: "Would you like to try nigerian cuisine?",
    answer: [
      { text: "I Could", correct: true, genre: "nigerian" },
      { nope: "Not today", correct: false },
    ],
  },
  {
    question: "Would you like to try something greek?",
    answer: [
      { text: "Why Not", correct: true, genre: "greek" },
      { nope: "Terrible Suggestion", correct: false },
    ],
  },
  {
    question: "Want to find out what russian food is like?",
    answer: [
      { text: "Sure", correct: true, genre: "russian" },
      { nope: "Not Really", correct: false },
    ],
  },
  {
    question: "Would you like to visit a french eatery?",
    answer: [
      { text: "Yes", correct: true, genre: "french" },
      { nope: "Never", correct: false },
    ],
  },
  {
    question: "Would you like to visit an indian restaurant?",
    answer: [
      { text: "Sure", correct: true, genre: "indian" },
      { nope: "Not tonight", correct: false },
    ],
  },
  {
    question: "Have you ever had bulgogi?",
    answer: [
      { text: "Yes", correct: true, genre: "korean" },
      { nope: "Yes, never again", correct: false },
    ],
  },
  {
    question: "Want a cuban pulled pork sandwhich?",
    answer: [
      { text: "Absolutely", correct: true, genre: "cuban" },
      { nope: "Not now", correct: false },
    ],
  },
  {
    question: "Does a hawiian dinner sound adventurous?",
    answer: [
      { text: "Sure", correct: true, genre: "hawiian" },
      { nope: "Too much gravy", correct: false },
    ],
  },
  {
    question: "Come on have some puerto rican food.",
    answer: [
      { text: "Sure", correct: true, genre: "puerto+rican" },
      { nope: "No", correct: false },
    ],
  },
  {
    question: "Want to eat kosher today?",
    answer: [
      { text: "Why not", correct: true, genre: "jewish" },
      { nope: "Not Really", correct: false },
    ],
  },
  {
    question: "How would you like to try morrocan?",
    answer: [
      { text: "Yes", correct: true, genre: "morrocan" },
      { nope: "Not at the moment", correct: false },
    ],
  },
  {
    question: "If you have tried indian you got to try pakistani.",
    answer: [
      { text: "Sure", correct: true, genre: "pakistani" },
      { nope: "No I do not", correct: false },
    ],
  },
  {
    question: "Try malay dining.",
    answer: [
      { text: "I will try", correct: true, genre: "malay" },
      { nope: "No", correct: false },
    ],
  },
  {
    question: "You really should find out if your into saudi arabian food.",
    answer: [
      { text: "Yes", correct: true, genre: "saudi+arabian" },
      { nope: "Or no", correct: false },
    ],
  },
  {
    question: "Does norwegian sound good?",
    answer: [
      { text: "Very", correct: true, genre: "norwegian" },
      { nope: "Not in the mood", correct: false },
    ],
  },
];

function reduceArray() {
  console.log(mixedprompt);
  mixedprompt.splice(0, 1);
  console.log(mixedprompt);
  findRestaurant();
}

function findRestaurant() {
  mixedprompt = prompts.sort(() => Math.random() - 0.5);
  promptindex = 0;
  tryItOut.classList.remove("hide");
  nextPrompt();
}

function nextPrompt() {
  revealPrompt(mixedprompt[promptindex]);
}

function revealPrompt(prompt) {
  tryItOut.innerText = prompt.question;
  button1.innerText = prompt.answer[0].text;
  button2.innerText = prompt.answer[1].nope;
}
   
function latlong() {
 
}

function latlong() {}

// ========display date and time=============
function displayTimeDate() {
  var timeDate = moment().format("MMM Do,  h:mm a");
  var timeDateDisplay = document.querySelector(".time-date");
  timeDateDisplay.textContent = timeDate;
  setTimeout(function () {
    displayTimeDate();
  }, 1000);
}
displayTimeDate();
