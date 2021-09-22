//variables
let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;
let arrayQs;
let randomArray;
let gameData;
let correctAnswerArray = [];
let score = 0;


const play = function () {
    getData()
}

const getData = function () {
    $.ajax(`https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`).then(function (data) {

        gameData = data;

        arrayQs = gameData.results

        render()
        getResult()

    })
}

function render() {


    const html = arrayQs.map(function (q, index) {

            correctAnswerArray.push(q.correct_answer)

                $correctanswer = q.correct_answer
                $incorrectanswerA = q.incorrect_answers[0]
                $incorrectanswerB = q.incorrect_answers[1]
                $incorrectanswerC = q.incorrect_answers[2]
                // create answer array
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

                // console.log(randomArray[0])

                if (randomArray[0] === $correctanswer) {
                    console.log(`the correct answer is A`)
                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h2>Category</h2>
                            <p class="category">${q.category}</p>
                            <h2>Question</h2>
                            <p class="question">${q.question}</p>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a">A) ${randomArray[0]}</a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" d="a">A) ${randomArray[0]}</a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b">B) ${randomArray[1]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b">B) ${randomArray[1]}</a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c">C) ${randomArray[2]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c">C) ${randomArray[2]}</a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d">D) ${randomArray[3]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d">D) ${randomArray[3]}</a>
                                    </tr>
                                </tbody>
                            </table>
                            <a class="waves-effect waves-light btn">Next Question</a>      
                        </div>
                    </div>`;                    
                } else if (randomArray[1] === $correctanswer) {
                    console.log(`the correct answer is B`)
                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h2>Category</h2>
                            <p class="category">${q.category}</p>
                            <h2>Question</h2>
                            <p class="question">${q.question}</p>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a">A) ${randomArray[0]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a">A) ${randomArray[0]}</a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b">B) ${randomArray[1]}</a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="b">B) ${randomArray[1]}</a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c">C) ${randomArray[2]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c">C) ${randomArray[2]}</a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d">D) ${randomArray[3]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d">D) ${randomArray[3]}</a>
                                    </tr>
                                </tbody>
                            </table>
                            <a class="waves-effect waves-light btn">Next Question</a>      
                        </div>
                    </div>`;
                } else if (randomArray[2] === $correctanswer) {
                    console.log(`the correct answer is C`)
                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h2>Category</h2>
                            <p class="category">${q.category}</p>
                            <h2>Question</h2>
                            <p class="question">${q.question}</p>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a">A) ${randomArray[0]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a">A) ${randomArray[0]}</a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b">B) ${randomArray[1]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b">B) ${randomArray[1]}</a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c">C) ${randomArray[2]}</a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="c">C) ${randomArray[2]}</a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d">D) ${randomArray[3]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d">D) ${randomArray[3]}</a>
                                    </tr>
                                </tbody>
                            </table>
                            <a class="waves-effect waves-light btn">Next Question</a>      
                        </div>
                    </div>`;
                } else if (randomArray[3] === $correctanswer) {
                    console.log(`the correct answer is D`)
                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h2>Category</h2>
                            <p class="category">${q.category}</p>
                            <h2>Question</h2>
                            <p class="question">${q.question}</p>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a">A) ${randomArray[0]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a">A) ${randomArray[0]}</a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b">B) ${randomArray[1]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b">B) ${randomArray[1]}</a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c">C) ${randomArray[2]}</a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c">C) ${randomArray[2]}</a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d">D) ${randomArray[3]}</a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="d">D) ${randomArray[3]}</a>
                                    </tr>
                                </tbody>
                            </table>
                            <a class="waves-effect waves-light btn">Next Question</a>      
                        </div>
                    </div>`;
                }
        
    })
$('main').html(html);

console.log(html)

}

function getResult() {
    //PG1
        $('.0').on('click', '.waves-effect', function () {
        $('.0.answer-button-off').each(function(){
            $(this).show();
        })
        $('.0.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG2
        $('.1').on('click', '.waves-effect', function () {

        $('.1.answer-button-off').each(function(){
            $(this).show();
        })
        $('.1.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG3
        $('.2').on('click', '.waves-effect', function () {

        $('.2.answer-button-off').each(function(){
            $(this).show();
        })
        $('.2.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG4
        $('.3').on('click', '.waves-effect', function () {

        $('.3.answer-button-off').each(function(){
            $(this).show();
        })
        $('.3.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG5
        $('.4').on('click', '.waves-effect', function () {

        $('.4.answer-button-off').each(function(){
            $(this).show();
        })
        $('.4.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG6
        $('.5').on('click', '.waves-effect', function () {

        $('.5.answer-button-off').each(function(){
            $(this).show();
        })
        $('.5.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG7
        $('.6').on('click', '.waves-effect', function () {

        $('.6.answer-button-off').each(function(){
            $(this).show();
        })
        $('.6.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG8
        $('.7').on('click', '.waves-effect', function () {

        $('.7.answer-button-off').each(function(){
            $(this).show();
        })
        $('.7.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG9
        $('.8').on('click', '.waves-effect', function () {

        $('.8.answer-button-off').each(function(){
            $(this).show();
        })
        $('.8.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG10
        $('.9').on('click', '.waves-effect', function () {

        $('.9.answer-button-off').each(function(){
            $(this).show();
        })
        $('.9.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    console.log(this)
    $(document).on('click', '.waves-effect', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1
            console.log('congrats')
            console.log($(this).closest($('tr')))
            alert('congrats')
        } else {
            $(this).closest($('section, tr')).css("background-color", "red")
            console.log('wrong')
            alert('wrong')
        }
        console.log(score)
    })    

    }



// console.log(randomArray)
// function scroll(){
//     $('a').on('click', 'button', function(){
//         let next = $(this).closest(".question1").next(),
//         section = $(this).closest('html')

// 		section.animate({
//             scrollTop: $('html').scrollTop() + fuller.offset().top

//         }, 700);
// })
// }
// scroll()

play()

M.AutoInit();