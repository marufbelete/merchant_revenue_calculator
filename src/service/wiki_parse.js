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

    const ParseInfo=(data)=>{
        const {suburb,county,state_district,state,country}=data
        let wikifilter
        if(suburb){wikifilter=suburb}
        else if(county){wikifilter=county}
        else if(state_district){wikifilter=state_district}
        else if(state){wikifilter=state}
        else{wikifilter=country}
       return wikifilter
    }
module.exports={
    GetDetailInfo,
    ParseInfo
}
