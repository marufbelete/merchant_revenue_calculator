const autocannon=require('autocannon')
require('dotenv').config({path:'./.env'})
function startBench(){
// let request_number=0
//this hlep us to know iterate over each data for every reuest
    const url=process.env.BASE_URL
    console.log(url)
    const args=process.argv?.slice(2)
    const connections=args[0]||100
    const maxConnectionRequests=args[1]||10
    const instance=autocannon({
        url,
        connections,
        maxConnectionRequests,
        duration:10,
        header:{
            'content-type':"application/json"
        },
        requests:[{
            method:"GET",
            path:"/getgenre"
        }]
        //for post case
        // request:[{
        //     method:"GET",
        //     path:"/",
        // setUpRequest:(request)=>{
            // request.body=someObject 
            // it can be from json file
            // some array of object
            // array[request_number]
            // request_number++
            // return request
        // }
        // }]


    },doneBenchmark)
    autocannon.track(instance)
    function doneBenchmark(err,res){
        console.log("Benchmark Done",err,res)

    }
}
startBench()