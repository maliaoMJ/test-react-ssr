import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'http://rap2api.taobao.org/',
    timeout: 60000
});

export default instance;