function App() {

    fetch("/quizQuestions")
    .then(res => res.json())
    .then((questions) => {
        sessionStorage.setItem('data', JSON.stringify(questions))
    },
    [])
    

    let questionData = JSON.parse(sessionStorage.getItem('data'));

    const [currentQuestionData, setCurrentQuestionData] = React.useState(0);

    const [intro, setIntro] = React.useState(true);

    const [showScore, setShowScore] = React.useState(false);

    const [score, setScore] = React.useState(0);

    const [hidden, setHidden] = React.useState(true);

    const start = () => {
        setIntro(false);
    }

    const reset = () => {
        location.reload();
    }

    const handleOPtionButtonClick = () => {
        var id = event.target.id;
        console.log(id)

        if(id == questionData[currentQuestionData].answer){
            document.getElementById(id).style.backgroundColor = 'green';
            setScore(score + 1); 
            setHidden(false);
        }else{
            document.getElementById(id).style.backgroundColor = 'red';
            document.getElementById(questionData[currentQuestionData].answer).style.backgroundColor = 'green';
            setHidden(false);
        }

    }

    const next = () => {
        const nextQuestion = currentQuestionData + 1;
        if(nextQuestion < questionData.length){
            const op = document.querySelectorAll('.option');
            op.forEach(o => {
                o.style.backgroundColor = 'transparent';
            })
            setHidden(true);
            setCurrentQuestionData(nextQuestion);
        }else{
            setShowScore(true);
        }
    }

    return (
        <div>
            {intro ? (
                <div class="center">
                    <div>
                        <h1>CoronaVirus Test</h1>
                        <p>Take a quick quiz to test your knowledge on CoVid-19</p>
                    </div>
                    <button onClick={start}>Start</button>
                </div>
            ) : showScore ? (
            <div class="center">
                <div>
                    You scored {score} out of {questionData.length}.
                </div>
                <button onClick={reset}>Reset</button>
            </div>
            ) :  (
                <div class="container center">
                    <div class="question-text">
                        {questionData[currentQuestionData].question}
                    </div>
                    <br>
                    </br>
                    <div class="options">
                        <div >
                            <button class="option" id={questionData[currentQuestionData].option1} onClick={handleOPtionButtonClick}>{questionData[currentQuestionData].option1}</button>
                        </div>
                        <div >
                            <button class="option" id={questionData[currentQuestionData].option2} onClick={handleOPtionButtonClick}>{questionData[currentQuestionData].option2}</button>
                        </div>
                        <div >
                            <button class="option" id={questionData[currentQuestionData].option3} onClick={handleOPtionButtonClick}>{questionData[currentQuestionData].option3}</button>
                        </div>
                        <div >
                            <button class="option" id={questionData[currentQuestionData].option4} onClick={handleOPtionButtonClick}>{questionData[currentQuestionData].option4}</button>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        Score: {score}
                    </div>
                    <br></br>
                    <div hidden={hidden}>
                            <button onClick={next}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#quiz"));