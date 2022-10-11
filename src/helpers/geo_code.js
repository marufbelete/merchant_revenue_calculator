
const compare_location_distance=(currentLocation,givenLocation)=>{

let lon_c =  currentLocation.lon * Math.PI / 180;
let lat_c = currentLocation.lat * Math.PI / 180;

let lon_g = givenLocation.lon * Math.PI / 180;
let lat_g = givenLocation.lat * Math.PI / 180;

// Haversine formula
let dlon = lon_c - lon_g;
let dlat = lat_c - lat_g;
let a = Math.pow(Math.sin(dlat / 2), 2)
    + Math.cos(lat_g) * Math.cos(lat_c)
    * Math.pow(Math.sin(dlon / 2),2);
let c = 2 * Math.asin(Math.sqrt(a));
let r = 6371;

return(c * r);

}

module.exports={
    compare_location_distance
}