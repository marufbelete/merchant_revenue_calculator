const NodeGeocoder = require('node-geocoder');
const axios=require("axios")
const url_one="https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=31.039918%7C30.467019"

const options = {
  provider: 'openstreetmap',
  // Optional depending on the providers
//   fetch: customFetchImplementation,
//   apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
const geocoder = NodeGeocoder(options);
// const dis=compare_location_distance({lat:lat1,lon:lon1}, {lat:lat2,lon:lon2});

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
    // const res = await geocoder.geocode(name);
    console.log(res.data)
    return res.data
 }
 const GeoDeCoder=async(coordinate)=>{
    // const res=await axios.get(`http://nominatim.openstreetmap.org/reverse?lat=${coordinate.lat}&lon=${coordinate.lon}&addressdetails=1&extratags=1&format=json`)
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
          zoom:14,
          "accept-language":"en"
      }})
      const resultData=res.data
      console.log(resultData)
      console.log(resultData)
      const {address}=resultData
      address.lat=resultData.lat
      address.lon=resultData.lon
      address.formatedAddress=resultData.display_name
  //   const res = await geocoder.reverse({
  //     format: 'json',
  //     lat:coordinate.lat,
  //     lon:coordinate.lon,        
  //     origin: '*',
  //     extratags:1,
  //     zoom:14,
  //     "accept-language":"en"
  // });
  console.log(address)
    return address
 }
// Using callback
module.exports={
  GeoCoder,
  GeoDeCoder
}
