(function(){

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
    $.ajax(`https://opentdb.com/api.php?amount=10&type=multiple`).then(function (data) {

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

                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h5 class="cursive">Category</h5>
                            <p class="category"><b>${q.category}</b></p>
                            <h4 class="cursive">Question</h4>
                            <h6 class="question"><b>${q.question}</b></h6>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled correct-answer answer-button-off" style="display: none" id="a">A) ${randomArray[0]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" d="a"><b>A) ${randomArray[0]}</b></a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b">B) ${randomArray[1]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b"><b>B) ${randomArray[1]}</b></a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c">C) ${randomArray[2]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c"><b>C) ${randomArray[2]}</b></a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d">D) ${randomArray[3]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d"><b>D) ${randomArray[3]}</b></a>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="${index} answer-correct" style="display: none"><b>Correct!</b></p>
                            <p class="${index} answer-incorrect" style="display: none"><b>Not quite! The correct answer was A) ${randomArray[0]}</b></p>
                            <a class="waves-effect waves-light btn next-button ${index}">Next Question</a>      
                        </div>
                    </div>`;                    
                } else if (randomArray[1] === $correctanswer) {

                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h5 class="cursive"">Category</h5>
                            <p class="category"><b>${q.category}</b></p>
                            <h4 class="cursive">Question</h4>
                            <h6 class="question"><b>${q.question}</b></h6>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a"><b>A) ${randomArray[0]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a"><b>A) ${randomArray[0]}</b></a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled correct-answer answer-button-off" style="display: none" id="b"><b>B) ${randomArray[1]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="b"><b>B) ${randomArray[1]}</b></a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c"><b>C) ${randomArray[2]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c"><b>C) ${randomArray[2]}</b></a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d"><b>D) ${randomArray[3]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d"><b>D) ${randomArray[3]}</b></a>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="${index} answer-correct" style="display: none"><b>Correct!</b></p>
                            <p class="${index} answer-incorrect" style="display: none"><b>Not quite! The correct answer was B) ${randomArray[1]}</b></p>
                            <a class="waves-effect waves-light btn next-button ${index}">Next Question</a>      
                        </div>
                    </div>`;
                } else if (randomArray[2] === $correctanswer) {

                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h5 class="cursive">Category</h5>
                            <p class="category"><b>${q.category}</b></p>
                            <h4 class="cursive">Question</h4>
                            <h6 class="question"><b>${q.question}</b></h6>
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a"><b>A) ${randomArray[0]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a"><b>A) ${randomArray[0]}</b></a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b"><b>B) ${randomArray[1]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b"><b>B) ${randomArray[1]}</b></a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled correct-answer answer-button-off" style="display: none" id="c"><b>C) ${randomArray[2]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="c"><b>C) ${randomArray[2]}</b></a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="d"><b>D) ${randomArray[3]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="d"><b>D) ${randomArray[3]}</b></a>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="${index} answer-correct" style="display: none"><b>Correct!</b></p>
                            <p class="${index} answer-incorrect" style="display: none"><b>Not quite! The correct answer was C) ${randomArray[2]}</b></p>
                            <a class="waves-effect waves-light btn next-button ${index}">Next Question</a>      
                        </div>
                    </div>`;
                } else if (randomArray[3] === $correctanswer) {

                    return `
                    <div class = "${index} section">
                        <div class ="question1">
                            <h5 class="cursive">Category</h5>
                            <p class="category"><b>${q.category}</b></p>
                            <h4 class="cursive">Question</h4>
                            <h6 class="question"><b>${q.question}</b></h6>  
                            <table class="table table-hover" style="cursor:pointer">
                                <tbody class="multiple-choice">
                                    <tr id="row1">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="a"><b>A) ${randomArray[0]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="a"><b>A) ${randomArray[0]}</b></a>
                                    </tr>
                                    <tr id="row2">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="b"><b>B) ${randomArray[1]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="b"><b>B) ${randomArray[1]}</b></a>
                                    </tr>
                                    <tr id="row3">
                                        <a class="${index} waves-effect waves-light btn-large disabled answer-button-off" style="display: none" id="c"><b>C) ${randomArray[2]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large answer-button-on" style="display: block" id="c"><b>C) ${randomArray[2]}</b></a>
                                    </tr>
                                    <tr id="row4">
                                        <a class="${index} waves-effect waves-light btn-large disabled correct-answer answer-button-off" style="display: none" id="d"><b>D) ${randomArray[3]}</b></a>
                                        <a class="${index} waves-effect waves-light btn-large correct-answer answer-button-on" style="display: block" id="d"><b>D) ${randomArray[3]}</b></a>
                                    </tr>
                                </tbody>
                            </table>
                            <p class="${index} answer-correct" style="display: none"><b>Correct!</b></p>
                            <p class="${index} answer-incorrect" style="display: none"><b>Not quite! The correct answer was D) ${randomArray[3]}</b></p>
                            <a class="waves-effect waves-light btn next-button ${index}">Next Question</a>      
                        </div>
                    </div>`;
                }
        
    })
$('main').html(html);



}

function getResult() {

    //PG1
        $('.0').on('click', '.answer-button-on', function () {
        $('.0.answer-button-off').each(function(){
            $(this).show();
        })
        $('.0.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG2
        $('.1').on('click', '.answer-button-on', function () {

        $('.1.answer-button-off').each(function(){
            $(this).show();
        })
        $('.1.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG3
        $('.2').on('click', '.answer-button-on', function () {

        $('.2.answer-button-off').each(function(){
            $(this).show();
        })
        $('.2.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG4
        $('.3').on('click', '.answer-button-on', function () {

        $('.3.answer-button-off').each(function(){
            $(this).show();
        })
        $('.3.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG5
        $('.4').on('click', '.answer-button-on', function () {

        $('.4.answer-button-off').each(function(){
            $(this).show();
        })
        $('.4.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG6
        $('.5').on('click', '.answer-button-on', function () {

        $('.5.answer-button-off').each(function(){
            $(this).show();
        })
        $('.5.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG7
        $('.6').on('click', '.answer-button-on', function () {

        $('.6.answer-button-off').each(function(){
            $(this).show();
        })
        $('.6.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG8
        $('.7').on('click', '.answer-button-on', function () {

        $('.7.answer-button-off').each(function(){
            $(this).show();
        })
        $('.7.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG9
        $('.8').on('click', '.answer-button-on', function () {

        $('.8.answer-button-off').each(function(){
            $(this).show();
        })
        $('.8.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//
    //PG10
        $('.9').on('click', '.answer-button-on', function () {

        $('.9.answer-button-off').each(function(){
            $(this).show();
        })
        $('.9.answer-button-on').each(function(){
            $(this).hide();
        })
    })
//

    //pg1
    $('.0').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.0.answer-correct').show()
    
        } else {

           $('.0.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg2
    $('.1').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.1.answer-correct').show()
    
        } else {

           $('.1.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg3
    $('.2').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.2.answer-correct').show()
    
        } else {

           $('.2.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg4
    $('.3').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.3.answer-correct').show()
    
        } else {

           $('.3.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg5
    $('.4').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.4.answer-correct').show()
    
        } else {

           $('.4.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg6
    $('.5').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.5.answer-correct').show()
    
        } else {

           $('.5.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //
    //pg7
    $('.6').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.6.answer-correct').show()
    
        } else {

           $('.6.answer-incorrect').show()
        }

        renderScore()
    })    
    //
    //pg8
    $('.7').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.7.answer-correct').show()
    
        } else {
            console.log('wrong')
           $('.7.answer-incorrect').show()
        }

        renderScore()
    })    
    //
    //pg9
    $('.8').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.8.answer-correct').show()
    
        } else {
            console.log('wrong')
           $('.8.answer-incorrect').show()
        }

        renderScore()
    })    
    //
    //pg10
    $('.9').on('click', '.answer-button-on', function () {
        if ($(this).hasClass('correct-answer')) {
            score = score + 1

            $('.9.answer-correct').show()
    
        } else {
            console.log('wrong')
           $('.9.answer-incorrect').show()
        }
        console.log(score)
        renderScore()
    })    
    //

    }

function renderScore(){
    $('.results').empty().html(`Your final score: ${score}/10`)
    
    $('.end').on('click','.play-again',function() {
        location.href=location.href;
    });
}

function scrollClick(){

    //scroll to 1
    $(document).on('click','.begin',function () {
        $('html, body').animate({
            scrollTop: $('.0.section').offset().top
        });
        })
    //scroll to 2
    $(document).on('click','.0.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.1.section').offset().top
    });
    })
    //
    //scroll to 3
    $(document).on('click','.1.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.2.section').offset().top
    });
    })
    //
    //scroll to 4
    $(document).on('click','.2.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.3.section').offset().top
    });
    })
    //
    //scroll to 5
    $(document).on('click','.3.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.4.section').offset().top
    });
    })
    //
    //scroll to 6
    $(document).on('click','.4.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.5.section').offset().top
    });
    })
    //
    //scroll to 7
    $(document).on('click','.5.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.6.section').offset().top
    });
    })
    //
    //scroll to 2
    $(document).on('click','.0.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.1.section').offset().top
    });
    })
    //
    //scroll to 8
    $(document).on('click','.6.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.7.section').offset().top
    });
    })
    //
    //scroll to 9
    $(document).on('click','.7.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.8.section').offset().top
    });
    })
    //
    //scroll to 10
    $(document).on('click','.8.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.9.section').offset().top
    });
    })
    //
    //scroll to end
    $(document).on('click','.9.next-button',function () {
    $('html, body').animate({
        scrollTop: $('.end').offset().top
    });
    })
    //
}

scrollClick()

play()

M.AutoInit();

})();