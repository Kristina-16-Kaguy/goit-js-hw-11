import axios from 'axios';

const API_KEY = '52515106-cf2fe0ed90e49660ada5f5535';
const BASE_URL = 'https://pixabay.com/api/';

function getImagesByQuery(query) {
  axios(BASE_URL)
    .then(res => {})
    .catch(error => {});
}
