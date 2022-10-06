const NodeGeocoder = require('node-geocoder');
const axios=require("axios")

const options = {
  provider: 'openstreetmap',
  // Optional depending on the providers
//   fetch: customFetchImplementation,
//   apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);
const GeoCoder=async(name)=>{
    const res = await geocoder.geocode(name);
    return res
 }
 const GeoDeCoder=async(coordinate)=>{
    // const res=await axios.get(`http://nominatim.openstreetmap.org/reverse?lat=${coordinate.lat}&lon=${coordinate.lon}&addressdetails=1&extratags=1&format=json`)
    const res=await axios({
      method: 'get',
      url: 'http://nominatim.openstreetmap.org/reverse',
      params: {
          format: 'json',
          lat:coordinate.lat,
          lon:coordinate.lon,        
          origin: '*',
          addressdetails:1,
          extratags:1,
          "accept-language":"en"
      }})
    // const res = await geocoder.reverse(coordinate);
    return res.data
 }
// Using callback
module.exports={
  GeoCoder,
  GeoDeCoder
}
