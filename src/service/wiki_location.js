const axios=require("axios")

    const GetWikiLocation=async(coordinate)=>{
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
