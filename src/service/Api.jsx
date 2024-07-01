import axios from "axios"

const URL = "https://preguntados-api.vercel.app/api/"

export const getDifficulty = () => {
    return axios.get(`${URL}difficulty`)
}

export const getQuestions = (difficulty) => {
    const path = difficulty 
    ? "questions?difficulty="+difficulty 
    : "questions";
    return axios.get(URL + path)
}

export const answer = (questionId, option) => {
    return axios.post(URL + "answer",{
        questionId,
        option
    });
}