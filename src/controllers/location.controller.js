const {GetWikiLocation}=require("../service/wiki_location")
const {GeoCoder,GeoDeCoder}=require("../service/geo_code")
const {GetDetailInfo,ParseInfo}=require("../service/wiki_parse")
const {createBlock}=require("../service/create_block")
const { compare_location_distance } = require("../helpers/geo_code")

exports.getLocationByCoordinate=async (req, res, next) => {
  try {
    const coordinate={...req.query}
    const wiki_location= await GetWikiLocation(coordinate)
    if(wiki_location && Object.keys(wiki_location).length !== 0&& Object.getPrototypeOf(wiki_location) === Object.prototype)
        {
          const block=await GetDetailInfo(wiki_location.title)
          const result=createBlock(block,wiki_location)
          return res.json(result)
        }
    const nom_location=await GeoDeCoder(coordinate)
    const filter=ParseInfo(nom_location)
    let block=await GetDetailInfo(filter[0])
    filter.splice(0,1)
    let search_block=true
    let i=1;
    while(filter.length&&search_block)
    {
      const key=Object.keys(block?.query?.pages)
      const desc=block?.query?.pages[key[0]]

      if(desc?.extract?.length>40){search_block=false}
      else{
         block=await GetDetailInfo(filter[0])
         filter.splice(0,1)
         i=i+1
      }
    }
    const dist=compare_location_distance({lat:nom_location.lat,lon:nom_location.lon},{lat:coordinate.lat,lon:coordinate.lon})
    nom_location.dist=Number(dist)*1000
    const result= createBlock(block,nom_location)
    return res.json(result)

  }
catch(error) {
  console.log(error)
     next(error)
}
}


exports.getLocationByName=async (req, res, next) => {
    try {
      const {name}=req.query
      console.log(name)
       const resp=await GeoCoder(name)
       const result=resp[0]
       const filter=ParseInfo(result.address)
       const block=await GetDetailInfo(filter)
       const key=Object.keys(block?.query?.pages)
       const desc=block?.query?.pages[key[0]]
       if(desc.extract)
       {
        console.log(desc.extract)
        result.blocks=desc.extract.includes('\n')?desc.extract.split('\n'):desc.extract
        console.log(result.blocks)
        result.total_block=result.blocks.length
       }
       
      return res.json(result)
    }
  catch(error) {
    console.log(error)
       next(error)
  }
}



exports.getLocationDetail=async (req, res, next) => {
  try {
     const result=await GetDetailInfo()
    return res.json(result)
  }
catch(error) {
  console.log(error)
     next(error)
}
}
