import ACTIONS from "./index"
import axios from "axios"

export const fetchAllProblems = async (token) => {
    try {
        const res = await axios.get('/api/problem', {
            headers: { Authorization: token }
        })
        return res
    }
    catch (err) {

    }
}

export const fetchProblem = async (token, id) => {
    try {
        const res = await axios.get(`/api/problem/${id}`, {
            headers: { Authorization: token }
        })
        return res
    }
    catch (err) {

    }
}

export const addProblem = async (token) => {
    try {
        const res = await axios.post(`/api/problem/`, {
            headers: { Authorization: token }
        })
        return res
    }
    catch (err) {

    }
}

export const dispatchAllProblems = (res) => {
    try {
        return {
            type: ACTIONS.GET_ALL_PROJECTS,
            payload: res.data.result
        }
    }
    catch (err) {

    }
}

export const dispatchAddProblem = (res) => {
    try {
        return {
            type: ACTIONS.ADD_PROJECT,
            payload: {
                problems: {
                    result: res.data.result
                }
            }
        }
    }
    catch (err) {

    }
}

export const dispatchUpdateProblem = (res) => {
    try {
        return {
            type: ACTIONS.UPDATE_PROJECT,
            payload: {
                problems: {
                    result: res.data.result
                }
            }
        }
    }
    catch (err) {

    }
}

export const dispatchDeleteProblem = (res) => {
    try {
        return {
            type: ACTIONS.DELETE_PROJECT,
            payload: {
                problems: {
                    result: res.data.result
                }
            }
        }
    }
    catch (err) {

    }
}

// export const dispatchReview = (res) => {
//     return {
//         type: ACTIONS.GET_REVIEW,
//         payload: {
//             currentReview:{
//                 question :{
//                     Q1: res.question[0].Q1,
//                     Q2: res.question[0].Q2,
//                     Q3: res.question[0].Q3,
//                     Q4: res.question[0].Q4,
//                     Q5: res.question[0].Q5,
//                     Q6: res.question[0].Q6,
//                     Q7: res.question[0].Q7,
//                     Q8: res.question[0].Q8,
//                 },
//                 comment:res.comment,
//                 status:res.status,
//                 title:res.problem.name,
//                 description:res.problem.description
//             }
//         }
//     }
// }

