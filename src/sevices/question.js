import axios from "axios";

const baseUrl = "https://opentdb.com/api.php?amount=5&category=9&type=boolean" 

const getQuestions = () => {
    const request = axios.get(baseUrl)

    return request.then(res => {
        return res.data.results
    })
}

export default {getQuestions}