// var startSearch = document.getElementById('findFood')

// startSearch.addEventListener('click', findRestaurant)

// function findRestaurant(){
//     startSearch.classList.add('hide')
//     questionContainer.classList.remove('hide')
//     nextPromt()
// };
var factList = document.querySelector('ul')
var startBtn = document.querySelector('try-it-out-btn')
var foodGenre = "spanish"

factList.setAttribute("style", "list-style: none")

function getAPI() {
  var requestURL = 'https://restcountries.com/v3.1/demonym/'+foodGenre+'?fields=name,population,currencies,capital,flag'
    
  fetch(requestURL)
        .then(function (response) {
          return response.json();
        })

        .then(function (data) {
          console.log(data)
          var nameData = Object.values(data[0].name)
          console.log(nameData[0])
          var objectData = Object.values(data[0])
          console.log(objectData)
          var currencyData = Object.values(objectData[1])
          console.log(currencyData)
          var currencyData1 = Object.values(currencyData[0])
          var capitalData = Object.values(objectData[2])
          console.log(capitalData)
          
          var name = nameData[0]
          var population = document.createElement('li')
          var currency = document.createElement('li')
          var capitalCity = document.createElement('li')
          var flag = document.createElement('li')

          population.textContent = "The population of " + name + " is " + objectData[4]
          currency.textContent = "The official currency of " + name + " is the " + currencyData1[0]
          capitalCity.textContent = "The capital of " + name + " is " + capitalData[0]
          flag.textContent = "The national flag of " + name + " looks like this: " + objectData[3]

          factList.append(population)
          factList.append(currency)
          factList.append(capitalCity)
          factList.append(flag)
        })

}
getAPI();

var questions = [
  {
    question: "Would you like to have thai food?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Have you tried italian food lately?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "How does fried chicken sound?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Is it pizza night?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Are you in the mood for sushi?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Has it been a while since you have had chinese food?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "How does seafood sound?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Want to find the nearest hispanic restaurant?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Have you ever tried nigerian cuisine?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Icecream for dinner?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Want to find out what russian food is like?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Have you ever been to a french eatery?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
  {
    question: "Want to try some sort of food fusion?",
    answer: [
      { text: "yes", correct: true },
      { text: "no", correct: false },
    ],
  },
];

// var Api = key=AIzaSyCViMaXKSeOarMsUDhAY2LpvrNz2cssUHc
// function revealCards(restaurants){
//     fetch("https://www.google.com/maps/embed/v1/search?"+Api+"&q="+GenreRestaurant)
//     .then((function(response) {
//         if(response.ok){
//             response.json()
//             .then(function (data) {
//                 console.log(data)
//                 let suya = 0
//                 for (let i = 0; i < cards.length; i++) {
//                     cards[i].style.opacity = 1
//                     var cardResaurantName = cards[i].querySelector(".restaurantName")
//                     var cardGenre = cards[i].querySelector(".genre")
//                    // var cardHours = cards[i].querySelector(".hours")
//                    // var cardLocation = cards[i].querySelector(".location")
//                     cardResaurantName.innerHTML= data.list[suya];
//                     cardGenre.innerHTML="Genre: " + data.list[suya];
//                    // cardHours.innerHTML="Hours of Operation: " + data.list[suya];
//                    // cardLocation.innerHTML="Location: " + data.list[suya];
//                 }})}}))};
