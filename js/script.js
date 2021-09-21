//variables
let $correctanswer;
let $incorrectanswerA;
let $incorrectanswerB;
let $incorrectanswerC;
let arrayQs;
let randomArray;
let gameData;
let correctAnswerArray = [];

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
                                <th scope="row">A</th>
                                <th class="answer" id="a">${randomArray[0]}</th>
                            </tr>
                            <tr id="row2">
                                <th scope="row">B</th>
                                <th class="answer" id="b">${randomArray[1]}</th>
                            </tr>
                            <tr id="row3">
                                <th scope="row">C</th>
                                <th class="answer" id="c">${randomArray[2]}</th>
                            </tr>
                            <tr id="row4">
                                <th scope="row">D</th>
                                <th class="answer" id="d">${randomArray[3]}</th>
                            </tr>
                        </tbody>
                    </table>
                    <a class="waves-effect waves-light btn">Next Question</a>      
                </div>
            </div>    `
                
        }
        
    })
    $('main').html(html);
}

function getResult() {
    $('.answer').on('click', function () {
        if (correctAnswerArray.includes($(this).text())) {
            console.log('congrats')
            alert('congrats')
        } else {
            console.log('wrong')
            alert('wrong')
        }
    })
}

function scroll(){
    $('a').on('click', 'button', function(){
        let next = $(this).closest(".question1").next(),
        section = $(this).closest('html')

		section.animate({
            scrollTop: $('html').scrollTop() + fuller.offset().top
        
        }, 700);
})
}
scroll()

play()

M.AutoInit();