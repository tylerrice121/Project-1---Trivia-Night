//variables
let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;
let arrayQs;
let randomArray;
let gameData;

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


        // randomizer()
        // result()

        renderMult()
        //QUESTION 1    
        // if (arrayQs[0].type == "multiple") {
        //     $('.t-f').remove()
        // } else {
        //     $('.multiple-choice').remove()
        //     renderTf()
        // }
    })
}

// const randomizer = function () {

//     //QUESTION 1
//     $correctanswer = arrayQs[0].correct_answer
//     $incorrectanswerA = arrayQs[0].incorrect_answers[0]
//     $incorrectanswerB = arrayQs[0].incorrect_answers[1]
//     $incorrectanswerC = arrayQs[0].incorrect_answers[2]

//     let answerArrayQ1 = [$correctanswer, $incorrectanswerA, $incorrectanswerB, $incorrectanswerC]

//     // invoke fisher yates algorithm to randomize array    
//     let shuffleArray = answerArrayQ1 => {
//         for (let i = answerArrayQ1.length - 1; i > 0; i--) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp = answerArrayQ1[i];
//             answerArrayQ1[i] = answerArrayQ1[j]
//             answerArrayQ1[j] = temp;
//         }
//         return answerArrayQ1
//     }
//     // store the random array in a new variable    
//     randomArrayQ1 = shuffleArray(answerArrayQ1)
//     console.log(randomArrayQ1)
//     }


///
function renderMult() {

    const html = arrayQs.map(function (q) {

        return `<section class ="question1">
        <h2>Category</h2>
        <p class="category">${q.category}</p>
        <h2>Question</h2>
        <p class="question">${q.question}</p>
        <table class="table table-hover" style="cursor:pointer">
            <tbody class="multiple-choice">
                <tr id="row1">
                    <th scope="row">A</th>
                    <th class="answer" id="a"></th>
                </tr>
                <tr id="row2">
                    <th scope="row">B</th>
                    <th class="answer" id="b"></th>
                </tr>
                <tr id="row3">
                    <th scope="row">C</th>
                    <th class="answer" id="c"></th>
                </tr>
                <tr id="row4">
                    <th scope="row">D</th>
                    <th class="answer" id="d"></th>
                </tr>
            </tbody>
            <tbody class="t-f">
                <tr id="row5">
                    <th class="answer" id="true">True</th>
                </tr>
                <tr id="row6">
                    <th class="answer" id="false">False</th>
                </tr>
            </tbody>
        </table>      
    </section>`

    })
    $('body').html(html);
    console.log(html)







    //QUESTION 1
    // $('.question1').find('.category').html(arrayQs[0].category)
    // $('.question1').find('.question').html(arrayQs[0].question)

    // $('.question1').find('#a').html(randomArrayQ1[0])
    // $('.question1').find('#b').html(randomArrayQ1[1])
    // $('.question1').find('#c').html(randomArrayQ1[2])
    // $('.question1').find('#d').html(randomArrayQ1[3])
    ///
}

// const renderTf = function () {

//     //QUESTION 1
//     $('.question2').find('.category').html(arrayQs[1].category)
//     $('.question2').find('.question').html(arrayQs[1].question)


//     if (arrayQs[1].correct_answer == "True") {
//         $t.html(arrayQs[1].correct_answer)
//     } else if (arrayQs[1].correct_answer !== "True") {
//         $t.html(arrayQs[1].incorrect_answers)
//     }
//     //////////
// }

// const result = function () {
//     $('.answer').on('click', function () {
//         console.log($(this).text())
//         console.log($correctanswer)
//         if ($(this).text() == $correctanswer) {
//             console.log('congrats')
//             alert('congrats')
//         } else {
//             console.log('wrong')
//             alert('wrong')
//         }
//     })
// }

play()

M.AutoInit();