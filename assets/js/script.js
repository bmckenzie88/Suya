var startSearch = document.getElementById('start')
let mixedprompt,promptindex
var tryItOut = document.getElementById('questions')
var reply = document.getElementById('answers')
var sweet = document.getElementById('button1')
var meh = document.getElementById('button2')
startSearch.addEventListener('click', findRestaurant)

sweet.addEventListener('click', yeahYeah)
meh.addEventListener('click', coward)
function findRestaurant(){
    console.log('titties')
    mixedprompt = prompt.sort(() => Math.random() - .5)
    promptindex = 0
    tryItOut.classList.remove('hide')
    nextPrompt()
};

function yeahYeah(){
   
}

function coward(){
 
}

function nextPrompt()  {
    revealPrompt(mixedprompt[promptindex])
}

function revealPrompt(prompt) {
tryItOut.innerText = prompt.question
prompt.answer.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('eh')
});

}

var prompt = [
    {
        question: 'Would you like to have thai food?',
        answer: [
            { text: 'Why not' ,correct: true},
            { text: 'Meh' ,correct: false}
        ]
    }
    ,{
        question: 'Have you tried italian food lately?',
        answer: [
            { text: 'Yes' ,correct: true},
            { text: 'Nope' ,correct: false}
        ]
    }
    ,{
        question: 'How does fried chicken sound?',
        answer: [
            { text: 'Awesome' ,correct: true},
            { text: 'Real Greasy' ,correct: false}
        ]
    }
    ,{
        question: 'Is it a pizza night?',
        answer: [
            { text: 'Could Be' ,correct: true},
            { text: 'No' ,correct: false}
        ]
    }
    ,{
        question: 'Are you in the mood for sushi?',
        answer: [
            { text: 'Yep' ,correct: true},
            { text: 'Never' ,correct: false}
        ]
    }
    ,{
        question: 'Has it been a while since you have had chinese food?',
        answer: [
            { text: 'Too Long' ,correct: true},
            { text: 'So Sorry' ,correct: false}
        ]
    }
    ,{
        question: 'How does seafood sound?',
        answer: [
            { text: 'Amazing' ,correct: true},
            { text: 'Gross' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find the nearest hispanic restaurant?',
        answer: [
            { text: 'Definetly' ,correct: true},
            { text: 'Hard Pass' ,correct: false}
        ]
    }
    ,{
        question: 'Would you like to try nigerian cuisine?',
        answer: [
            { text: 'I Could' ,correct: true},
            { text: 'Not today' ,correct: false}
        ]
    }
    ,{
        question: 'Icecream for dinner?',
        answer: [
            { text: 'Why Not' ,correct: true},
            { text: 'Terrible Suggestion' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find out what russian food is like?',
        answer: [
            { text: 'Sure' ,correct: true},
            { text: 'Not Really' ,correct: false}
        ]
    }
    ,{
        question: 'Would you like to visit a french eatery?',
        answer: [
            { text: 'Yes' ,correct: true},
            { text: 'Never' ,correct: false}
        ]
    }
    ,{
        question: 'Want to try some sort of food fusion?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }

]
//var genreRestaurant;
//var Api = key=AIzaSyCViMaXKSeOarMsUDhAY2LpvrNz2cssUHc 
//function revealCards(restaurants){
    //fetch("https://www.google.com/maps/embed/v1/search?"+Api+"&q="+genreRestaurant)
   // .then((function(response) {
      //  if(response.ok){
         //   response.json()
          //  .then(function (data) {
           //     console.log(data)
            ////    let suya = 0
              //  for (let i = 0; i < cards.length; i++) {
                //    cards[i].style.opacity = 1
                 //   var cardResaurantName = cards[i].querySelector(".restaurantName")
                //    var cardGenre = cards[i].querySelector(".genre")
                  // // var cardHours = cards[i].querySelector(".hours")
                   // var cardLocation = cards[i].querySelector(".location")
                 //   cardResaurantName.innerHTML= data.list[suya];
                //    cardGenre.innerHTML="Genre: " + data.list[suya];
                   // cardHours.innerHTML="Hours of Operation: " + data.list[suya];
                   // cardLocation.innerHTML="Location: " + data.list[suya];
              //  }})}}))};

