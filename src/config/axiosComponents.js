import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://application-ui-default-rtdb.firebaseio.com',
});

export default instance;
