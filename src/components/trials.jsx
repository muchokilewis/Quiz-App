import React, { useState, useEffect } from "react";
import quizService from "../sevices/question"
import QuestionComponent from "./questionComponent"
import { v4 as uuidv4 } from 'uuid';



const Trials = () => {
    const [quiz, setQuiz] = useState([])

    useEffect(() => {
        quizService
            .getQuestions()
            .then(res => {
                const quizWithIds = res.map(res => (
                    {...res, id: uuidv4()}
                ))
                setQuiz(quizWithIds)
            })
            .catch(err => console.log(err))
    }, [])

    const checkAnswer = (selected) => {
        // console.log("check answer")
        // console.log(selected)
    }

    // console.log(quiz)
    return (
        <main>
            <ol>
                {quiz.map(quiz => (
                    <QuestionComponent
                        key={quiz.id} 
                        quiz={quiz}
                        checkAnswer={() => checkAnswer()}
                    />
            ))} 
            </ol>

        </main>
    )

}

export default Trials