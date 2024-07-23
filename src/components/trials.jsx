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

    const checkAnswer = () => {
        console.log("To be clicked at the bottom of the page to see if the chosen answers are correct")
        // console.log(selected)
    }

    // const shuffleArray = (array) => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // };
    // function getAnswers(quiz) {
    //     quiz.map(item => {
    //         // console.log(item.incorrect_answers)
    //         let answers = [item.correct_answer, ...item.incorrect_answers]
    //         console.log(answers)

    //         answers = shuffleArray(answers)
    //         console.log(answers)

    //         return answers
    //     })
    // }
    // if (quiz.length !== 0){
    //     let answers = shuffleArray(getAnswers())
    // }


    // console.log(quiz)
    return (
        <div className="main-display">
            <main>
                { quiz ? (
                    <ol>
                        {quiz.map(quiz => (
                            <QuestionComponent
                                key={quiz.id} 
                                quiz={quiz}
                                checkAnswer={() => checkAnswer()}
                            />
                        ))} 
                    </ol>
                ) : (
                    <p>Loading...</p>
                )}

            </main>
            <button className="button"
                onClick={() => checkAnswer()}
            >
                Check Answers
            </button>
        </div>

    )

}

export default Trials