import React, { useState, useEffect } from "react";
import Question from "./question"

const Quiz = () => {
    const [data, setData] = useState()

    useEffect(() => {
        console.log("ran")
        if(!data){
            fetch("https://opentdb.com/api.php?amount=5&category=9&type=boolean")
                .then(res => res.json())
                .then(res => setData(res.results))
        }

    }, [])

    console.log(data)

    return (
        <main>
            <h1>Questions go here</h1>
            {data ? (
                <div className="main-display">
                    <div>
                        {data.map(entry => {
                            return <Question info={entry}  />
                            }
                        )}
                    </div>
                   
                    
                </div> 
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
}

export default Quiz