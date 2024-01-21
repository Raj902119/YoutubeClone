import axios from "axios";


const BASE_URL='https://youtube-v31.p.rapidapi.com';
const apiKey = 'a0e6cee413mshe92c778c2766125p1b7845jsn0d8288bcc911'


export const fetchAPI = async (url) => {
    const headers = {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    };
    const params = {
      maxResults: '50'
    }
    const { data } = await axios.get(`${BASE_URL}/${url}`, { headers,params });
    return data;
  };
