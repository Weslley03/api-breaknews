import axios from 'axios'
import Cookies from 'js-cookie'

const baseUrl = 'https://api-break-news.onrender.com'
//const baseUrl = 'http://localhost:3000'

export async function getAllNews(offset, limit) {
    const response = await axios.get(`${baseUrl}/news/getall?offset=${offset}&limit=${limit}`);
    return response;
  }

export async function getTopPost() {
    const response = await axios.get(`${baseUrl}/news/top`);
    return response;
}

export function findByTitle(title) {
    const response = axios.get(`${baseUrl}/news/search?title=${title}`); 
    return response;
}

export function findByUser(){
    const response = axios.get(`${baseUrl}/news/byUser`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}

export async function createNews(data){
    
    if(data.banner.length === 0){
        const body = {
            ...data,
            banner: '/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBWRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAITAAMAAAABAAEAAAAAAAAAAAEsAAAAAQAAASwAAAAB/+0ALFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAPHAFaAAMbJUccAQAAAgAEAP/hDIFodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nIHg6eG1wdGs9J0ltYWdlOjpFeGlmVG9vbCAxMS44OCc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp0aWZmPSdodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyc+CiAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICA8dGlmZjpYUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpYUmVzb2x1dGlvbj4KICA8dGlmZjpZUmVzb2x1dGlvbj4zMDAvMTwvdGlmZjpZUmVzb2x1dGlvbj4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6eG1wTU09J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8nPgogIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnN0b2NrOjRhNGE5YzIwLWZlZGItNDMwZS04ZTVlLTBiZWMyNDcwMjliODwveG1wTU06RG9jdW1lbnRJRD4KICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjYwNjY3NmQwLTgxMjYtNDE3Ny05MzYyLTZjYTgwZTFhZTc1OTwveG1wTU06SW5zdGFuY2VJRD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAFAwQEBAMFBAQEBQUFBgcMCAcHBwcPCwsJDBEPEhIRDxERExYcFxMUGhURERghGBodHR8fHxMXIiQiHiQcHh8e/9sAQwEFBQUHBgcOCAgOHhQRFB4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4e/8AAEQgBaAFoAwEiAAIRAQMRAf/EABwAAQADAQEBAQEAAAAAAAAAAAAGBwgFAgEDBP/EAEkQAAEDAgIECwUEBwcEAwEAAAABAgUDBAYRCBhWlAcSITE2QVFhdbPREyJxk8MVMkKBFBYj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'
        }
        const response = await axios.post(`${baseUrl}/news/create`, body, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        }) 
        return response;
    }

    const response = await axios.post(`${baseUrl}/news/create`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`,
            'Content-Type': 'application/json'
        }
    }) 
    return response;
}

export async function getNewsByIdService(id){
    const response = await axios.get(`${baseUrl}/news/findId/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
    return response;
}

export async function NewsByIdSimpleService(id){
    const response = await axios.get(`${baseUrl}/news/findnewsidsimple/${id}`);
    return response;
}

export function editNews(data, id){
    const response = axios.patch(`${baseUrl}/news/upadate/${id}`, data, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}

export function deleteNews(id){
    const response = axios.delete(`${baseUrl}/news/${id}`, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    })
    return response;
}

export async function likedNews(idNew){
    try{
        const response = await axios.patch(`${baseUrl}/news/like/${idNew}`, {}, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        })
        
        return response
    }catch(err){
        if(err.response && err.response.status === 401){
            return
        }
        return console.log('caiu no service do front, ', err)
    }
}

export async function likecheck(idNew){
    try{
        const response = await axios.get(`${baseUrl}/news/likecheck/${idNew}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        })
        return response;
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function commentNews(idNew, data){
    try{
        const response = await axios.patch(`${baseUrl}/news/comment/${idNew}`, data, {
            headers: {
                Authorization: `Bearer ${Cookies.get('token')}`
            }
        })
        return response;
    }catch(err){
        res.status(500).send(err.message);
    }
}

export async function findCommentsNews(idNew){
    try{
        const response = await axios.get(`${baseUrl}/news/comment/commentbyidnews/${idNew}`)
        return response;
    }catch(err){
        console.error(err.message);
    }
}
