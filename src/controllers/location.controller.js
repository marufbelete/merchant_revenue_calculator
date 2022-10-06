const Genre = require("../models/genre.model");
const {GeoCoder,GeoDeCoder}=require("../service/geo_code")
const {GetDetailInfo}=require("../service/wiki_parse")
exports.getLocationByName=async (req, res, next) => {
    try {
      const {name}=req.query
      console.log(name)
       const result=await GeoCoder(name)
      return res.json(result)
    }
  catch(error) {
    console.log(error)
       next(error)
  }
}
exports.getLocationByCoordinate=async (req, res, next) => {
  try {
    // const { lat, lon,extratags}=req.query
    const coordinate={...req.query}
    const result=await GeoDeCoder(coordinate)
    console.log("result")
    console.log(result)
    const {county,state_district,state,country}=result.address
    let wikifilter
    if(county){wikifilter=county}
    else if(state_district){wikifilter=state_district}
    else if(state){wikifilter=state}
    else{wikifilter=country}

    console.log(wikifilter)
    const block=await GetDetailInfo(wikifilter)
    console.log(block?.query?.pages)
    const key=Object.keys(block?.query?.pages)
    const desc=block?.query?.pages[key[0]]
    result.blocks=desc.extract.split('\n')
    result.total_block=result.blocks.length
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
