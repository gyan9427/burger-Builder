import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-9427-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;