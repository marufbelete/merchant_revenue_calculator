const axios=require("axios")

    const GetWikiLocation=async(coordinate)=>{
        // const info=await axios.get("https://en.wikipedia.org/w/api.php?format=jsonp&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=florida&origin=*")
        // const info=await axios_instance.get()
        // const url_location="https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=extracts&exintro=1&explaintext&redirects=1&titles=Damanhur"
        // https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=1000&gscoord=31.039918|30.467019&gsprop=type|region|country|name
        const info=await axios({
            method: 'get',
            url: 'https://en.wikipedia.org/w/api.php',
            params: {
                action: 'query',
                format: 'json',
                list:'geosearch',
                gsradius:1000,
                gsprop:'type|region|country|name',
                gscoord:`${coordinate.lat}|${coordinate.lon}`,
                origin: '*',
            }})
            let result
            const geo_location=info?.data?.query?.geosearch
            console.log(geo_location)
            if(geo_location&&geo_location.length>0)
            {
                result = geo_location?.reduce(function(res, obj) {
                    return (obj.dist < res.dist) ? obj : res;
                });
            }
            else{
                result={}
            }
            
        return result
    }

module.exports={
    GetWikiLocation,
}
