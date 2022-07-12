import axios from 'axios';

const polimundoApi = axios.create({
    baseURL: 'http://localhost:8090/api/',
    headers: {
        "Content-type": "application/json",
      }
});

export default polimundoApi;