import React, { useState, useEffect } from "react";

const Quiz = () => {
    const [data, setData] = useState()

    useEffect(function() {
        console.log("ran")
        if(!data) {  
            console.log("There is no data. It is being fetched")       
            fetch("https://the-trivia-api.com/v2/questions/")
                .then(res => res.json())
                .then(data => setData(data))
                .catch(error => console.error("Error fetching data:", error))
        }
        else {
            console.log("Data iko")
        }
    }, [])

    console.log(data)

    return (
        <main>
            <h1>Questions go here</h1>
            {data ? (
                <div>
                    {/* <h3>{data[0].question}</h3> */}
                    {data.map(entry => <li>{entry.question.text}</li>)}
                </div> 
            ) : (
                <p>Loading...</p>
            )}
        </main>
    )
}

export default Quiz