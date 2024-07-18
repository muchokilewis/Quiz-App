import React from "react";

const Question = (props) => {
    console.log(props)

    return (
        <div className="question-display">
            <li>{props.info.question}</li>
            <p className="answer">{props.info.correct_answer}</p>
        </div>
    )
}

export default Question