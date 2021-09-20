//variables

let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;
let $correctanswerQ2;
let $incorrectanswerAQ2;
let $incorrectanswerBQ2;
let $incorrectanswerCQ2;
let gameData;
let arrayQs;
let randomArrayQ1;
let randomArrayQ2;
let randomArrayQ3;
let randomArrayQ4;
let randomArrayQ5;
let randomArrayQ6;
let randomArrayQ7;
let randomArrayQ8;
let randomArrayQ9;
let randomArrayQ10;

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
        
        //create questions array
        arrayQs = gameData.results
        console.log(arrayQs)


        randomizer()
        result()
        
    //QUESTION 1    
        if (arrayQs[0].type == "multiple") {
            $('.t-f').remove()
            renderMult()
        } else {
            $('.multiple-choice').remove()
            renderTf()
        }

    //QUESTION 2    
        if (arrayQs[1].type == "multiple") {
            $('.t-f').remove()
            renderMult()
        } else {
            $('.multiple-choice').remove()
            renderTf()
        }

    // //QUESTION 3    
    //     if (arrayQs[2].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 4    
    //     if (arrayQs[3].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 5    
    //     if (arrayQs[4].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 6    
    //     if (arrayQs[5].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 7    
    //     if (arrayQs[6].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 8    
    //     if (arrayQs[7].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 9    
    //     if (arrayQs[8].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }

    // //QUESTION 10    
    //     if (arrayQs[9].type == "multiple") {
    //         $('.t-f').remove()
    //         renderMult()
    //     } else {
    //         $('.multiple-choice').remove()
    //         renderTf()
    //     }


    })
}

const randomizer = function () {

    //QUESTION 1
    $correctanswer = arrayQs[0].correct_answer
    $incorrectanswerA = arrayQs[0].incorrect_answers[0]
    $incorrectanswerB = arrayQs[0].incorrect_answers[1]
    $incorrectanswerC = arrayQs[0].incorrect_answers[2]

    let answerArrayQ1 = [$correctanswer, $incorrectanswerA, $incorrectanswerB, $incorrectanswerC]

    // invoke fisher yates algorithm to randomize array    
    let shuffleArray = answerArrayQ1 => {
        for (let i = answerArrayQ1.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = answerArrayQ1[i];
            answerArrayQ1[i] = answerArrayQ1[j]
            answerArrayQ1[j] = temp;
        }
        return answerArrayQ1
    }
    // store the random array in a new variable    
    randomArrayQ1 = shuffleArray(answerArrayQ1)
    console.log(randomArrayQ1)

    ///
        //QUESTION 2
        $correctanswerQ2 = arrayQs[1].correct_answer
        $incorrectanswerAQ2 = arrayQs[1].incorrect_answers[0]
        $incorrectanswerBQ2 = arrayQs[1].incorrect_answers[1]
        $incorrectanswerCQ2 = arrayQs[1].incorrect_answers[2]
    
        let answerArrayQ2 = [$correctanswerQ2, $incorrectanswerAQ2, $incorrectanswerBQ2, $incorrectanswerCQ2]

        // store the random array in a new variable    
        randomArrayQ2 = shuffleArray(answerArrayQ2)
        console.log(randomArrayQ2)
    }


///
const renderMult = function () {

    //QUESTION 1
    $('.question1').find('.category').html(arrayQs[0].category)
    $('.question1').find('.question').html(arrayQs[0].question)

    $('.question1').find('#a').html(randomArrayQ1[0])
    $('.question1').find('#b').html(randomArrayQ1[1])
    $('.question1').find('#c').html(randomArrayQ1[2])
    $('.question1').find('#d').html(randomArrayQ1[3])
    ///
    
    //QUESTION 2
    $('.question2').find('.category').html(arrayQs[1].category)
    $('.question2').find('.question').html(arrayQs[1].question)

    $('.question2').find('#a').html(randomArrayQ2[0])
    $('.question2').find('#b').html(randomArrayQ2[1])
    $('.question2').find('#c').html(randomArrayQ2[2])
    $('.question2').find('#d').html(randomArrayQ2[3])
    ///
}

const renderTf = function () {

    //QUESTION 1
    $('.question2').find('.category').html(arrayQs[1].category)
    $('.question2').find('.question').html(arrayQs[1].question)


    if (arrayQs[1].correct_answer == "True") {
        $t.html(arrayQs[1].correct_answer)
    } else if (arrayQs[1].correct_answer !== "True") {
        $t.html(arrayQs[1].incorrect_answers)
    }
    //////////
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