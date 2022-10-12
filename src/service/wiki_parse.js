const axios=require("axios")

    const GetDetailInfo=async(place)=>{
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
        const {road,neighbourhood,suburb}=data
        let wikifilter=[]
        road&&wikifilter.push(road)
        neighbourhood&&wikifilter.push(neighbourhood)
        suburb&&wikifilter.push(suburb)
        console.log(wikifilter)
       return wikifilter
    }
module.exports={
    GetDetailInfo,
    ParseInfo
}
