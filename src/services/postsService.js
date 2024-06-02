import axios from 'axios'

const baseUrl = 'https://api-break-news.onrender.com'

export function getAllNews() {
    const response = axios.get(`${baseUrl}/news/getall`);
    return response;       
}   

export function getTopPost() {
    const response = axios.get(`${baseUrl}/news/top`)
    return response;
}