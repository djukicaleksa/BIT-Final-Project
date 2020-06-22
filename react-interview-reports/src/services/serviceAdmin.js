import axios from 'axios';

const postAdmin = ({ email, password }) => {
    return axios.post('http://localhost:3333/login', { email, password })
}

export { postAdmin };