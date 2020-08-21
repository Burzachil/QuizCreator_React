import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-14d7e.firebaseio.com/'
})