import axios from "axios"

export const api =(search)=>{
return axios.get(`http://www.omdbapi.com/?s=${search}&apikey=5f5ca31e`)
}