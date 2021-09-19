//variables

let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;


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

let gameData;



$.ajax(`https://opentdb.com/api.php?amount=11&difficulty=easy`).then(function (data) {

    gameData = data;
    console.log(gameData)

    $category.html(gameData.results[0].category)
    $question.html(gameData.results[0].question)

    $correctanswer = gameData.results[0].correct_answer
    $incorrectanswerA = gameData.results[0].incorrect_answers[0]
    $incorrectanswerB = gameData.results[0].incorrect_answers[1]
    $incorrectanswerC = gameData.results[0].incorrect_answers[2]
    if (gameData.results[0].type == "multiple") {
        $('.t-f').remove()


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
        let randomArray = shuffleArray(answerArray)
        console.log(randomArray)

        $a.html(randomArray[0])
        $b.html(randomArray[1])
        $c.html(randomArray[2])
        $d.html(randomArray[3])
    } else {
        $('.multiple-choice').remove()
        if (gameData.results[0].correct_answer == "True") {
            $t.html(gameData.results[0].correct_answer)
        } else if (gameData.results[0].correct_answer !== "True") {
            $t.html(gameData.results[0].incorrect_answers)
        }

    }
})


$('.answer').on('click', function(){
    console.log($(this).text())
    console.log($correctanswer)
    if ($(this).text() == $correctanswer) {
        console.log('congrats')
    } else {
        console.log('wrong')
    }
})






