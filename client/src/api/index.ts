import axios from 'axios'

export const apiCall = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_BASE_URL
    })
}

export const apiGoogleConnect = () => {
    return axios.create({
        baseURL: process.env.REACT_APP_GOOGLE_SHEET_URL
    })
}
