const axios=require("axios")

const GeoCoder=async(name)=>{
  const res=await axios({
    method: 'get',
    url: 'http://nominatim.openstreetmap.org/search',
    params: {
        format: 'json',
        q:name,
        origin: '*',
        addressdetails:1,
        extratags:1,
        "accept-language":"en"
    }})
    return res.data
 }
 const GeoDeCoder=async(coordinate)=>{
    const res=await axios({
      method: 'get',
      url: 'http://nominatim.openstreetmap.org/reverse',
      params: {
          format: 'jsonv2',
          lat:coordinate.lat,
          lon:coordinate.lon,        
          origin: '*',
          addressdetails:1,
          extratags:1,
          zoom:16,
          "accept-language":"en"
      }})
      const resultData=res.data
      console.log(resultData)
      console.log(resultData)
      const {address}=resultData
      address.lat=resultData.lat
      address.lon=resultData.lon
      address.formatedAddress=resultData.display_name
      return address
 }
// Using callback
module.exports={
  GeoCoder,
  GeoDeCoder
}
