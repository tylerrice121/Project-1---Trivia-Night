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
    $.ajax(`https://opentdb.com/api.php?amount=10&difficulty=easy`).then(function (data) {

        gameData = data;

        //create questions array
        arrayQs = gameData.results
        console.log(arrayQs)

        render()
        result()

    })
}

function render() {
    

    const html = arrayQs.map(function (q) {
        console.log(q.correct_answer)
        correctAnswerArray.push(q.correct_answer)
        console.log(correctAnswerArray)

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


            return `<section class ="question1">
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
            </section>`

        } else if (q.type === "boolean") {
            return `<section class ="question1">
                <h2>Category</h2>
                <p class="category">${q.category}</p>
                <h2>Question</h2>
                <p class="question">${q.question}</p>
                <table class="table table-hover" style="cursor:pointer">
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
            if (q.correct_answer == "True") {
                $('#true').html(q.correct_answer)
            } else if (q.correct_answer !== "True") {
                $('#true').html(q.incorrect_answers)
            }
        }       
    })
    $('body').html(html);
    console.log(html)
}
// if ($(this).text() == $correctanswer)
function result() {
    $('.answer').on('click', function () {
        console.log($(this).text())
        console.log(correctAnswerArray)
        if (correctAnswerArray.includes($(this).text())) {
            console.log('congrats')
            alert('congrats')
        } else {
            console.log('wrong')
            alert('wrong')
        }
    })
}

console.log(correctAnswerArray)

play()

M.AutoInit();