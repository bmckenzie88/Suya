var startSearch = document.getElementById('start')
let mixedprompt,promptindex
var tryItOut = document.getElementById('questions')
var reply = document.getElementById('answers')
var sweet = document.getElementById('button1')
var meh = document.getElementById('button2')
startSearch.addEventListener('click', findRestaurant)

sweet.addEventListener('click', yeahYeah)
meh.addEventListener('click', reduceArray)
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

var prompts = [
    {
        question: 'Would you like to have thai food?',
        answer: [
            { text: 'Why not', correct: true, genre: "thai"},
            { nope: 'Meh', correct: false}
        ]
    }
    ,{
        question: 'Have you tried italian food lately?',
        answer: [
            { text: 'Yes' ,correct: true, genre: "italian"},
            { nope: 'Nope' ,correct: false}
        ]
    }
    ,{
        question: 'How does fried chicken sound?',
        answer: [
            { text: 'Awesome' ,correct: true, genre: "fried+chicken"},
            { nope: 'Real Greasy' ,correct: false}
        ]
    }
    ,{
        question: 'Is it a pizza night?',
        answer: [
            { text: 'Could Be' ,correct: true, genre: "pizza"},
            { nope: 'No' ,correct: false}
        ]
    }
    ,{
        question: 'Are you in the mood for sushi?',
        answer: [
            { text: 'Yep' ,correct: true, genre: "sushi"},
            { nope: 'Never' ,correct: false}
        ]
    }
    ,{
        question: 'Has it been a while since you have had chinese food?',
        answer: [
            { text: 'Too Long' ,correct: true, genre:"chinese"},
            { nope: 'So Sorry' ,correct: false}
        ]
    }
    ,{
        question: 'How does seafood sound?',
        answer: [
            { text: 'Amazing' ,correct: true, genre:"seafood"},
            { nope: 'Gross' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find the nearest hispanic restaurant?',
        answer: [
            { text: 'Definetly' ,correct: true, genre:"hispanic"},
            { nope: 'Hard Pass' ,correct: false}
        ]
    }
    ,{
        question: 'Would you like to try nigerian cuisine?',
        answer: [
            { text: 'I Could' ,correct: true, genre:"nigerian"},
            { nope: 'Not today' ,correct: false}
        ]
    }
    ,{
        question: 'Icecream for dinner?',
        answer: [
            { text: 'Why Not' ,correct: true, genre:"icecream"},
            { nope: 'Terrible Suggestion' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find out what russian food is like?',
        answer: [
            { text: 'Sure' ,correct: true, genre:"russian"},
            { nope: 'Not Really' ,correct: false}
        ]
    }
    ,{
        question: 'Would you like to visit a french eatery?',
        answer: [
            { text: 'Yes' ,correct: true, genre:"french"},
            { nope: 'Never' ,correct: false}
        ]
    }
    ,{
        question: 'Want to try some sort of food fusion?',
        answer: [
            { text: 'yes' ,correct: true, genre:"fusion"},
            { nope: 'no' ,correct: false}
        ]
    }

]

function reduceArray(){
    console.log(mixedprompt)
    mixedprompt.splice(0,1)
    console.log(mixedprompt)
    findRestaurant()
}

function findRestaurant(){
    mixedprompt = prompts.sort(() => Math.random() - .5)
    promptindex = 0
    tryItOut.classList.remove('hide')
    nextPrompt()

};

function nextPrompt()  {
    revealPrompt(mixedprompt[promptindex])
}

function revealPrompt(prompt) {
    tryItOut.innerText = prompt.question
    button1.innerText = prompt.answer[0].text
    button2.innerText = prompt.answer[1].nope
}

function yeahYeah(){
    var genreRestaurant = mixedprompt[promptindex].answer[0].genre
    var api = "key=AIzaSyCViMaXKSeOarMsUDhAY2LpvrNz2cssUHc" 
    var iframe = document.querySelector('iframe')
    iframe.src="https://www.google.com/maps/embed/v1/search?"+api+"&q="+genreRestaurant+"restaurants"
}
            
