var startSearch = document.getElementById('start')
let mixedprompt,promptindex
var tryItOut = document.getElementById('questions')
var reply = document.getElementById('answers')
var sweet = document.getElementById('button1')
var meh = document.getElementById('button2')
startSearch.addEventListener('click', findRestaurant)

sweet.addEventListener('click', yeahYeah)
meh.addEventListener('click', reduceArray)

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
            
