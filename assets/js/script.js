var startSearch = document.getElementById('findFood')

startSearch.addEventListener('click', findRestaurant)

function findRestaurant(){
    startSearch.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextPromt()
};

var questions = [
    {
        question: 'Would you like to have thai food?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Have you tried italian food lately?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'How does fried chicken sound?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Is it pizza night?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Are you in the mood for sushi?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Has it been a while since you have had chinese food?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'How does seafood sound?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find the nearest hispanic restaurant?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Have you ever tried nigerian cuisine?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Icecream for dinner?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Want to find out what russian food is like?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
        ]
    }
    ,{
        question: 'Have you ever been to a french eatery?',
        answer: [
            { text: 'yes' ,correct: true},
            { text: 'no' ,correct: false}
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

var Api = key=AIzaSyCViMaXKSeOarMsUDhAY2LpvrNz2cssUHc 
function revealCards(restaurants){
    fetch("https://www.google.com/maps/embed/v1/search?"+Api+"&q="+GenreRestaurant)
    .then((function(response) {
        if(response.ok){
            response.json()
            .then(function (data) {
                console.log(data)
                let suya = 0
                for (let i = 0; i < cards.length; i++) {
                    cards[i].style.opacity = 1
                    var cardResaurantName = cards[i].querySelector(".restaurantName")
                    var cardGenre = cards[i].querySelector(".genre")
                   // var cardHours = cards[i].querySelector(".hours")
                   // var cardLocation = cards[i].querySelector(".location")
                    cardResaurantName.innerHTML= data.list[suya];
                    cardGenre.innerHTML="Genre: " + data.list[suya];
                   // cardHours.innerHTML="Hours of Operation: " + data.list[suya];
                   // cardLocation.innerHTML="Location: " + data.list[suya];
                }})}}))};

