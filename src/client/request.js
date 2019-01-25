import Axios from 'axios';

const instance = Axios.create({
    baseURL: '/',
    timeout: 60000
});

export default instance;