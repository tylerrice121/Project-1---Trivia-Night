//variables

let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;
let gameData;
let randomArray;
let arrayQs;
let arrayQFor;

// grab html elements
const $category = $('.category')
const $question = $('.question')
const $multiChoice = $('.multiple-choice')
const $Tf = $('.t-f')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $d = $('#d')
const $t = $('#true')
const $f = $('#false')
const $answer = $('.answer')

// sections
const $q1 = $('.question1')
const $q2 = $('.question2')
const $q3 = $('.question3')
const $q4 = $('.question4')
const $q5 = $('.question5')
const $q6 = $('.question6')
const $q7 = $('.question7')
const $q8 = $('.question8')
const $q9 = $('.question9')
const $q10 = $('.question10')

const play = function () {
    getData()
}

const getData = function (event) {
    $.ajax(`https://opentdb.com/api.php?amount=10&difficulty=easy`).then(function (data) {
        
        gameData = data;
        console.log(gameData)
        
        
        //create questions array
        arrayQs = gameData.results
        console.log(arrayQs)

        // assign each section to data results

        randomizer()
        result()
        
        
        if (gameData.results[0].type == "multiple") {
            $('.t-f').remove()
            renderMult()
        } else {
            $('.multiple-choice').remove()
            renderTf()
        }
    })
}

const randomizer = function () {
    $correctanswer = gameData.results[0].correct_answer
    $incorrectanswerA = gameData.results[0].incorrect_answers[0]
    $incorrectanswerB = gameData.results[0].incorrect_answers[1]
    $incorrectanswerC = gameData.results[0].incorrect_answers[2]

    let answerArray = [$correctanswer, $incorrectanswerA, $incorrectanswerB, $incorrectanswerC]

    // invoke fisher yates algorithm to randomize array    
    let shuffleArray = answerArray => {
        for (let i = answerArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answerArray[i];
            answerArray[i] = answerArray[j]
            answerArray[j] = temp;
        }
        return answerArray
    }
    // store the random array in a new variable    
    randomArray = shuffleArray(answerArray)
    console.log(randomArray)

}

const renderMult = function () {

    $category.html(gameData.results[0].category)
    $question.html(gameData.results[0].question)

    $a.html(randomArray[0])
    $b.html(randomArray[1])
    $c.html(randomArray[2])
    $d.html(randomArray[3])
}

const renderTf = function () {

    $category.html(gameData.results[0].category)
    $question.html(gameData.results[0].question)


    if (gameData.results[0].correct_answer == "True") {
        $t.html(gameData.results[0].correct_answer)
    } else if (gameData.results[0].correct_answer !== "True") {
        $t.html(gameData.results[0].incorrect_answers)
    }
}

const result = function () {
    $('.answer').on('click', function () {
        console.log($(this).text())
        console.log($correctanswer)
        if ($(this).text() == $correctanswer) {
            console.log('congrats')
            alert('congrats')
        } else {
            console.log('wrong')
            alert('wrong')
        }
    })
}

play()

  M.AutoInit();