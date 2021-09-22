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


    const html = arrayQs.map(function (q) {

        correctAnswerArray.push(q.correct_answer)


        if (q.type == "multiple") {

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
            console.log(randomArray)
            console.log(correctAnswerArray)
            return `
            <div class = "section">
                <div class ="question1">
                    <h2>Category</h2>
                    <p class="category">${q.category}</p>
                    <h2>Question</h2>
                    <p class="question">${q.question}</p>
                    <table class="table table-hover" style="cursor:pointer">
                        <tbody class="multiple-choice">
                            <tr id="row1">
                                <a class="waves-effect waves-light btn-large disabled" id="answer-button-off" style="display: none"class="answer" id="a">A) ${randomArray[0]}</a>
                                <a class="waves-effect waves-light btn-large" id="answer-button-on" style="display: block" class="answer" id="a">A) ${randomArray[0]}</a>
                            </tr>
                            <tr id="row2">
                                <a class="waves-effect waves-light btn-large disabled" id="answer-button-off" style="display: none"class="answer" id="b">B) ${randomArray[1]}</a>
                                <a class="waves-effect waves-light btn-large" id="answer-button-on" style="display: block" class="answer" id="b">B) ${randomArray[1]}</a>
                            </tr>
                            <tr id="row3">
                                <a class="waves-effect waves-light btn-large disabled" id="answer-button-off" style="display: none"class="answer" id="c">C) ${randomArray[2]}</a>
                                <a class="waves-effect waves-light btn-large" id="answer-button-on" style="display: block" class="answer" id="c">C) ${randomArray[2]}</a>
                            </tr>
                            <tr id="row4">
                                <a class="waves-effect waves-light btn-large disabled" id="answer-button-off" style="display: none"class="answer" id="d">D) ${randomArray[3]}</a>
                                <a class="waves-effect waves-light btn-large" id="answer-button-on" style="display: block" class="answer" id="d">D) ${randomArray[3]}</a>
                            </tr>
                        </tbody>
                    </table>
                    <a class="waves-effect waves-light btn">Next Question</a>      
                </div>
            </div>    `;
            
        }
        
    })
    $('main').html(html);
    console.log(html)
}


function getResult() {
    $(document).on('click', '.waves-effect', function () {
        $('#answer-button-off').show();
        $('#answer-button-on').hide();


        let row1 = $(this).closest($('tbody')).children().closest($('#row1')).children().closest('#a').text()
        let row2 = $(this).closest($('tbody')).children().closest($('#row2')).children().closest('#b').text()
        let row3 = $(this).closest($('tbody')).children().closest($('#row3')).children().closest('#c').text()
        let row4 = $(this).closest($('tbody')).children().closest($('#row4')).children().closest('#d').text()

        console.log($(this).children().closest($('#row4')).text())
        
        // console.log(e.closest($('tbody')).children().closest($('#row1')).children().closest('#a').text())

        if(correctAnswerArray.includes($(this).closest($('tbody')).children().closest($('#row1')).children().closest('#a').text())){
            $(this).closest($('tbody')).children().closest($('#row1')).css("background-color", "green")
        } else {
            $(this).closest($('tbody')).children().closest($('#row1')).css("background-color", "red")
        }
        if(correctAnswerArray.includes($(this).closest($('tbody')).children().closest($('#row2')).children().closest('#b').text())){
            $(this).closest($('tbody')).children().closest($('#row2')).css("background-color", "green")
        } else {
            $(this).closest($('tbody')).children().closest($('#row2')).css("background-color", "red")
        }
        if(correctAnswerArray.includes($(this).closest($('tbody')).children().closest($('#row3')).children().closest('#c').text())){
            $(this).closest($('tbody')).children().closest($('#row3')).css("background-color", "green")
        } else {
            $(this).closest($('tbody')).children().closest($('#row3')).css("background-color", "red")
        }
        if(correctAnswerArray.includes($(this).closest($('tbody')).children().closest($('#row4')).children().closest('#d').text())){
            $(this).closest($('tbody')).children().closest($('#row4')).css("background-color", "green")
        } else {
            $(this).closest($('tbody')).children().closest($('#row4')).css("background-color", "red")
        }

        console.log(correctAnswerArray)

        if (correctAnswerArray.includes($(this).text())) {
            $(this).closest($('tr')).css("background-color", "green")
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