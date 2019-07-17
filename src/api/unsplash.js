import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e3923abaca1a22b58005a0562bf1d842974f6c597f25a95863dc63544be0873f'
    }
});