const axios=require("axios")
const url="https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=1&explaintext&redirects=1&titles=Addis Ababa"
// titles=Addis Ababa
const axios_instance = axios.create({
    baseURL:url,
    withCredentials: true
})
module.exports={ axios_instance}


