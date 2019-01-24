import Axios from 'axios';

const instance = Axios.create({
    baseURL: '/',
    timeout: 6000
});

export default instance;