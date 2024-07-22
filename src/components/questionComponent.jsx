import React, { useState } from "react";

const QuestionComponent = (props) => {
    const [correct, setCorrect] = useState(false)
    // console.log(props)
    const hasSpecialCharacters = /&quot;/.test(props.question)

    const renderQuestion = (questionText) => {
        if (hasSpecialCharacters) {
            const parser = new DOMParser()
            const parsedQuestion = parser.parseFromString(questionText, 'text/html')
            return parsedQuestion.body.textContent
        }
        return questionText
    }

    let answers = [props.quiz.correct_answer, ...props.quiz.incorrect_answers]

    const shuffleArray = (array) => {
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    answers = shuffleArray(answers)

    const handleAnswerClick = (answer) => {
        console.log(correct)
        // props.checkAnswer(answer)
        console.log("Clicked Answer:" ,answer)
        console.log("Correct answer: ", props.quiz.correct_answer)
        if (props.quiz.correct_answer === answer) {
            setCorrect(true)
            console.log("correct answer clicked")
            // return styles
        }
        
    }


    console.log(correct)

    return (
        <div className="question-display">
            <li>
                <p>{renderQuestion(props.quiz.question)}</p>
                <div className="answers">
                    {answers.map((answer, index) => (
                        <p className="answer" 
                            key={index} 
                            onClick={() => handleAnswerClick(answer)}
                            style={
                                {backgroundColor: answer === props.quiz.correct_answer && correct ? "green" : "#red"} 
                            }
                        >
                            {answer}
                        </p>
                    ))}
                </div>
            </li>
        </div>


       
    )

}

export default QuestionComponent