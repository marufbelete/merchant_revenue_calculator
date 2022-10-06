const {axios_instance}=require('./wiki_base_url')
const axios=require("axios")

    const GetDetailInfo=async(place)=>{
        // const info=await axios.get("https://en.wikipedia.org/w/api.php?format=jsonp&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=florida&origin=*")
        // const info=await axios_instance.get()
        const info=await axios({
            method: 'get',
            url: 'https://en.wikipedia.org/w/api.php',
            params: {
                action: 'query',
                format: 'json',
                prop:'extracts',
                origin: '*',
                explaintext:true,
                exintro:true,
                titles:place,
                redirects: 1,
            }})
        return info.data
    }

module.exports={
    GetDetailInfo
}
