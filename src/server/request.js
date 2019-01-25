import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://192.168.50.33:8000',
    timeout: 60000
});

export default instance;