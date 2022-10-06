const Genre = require("../models/genre.model");
const {GeoCoder,GeoDeCoder}=require("../service/geo_code")
const {GetDetailInfo,ParseInfo}=require("../service/wiki_parse")
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
exports.getLocationByCoordinate=async (req, res, next) => {
  try {
    // const { lat, lon,extratags}=req.query
    const coordinate={...req.query}
    const result=await GeoDeCoder(coordinate)
    const filter=ParseInfo(result.address)
    const block=await GetDetailInfo(filter)
    const key=Object.keys(block?.query?.pages)
    const desc=block?.query?.pages[key[0]]
    if(desc.extract)
       {
        result.blocks=desc.extract.includes('\n')?desc.extract.split('\n'):desc.extract
        result.total_block=result.blocks.length
       }
    // result.blocks=desc.extract.split('\n')
    // result.total_block=result.blocks.length
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
